package com.ykb.app.react.web.api

import com.ykb.app.react.data.model.Account
import com.ykb.app.react.services.AccountManager
import com.ykb.app.react.web.dto.response.PageInitResponseDto
import jakarta.transaction.Transactional
import org.springframework.http.ResponseEntity
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/account")
class AccountApi(
    private val accountManager: AccountManager
) {

    @Transactional
    @PostMapping("/add")
    fun add(@RequestParam username: String, @RequestParam password: String) : ResponseEntity<String> {
        if(username.isBlank() || password.isBlank())
            throw IllegalArgumentException("username and password parameters are mandatory")
        val account = Account()
        account.username = username
        account.password = password
        accountManager.createUser(account)
        return ResponseEntity.ok("")
    }

    @PostMapping("/deposit")
    fun deposit(@RequestParam amount: Double) : ResponseEntity<String> {
        try {
            val account = SecurityContextHolder.getContext().authentication.principal as Account
            accountManager.deposit(account, amount)
            return ResponseEntity.ok(account.getBalance().toString())
        } catch (ex : Exception) {
            return ResponseEntity.badRequest().body(ex.localizedMessage)
        }
    }

    @PostMapping("/withdraw")
    fun withdraw(@RequestParam amount: Double) : ResponseEntity<String> {
        try {
            val account = SecurityContextHolder.getContext().authentication.principal as Account
            accountManager.withdraw(account, amount)
            return ResponseEntity.ok(account.getBalance().toString())
        } catch (ex : Exception) {
            return ResponseEntity.badRequest().body(ex.localizedMessage)
        }
    }

    @PostMapping("/transfer")
    fun transfer(@RequestParam iban: String, @RequestParam amount: Double) : ResponseEntity<String> {
        try {
            if (iban.length != 20)
                throw IllegalArgumentException("Invalid IBAN number")
            val sendingAccount = SecurityContextHolder.getContext().authentication.principal as Account
            accountManager.transfer(sendingAccount, iban, amount)
            return ResponseEntity.ok(sendingAccount.getBalance().toString())
        } catch (ex : Exception) {
            return ResponseEntity.badRequest().body(ex.localizedMessage)
        }
    }

    @GetMapping("/page-init")
    fun pageInit() : ResponseEntity<PageInitResponseDto> {
        val account = SecurityContextHolder.getContext().authentication.principal as Account
        return ResponseEntity.ok(
                PageInitResponseDto(
                    account.iban,
                account.username,
                account.getBalance().toString()
            )
        )
    }

}