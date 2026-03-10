<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CallBooking extends Model
{
    protected $fillable = [
        'name', 'email', 'phone', 'company', 'preferred_date', 'preferred_time',
        'timezone', 'message', 'status',
    ];

    protected $casts = [
        'preferred_date' => 'date',
    ];
}

