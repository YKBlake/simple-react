package com.ykb.app.react.data.dao

import com.ykb.app.react.data.model.Test
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import org.springframework.stereotype.Service

@Repository
interface TestRepo : JpaRepository<Test, Long>

@Service
class TestDao(private val repo: TestRepo) {

}