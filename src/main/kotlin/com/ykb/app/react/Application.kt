package com.ykb.app.react

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.domain.EntityScan
import org.springframework.boot.runApplication
import org.springframework.data.jpa.repository.config.EnableJpaRepositories

@SpringBootApplication(scanBasePackages = ["com.ykb.app.react"])
@EnableJpaRepositories(basePackages = ["com.ykb.app.react.data.repo"])
@EntityScan(basePackages = ["com.ykb.app.react.data.model"])
class Application

fun main(args: Array<String>) {
	runApplication<Application>(*args)
}
