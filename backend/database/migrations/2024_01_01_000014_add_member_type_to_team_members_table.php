<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('team_members', function (Blueprint $table) {
            // member_type: 'founder', 'executive', 'member'
            $table->string('member_type', 20)->default('member')->after('is_founder');
        });

        // Migrate existing data: is_founder=true → 'founder', otherwise check role for executives
        DB::table('team_members')->where('is_founder', true)->update(['member_type' => 'founder']);

        // Mark C-suite roles as executives
        DB::table('team_members')
            ->where('is_founder', false)
            ->where(function ($query) {
                $query->where('role', 'like', 'Chief%')
                      ->orWhere('role', 'like', 'CTO%')
                      ->orWhere('role', 'like', 'COO%')
                      ->orWhere('role', 'like', 'CPO%')
                      ->orWhere('role', 'like', 'CFO%');
            })
            ->update(['member_type' => 'executive']);
    }

    public function down(): void
    {
        Schema::table('team_members', function (Blueprint $table) {
            $table->dropColumn('member_type');
        });
    }
};

