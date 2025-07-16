package com.ykb.app.react.web.api

import com.ykb.app.react.data.model.Account
import com.ykb.app.react.services.AccountManager
import jakarta.servlet.http.HttpServletResponse
import jakarta.transaction.Transactional
import org.springframework.http.ResponseEntity
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
    fun add(response: HttpServletResponse, @RequestParam username: String, @RequestParam password: String) : ResponseEntity<String> {
        if(username.isBlank() || password.isBlank())
            throw IllegalArgumentException("username and password parameters are mandatory")
        val account = Account()
        account.username = username
        account.password = password
        accountManager.createUser(account)
        return ResponseEntity.ok("")
    }

}