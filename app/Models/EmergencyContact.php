<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmergencyContact extends Model
{
    use HasFactory;
    protected $fillable = [
        'contact_number',
        'title',
        'order',
        'logo',
        'locations',
        'hide'
    ];
}
