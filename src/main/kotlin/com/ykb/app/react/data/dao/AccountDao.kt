package com.ykb.app.react.data.dao

import com.ykb.app.react.data.model.Account
import com.ykb.app.react.data.repo.AccountRepo
import org.springframework.stereotype.Service

@Service
class AccountDao(repo: AccountRepo) : Dao<Account, String>(repo)