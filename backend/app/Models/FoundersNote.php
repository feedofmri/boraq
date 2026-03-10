<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FoundersNote extends Model
{
    protected $guarded = [];

    protected $casts = [
        'body_paragraphs' => 'array',
    ];
}

