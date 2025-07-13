package com.ykb.app.react.web.api

import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/account")
class AccountApi {

    @PostMapping("/add")
    fun add() {

    }

}