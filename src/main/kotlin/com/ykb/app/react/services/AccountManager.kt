package com.ykb.app.react.services

import com.ykb.app.react.data.dao.AccountDao
import com.ykb.app.react.data.model.Account
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UsernameNotFoundException
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
        val account = dao.findByUsername(username!!)
        if (account == null)
            throw UsernameNotFoundException("account '{$username}' not found")
        return account
    }

    override fun createUser(user: UserDetails?) {
        entityValidation(user)
        if(userExists((user as Account).username))
            throw IllegalArgumentException("Account with username[${user.username}] already exists")
        user.password = passwordEncoder.encode(user.password)
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
        stringValidation(username)
        return dao.findByUsername(username!!) != null
    }

    private fun entityValidation(user: UserDetails?) {
        if(user !is Account)
            throw IllegalArgumentException("Not an account")
    }

    private fun stringValidation(text: String?) {
        if(text.isNullOrEmpty())
            throw IllegalArgumentException("Parameter cannot be null or empty")
    }

    fun deposit(account: Account, amount: Double) {
        if(amount <= 0.0)
            throw IllegalArgumentException("Amount should be positive")
        account.addBalance(amount)
        dao.save(account)
    }

    fun withdraw(account: Account, amount: Double) {
        if(amount <= 0.0)
            throw IllegalArgumentException("Amount should be positive")

        if(account.getBalance() < amount)
            throw IllegalArgumentException("Insufficient funds")

        account.reduceBalance(amount)
        dao.save(account)
    }

    fun transfer(sendingAccount: Account, receivingAccountIban: String, amountToBeTransferred: Double) {
        if(sendingAccount.getBalance() < amountToBeTransferred)
            throw IllegalArgumentException("Insufficient funds")

        val receivingAccount = dao.findById(receivingAccountIban)
        if(receivingAccount==null)
            throw IllegalArgumentException("Receiving account '{$receivingAccountIban}' not found")

        sendingAccount.reduceBalance(amountToBeTransferred)
        receivingAccount.addBalance(amountToBeTransferred)
        dao.saveAll(listOf(sendingAccount, receivingAccount))
    }

}