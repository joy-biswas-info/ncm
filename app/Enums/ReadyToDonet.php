<?php

namespace App\Enums;

enum ReadyToDonet: string
{

    const yes = 'Yes';
    const no = 'No';

    public static function toArray()
    {
        return [
            self::yes,
            self::no,

        ];
    }
}
