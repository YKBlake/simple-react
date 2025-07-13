package com.ykb.app.react.utility

import java.util.*

fun generateIbanNumber(countryCode: String = "TR") : String {
    val random = Random()
    val checkDigits = random.nextInt(90) + 10
    val bban = (1..16)
        .map { random.nextInt(10) }
        .joinToString("")
    return "$countryCode$checkDigits$bban"
}