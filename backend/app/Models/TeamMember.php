<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Helpers\FileUrl;

class TeamMember extends Model
{
    protected $guarded = [];

    // Member type constants
    const TYPE_FOUNDER = 'founder';
    const TYPE_EXECUTIVE = 'executive';
    const TYPE_MEMBER = 'member';

    public function scopeExecutives($query)
    {
        return $query->whereIn('member_type', [self::TYPE_FOUNDER, self::TYPE_EXECUTIVE]);
    }

    public function scopeRegularMembers($query)
    {
        return $query->where('member_type', self::TYPE_MEMBER);
    }

    public function isExecutive(): bool
    {
        return in_array($this->member_type, [self::TYPE_FOUNDER, self::TYPE_EXECUTIVE]);
    }

    public function services(): HasMany
    {
        return $this->hasMany(Service::class, 'lead_team_member_id');
    }

    public function blogPosts(): HasMany
    {
        return $this->hasMany(BlogPost::class, 'author_team_member_id');
    }

    public function activities(): HasMany
    {
        return $this->hasMany(Activity::class);
    }

    public function getImageUrlAttribute(): ?string
    {
        return FileUrl::url($this->image_path);
    }
}

