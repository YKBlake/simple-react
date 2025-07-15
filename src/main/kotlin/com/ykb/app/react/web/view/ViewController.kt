package com.ykb.app.react.web.view

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping

@Controller
class ViewController {

    @GetMapping("/login")
    fun login(): String {
        return "forward:/index.html"
    }

    @GetMapping("/")
    fun helloWorld(): String {
        return "forward:/index.html"
    }

}
