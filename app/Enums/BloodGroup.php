<?php

namespace App\Enums;

enum BloodGroup: string
{

    const A = "A+";
    const AN = "A-";
    const B = "B+";
    const BN = "B-";
    const AB = "AB";
    const ABN = "AB-";
    const O = "O+";
    const ON = "O-";

    public static function toArray()
    {
        return [
            self::A,
            self::AN,
            self::B,
            self::BN,
            self::AB,
            self::ABN,
            self::O,
            self::ON,

        ];
    }
}
