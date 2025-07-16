package com.ykb.app.react.web.auth

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.http.HttpMethod
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.security.web.SecurityFilterChain

@Configuration
class AuthConfig {

    @Bean
    fun securityFilterChain(httpSecurity : HttpSecurity) : SecurityFilterChain {
        return httpSecurity
            .csrf {
                it.disable()
            }
            .formLogin {
                it
                    .loginPage("/login")
                    .loginProcessingUrl("/api/authenticate")
                    .defaultSuccessUrl("/", true)
                    .failureUrl("/login?error")
            }
            .logout {
                it
                    .logoutUrl("/api/logout")
                    .logoutSuccessUrl("/login")
                    .invalidateHttpSession(true)
                    .deleteCookies("JSESSIONID")
            }
            .authorizeHttpRequests {
                it
                    .requestMatchers(HttpMethod.GET,"/index.html", "/login", "/register", "/assets/**").permitAll()
                    .requestMatchers(HttpMethod.POST,"/error", "/api/authenticate", "/api/account/add").permitAll()
                    .anyRequest().authenticated()
            }
            .build()
    }

    @Bean
    fun passwordEncoder(): PasswordEncoder {
        return BCryptPasswordEncoder()
    }

}