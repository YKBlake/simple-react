package com.ykb.app.react.web.api

import com.ykb.app.react.data.model.Account
import com.ykb.app.react.services.AccountManager
import jakarta.transaction.Transactional
import org.springframework.http.ResponseEntity
import org.springframework.security.core.context.SecurityContextHolder
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
        val sendingAccount = SecurityContextHolder.getContext().authentication.principal as Account
        accountManager.deposit(sendingAccount, amount)
        return ResponseEntity.ok("")
    }

    @PostMapping("/withdraw")
    fun withdraw(@RequestParam amount: Double) : ResponseEntity<String> {
        val sendingAccount = SecurityContextHolder.getContext().authentication.principal as Account
        accountManager.withdraw(sendingAccount, amount)
        return ResponseEntity.ok("")
    }

    @PostMapping("/transfer")
    fun transfer(@RequestParam ibanNumber: String, @RequestParam amount: Double) : ResponseEntity<String> {
        if(ibanNumber.length != 34)
            throw IllegalArgumentException("Invalid IBAN number")
        val sendingAccount = SecurityContextHolder.getContext().authentication.principal as Account
        accountManager.transfer(sendingAccount, ibanNumber, amount)
        return ResponseEntity.ok("")
    }

}