<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Helpers\FileUrl;

class CaseStudyImage extends Model
{
    protected $guarded = [];
    public $timestamps = false;

    public function getUrlAttribute(): ?string
    {
        return FileUrl::url($this->image_path);
    }
}

