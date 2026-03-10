<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Service extends Model
{
    protected $guarded = [];

    public function lead(): BelongsTo
    {
        return $this->belongsTo(TeamMember::class, 'lead_team_member_id');
    }
}

