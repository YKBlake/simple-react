package com.ykb.app.react

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class SimpleReactApplication

fun main(args: Array<String>) {
	runApplication<SimpleReactApplication>(*args)
}
