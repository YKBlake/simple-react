package com.ykb.app.react.data.repo

import com.ykb.app.react.data.model.Account
import jakarta.transaction.Transactional
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository

@Repository
interface AccountRepo : JpaRepository<Account, String> {

    @Query("select c from Account c where c.username = :username")
    fun findByUsername(username: String): Account?

    @Transactional
    @Query("delete from Account c where c.username = :username")
    fun deleteByUsername(username: String): Account?

}