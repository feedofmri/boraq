<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('testimonials', function (Blueprint $table) {
            $table->id();
            $table->text('quote');
            $table->string('author_name');
            $table->string('author_role');
            $table->string('author_image_url')->nullable();
            $table->string('company');
            $table->boolean('verified')->default(true);
            $table->string('platform')->nullable();
            $table->string('platform_url')->nullable();
            $table->string('project_duration')->nullable();
            $table->string('result')->nullable();
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('testimonials');
    }
};

