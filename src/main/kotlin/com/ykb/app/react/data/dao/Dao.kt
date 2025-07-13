package com.ykb.app.react.data.dao

import org.springframework.data.jpa.repository.JpaRepository
import java.util.*

open class Dao<T : Any, ID : Any>(
    protected val repo: JpaRepository<T, ID>
) {

    fun delete(entity: T) {
        repo.delete(entity)
    }

    fun deleteById(id: ID) {
        repo.deleteById(id)
    }

    fun deleteAll() {
        repo.deleteAll()
    }

    fun save(entity: T) {
        repo.save(entity)
    }

    fun saveAll(list: List<T>) {
        repo.saveAll(list)
    }

    fun findById(id: ID): Optional<T> {
        return repo.findById(id)
    }

    fun findAll(): List<T> {
        return repo.findAll()
    }

    fun count(): Long {
        return repo.count()
    }

    fun existsById(id: ID): Boolean {
        return repo.existsById(id)
    }

}