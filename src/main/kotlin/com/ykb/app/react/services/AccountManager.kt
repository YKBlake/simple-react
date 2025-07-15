package com.ykb.app.react.services

import com.ykb.app.react.data.dao.AccountDao
import com.ykb.app.react.data.model.Account
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.security.provisioning.UserDetailsManager
import org.springframework.stereotype.Service

@Service
class AccountManager(
    private val dao: AccountDao,
    private val passwordEncoder: PasswordEncoder
) : UserDetailsManager {

    override fun loadUserByUsername(username: String?): UserDetails? {
        stringValidation(username)
        return dao.findByUsername(username!!)
    }

    override fun createUser(user: UserDetails?) {
        entityValidation(user)
        (user as Account).password = passwordEncoder.encode(user.password)
        dao.save(user)
    }

    override fun updateUser(user: UserDetails?) {
        entityValidation(user)
    }

    override fun deleteUser(username: String?) {
        stringValidation(username)
        dao.deleteByUsername(username!!)
    }

    override fun changePassword(oldPassword: String?, newPassword: String?) {
        stringValidation(oldPassword)
        stringValidation(newPassword)
        val account = SecurityContextHolder.getContext().authentication.principal as Account?
        entityValidation(account)
        if(!passwordEncoder.matches(oldPassword!!, account!!.password))
            throw IllegalArgumentException("Given password is incorrect")
        account.password = passwordEncoder.encode(newPassword)
        dao.save(account)
    }

    override fun userExists(username: String?): Boolean {
        return loadUserByUsername(username) != null
    }

    private fun entityValidation(user: UserDetails?) {
        if(user !is Account)
            throw IllegalArgumentException("Not an account")
    }

    private fun stringValidation(text: String?) {
        if(text.isNullOrEmpty())
            throw IllegalArgumentException("Parameter cannot be null or empty")
    }

}