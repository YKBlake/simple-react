package com.ykb.app.react.data.model

import com.ykb.app.react.utility.generateIbanNumber
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.FetchType
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.JoinTable
import jakarta.persistence.ManyToMany
import jakarta.persistence.Table
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.userdetails.UserDetails

@Entity
@Table(name = "ACCOUNT")
class Account(
    @Column(name = "USERNAME", unique = true, columnDefinition = "VARCHAR(64)", nullable = false)
    private var username: String,
    @Column(name = "PASSWORD", columnDefinition = "VARCHAR(256)", nullable = false)
    private var password: String,
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "USER_ROLES",
        joinColumns = [JoinColumn(name = "USER_ID")],
        inverseJoinColumns = [JoinColumn(name = "ROLE_ID")]
    )
    private var roles: MutableList<Role>,
) : UserDetails {

    @Id
    @Column(name = "IBAN", columnDefinition = "VARCHAR(34)")
    val iban: String = generateIbanNumber()

    @Column(name = "BALANCE", columnDefinition = "BIGINT", nullable = false)
    val balance: Long = 0L

    constructor() : this("", "", mutableListOf())

    fun setRoles(roles: List<Role>) {
        this.roles = roles.toMutableList()
    }

    override fun getAuthorities(): MutableCollection<out GrantedAuthority> {
        return roles.stream()
            .flatMap { r -> r.getAuthorities().stream() }
            .distinct()
            .toList()
    }

    fun setUsername(username: String) {
        this.username = username
    }

    override fun getUsername(): String {
        return username
    }

    fun setPassword(password: String) {
        this.password = password
    }

    override fun getPassword(): String {
        return password
    }

    override fun isAccountNonExpired(): Boolean {
        return true
    }

    override fun isAccountNonLocked(): Boolean {
        return true
    }

    override fun isCredentialsNonExpired(): Boolean {
        return true
    }

    override fun isEnabled(): Boolean {
        return true
    }

}