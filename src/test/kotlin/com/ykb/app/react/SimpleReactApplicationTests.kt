package com.ykb.app.react

import com.ykb.app.react.data.model.Account
import com.ykb.app.react.data.model.Role
import com.ykb.app.react.services.AccountManager
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class SimpleReactApplicationTests {

	@Autowired
	lateinit var accountManager: AccountManager

	@Test
	fun createUser() {
		accountManager.createUser(
			Account("Kaan", "1234", emptyList<Role>().toMutableList())
		)
	}

	@Test
	fun deleteUser() {
		accountManager.deleteUser("Elif")
	}

}
