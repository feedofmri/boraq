<?php
/**
 * Quick migration runner — run: php run-migrations.php
 * DELETE this file after use.
 */

require __DIR__ . '/vendor/autoload.php';
$app = require_once __DIR__ . '/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Schema\Blueprint;

$results = [];

// 0. cache table
if (!Schema::hasTable('cache')) {
    Schema::create('cache', function (Blueprint $table) {
        $table->string('key')->primary();
        $table->mediumText('value');
        $table->integer('expiration');
    });
    Schema::create('cache_locks', function (Blueprint $table) {
        $table->string('key')->primary();
        $table->string('owner');
        $table->integer('expiration');
    });
    $results[] = '✅ Created cache + cache_locks tables';
} else {
    $results[] = '⏭️ cache already exists';
}

// 1. page_views
if (!Schema::hasTable('page_views')) {
    Schema::create('page_views', function (Blueprint $table) {
        $table->id();
        $table->string('path', 500);
        $table->string('referrer', 500)->nullable();
        $table->string('user_agent', 500)->nullable();
        $table->string('ip_hash', 64)->nullable();
        $table->string('session_id', 64)->nullable();
        $table->timestamp('created_at')->useCurrent();
        $table->index('created_at');
        $table->index('path');
        $table->index('session_id');
    });
    $results[] = '✅ Created page_views table';
} else {
    $results[] = '⏭️ page_views already exists';
}

// 2. contact_submissions
if (!Schema::hasTable('contact_submissions')) {
    Schema::create('contact_submissions', function (Blueprint $table) {
        $table->id();
        $table->string('first_name');
        $table->string('last_name');
        $table->string('email');
        $table->string('phone')->nullable();
        $table->string('company')->nullable();
        $table->text('message');
        $table->string('status', 20)->default('new');
        $table->timestamps();
        $table->index('status');
        $table->index('created_at');
    });
    $results[] = '✅ Created contact_submissions table';
} else {
    $results[] = '⏭️ contact_submissions already exists';
}

// 3. call_bookings
if (!Schema::hasTable('call_bookings')) {
    Schema::create('call_bookings', function (Blueprint $table) {
        $table->id();
        $table->string('name');
        $table->string('email');
        $table->string('phone')->nullable();
        $table->string('company')->nullable();
        $table->date('preferred_date');
        $table->string('preferred_time', 20);
        $table->string('timezone', 50)->nullable();
        $table->text('message')->nullable();
        $table->string('status', 20)->default('new');
        $table->timestamps();
        $table->index('status');
        $table->index('preferred_date');
        $table->index('created_at');
    });
    $results[] = '✅ Created call_bookings table';
} else {
    $results[] = '⏭️ call_bookings already exists';
}

// 4. member_type on team_members
if (Schema::hasTable('team_members') && !Schema::hasColumn('team_members', 'member_type')) {
    Schema::table('team_members', function (Blueprint $table) {
        $table->string('member_type', 20)->default('member')->after('is_founder');
    });
    DB::table('team_members')->where('is_founder', true)->update(['member_type' => 'founder']);
    DB::table('team_members')->where('is_founder', false)
        ->where(function ($q) {
            $q->where('role', 'like', 'Chief%')
              ->orWhere('role', 'like', 'CTO%')
              ->orWhere('role', 'like', 'COO%')
              ->orWhere('role', 'like', 'CPO%')
              ->orWhere('role', 'like', 'CFO%');
        })->update(['member_type' => 'executive']);
    $results[] = '✅ Added member_type to team_members';
} else {
    $results[] = '⏭️ team_members.member_type already exists or table missing';
}

echo "Migration Results:\n" . implode("\n", $results) . "\n";

