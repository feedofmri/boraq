<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BlogPostContentBlock extends Model
{
    protected $guarded = [];
    public $timestamps = false;

    protected $casts = [
        'content' => 'json',
    ];
}

