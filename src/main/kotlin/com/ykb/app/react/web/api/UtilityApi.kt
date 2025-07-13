package com.ykb.app.react.web.api

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api")
class UtilityApi {

    @GetMapping("/hello")
    fun helloWorld() : String {
        return "Hello World"
    }

}