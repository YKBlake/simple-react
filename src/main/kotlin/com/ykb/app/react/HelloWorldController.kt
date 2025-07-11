package com.ykb.app.react

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping

@Controller
class HelloWorldController {
    @GetMapping("/helloworld")
    fun helloWorld(): String {
        return "forward:/index.html"
    }
}
