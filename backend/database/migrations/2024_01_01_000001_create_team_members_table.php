<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('team_members', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('role');
            $table->string('short_name')->nullable(); // e.g. "Rubayet"
            $table->string('image_path')->nullable();
            $table->text('quote')->nullable();
            $table->text('bio')->nullable();
            $table->string('fun_fact')->nullable();
            $table->string('linkedin')->nullable();
            $table->string('twitter')->nullable();
            $table->string('email')->nullable();
            $table->string('whatsapp')->nullable();
            $table->boolean('is_founder')->default(false);
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('team_members');
    }
};

