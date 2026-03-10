<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PageView extends Model
{
    public $timestamps = false;

    protected $fillable = ['path', 'referrer', 'user_agent', 'ip_hash', 'session_id', 'created_at'];

    protected $casts = [
        'created_at' => 'datetime',
    ];
}

