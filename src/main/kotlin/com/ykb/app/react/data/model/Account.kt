package com.ykb.app.react.data.model

import com.ykb.app.react.utility.generateIbanNumber
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.Table

@Entity
@Table(name = "ACCOUNT")
class Account {

    @Id
    @Column(name = "IBAN", columnDefinition = "VARCHAR(34)")
    val iban: String = generateIbanNumber()

    @Column(name = "BALANCE", columnDefinition = "BIGINT", nullable = false)
    val balance: Long = 0L

}