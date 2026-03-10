<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CaseStudyImage extends Model
{
    protected $guarded = [];
    public $timestamps = false;

    public function getUrlAttribute(): ?string
    {
        return $this->image_path ? '/api/files/' . $this->image_path : null;
    }
}

