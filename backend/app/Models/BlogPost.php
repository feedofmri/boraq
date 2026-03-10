<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class BlogPost extends Model
{
    protected $guarded = [];

    public function author(): BelongsTo
    {
        return $this->belongsTo(TeamMember::class, 'author_team_member_id');
    }

    public function tags(): HasMany
    {
        return $this->hasMany(BlogPostTag::class);
    }

    public function contentBlocks(): HasMany
    {
        return $this->hasMany(BlogPostContentBlock::class)->orderBy('sort_order');
    }
}

