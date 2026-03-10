<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
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
    }

    public function down(): void
    {
        Schema::dropIfExists('page_views');
    }
};

