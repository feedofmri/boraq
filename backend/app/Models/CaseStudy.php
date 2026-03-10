<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class CaseStudy extends Model
{
    protected $guarded = [];

    protected $casts = [
        'date' => 'date',
    ];

    public function tags(): HasMany
    {
        return $this->hasMany(CaseStudyTag::class);
    }

    public function techStacks(): HasMany
    {
        return $this->hasMany(CaseStudyTechStack::class);
    }

    public function features(): HasMany
    {
        return $this->hasMany(CaseStudyFeature::class)->orderBy('sort_order');
    }

    public function images(): HasMany
    {
        return $this->hasMany(CaseStudyImage::class)->orderBy('sort_order');
    }

    public function getCoverImageUrlAttribute(): ?string
    {
        return $this->cover_image_path ? '/api/files/' . $this->cover_image_path : null;
    }
}

