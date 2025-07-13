package com.ykb.app.react.data.repo

import com.ykb.app.react.data.model.Account
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface AccountRepo : JpaRepository<Account, String>