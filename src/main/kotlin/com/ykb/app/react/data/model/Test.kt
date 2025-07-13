package com.ykb.app.react.data.model

import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.Table

@Entity
@Table(name = "TEST")
class Test {

    @Id
    val id = 1L

}