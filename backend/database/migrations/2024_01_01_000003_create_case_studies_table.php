<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('case_studies', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->integer('number')->unique();
            $table->string('title');
            $table->string('subtitle');
            $table->string('category');
            $table->string('cover_image_path')->nullable();
            $table->string('youtube_url')->nullable();
            $table->string('live_url')->nullable();
            $table->text('overview');
            $table->text('challenge');
            $table->text('solution');
            $table->text('outcome');
            $table->date('date');
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });

        Schema::create('case_study_tags', function (Blueprint $table) {
            $table->id();
            $table->foreignId('case_study_id')->constrained()->cascadeOnDelete();
            $table->string('tag');
        });

        Schema::create('case_study_tech_stacks', function (Blueprint $table) {
            $table->id();
            $table->foreignId('case_study_id')->constrained()->cascadeOnDelete();
            $table->string('name');
        });

        Schema::create('case_study_features', function (Blueprint $table) {
            $table->id();
            $table->foreignId('case_study_id')->constrained()->cascadeOnDelete();
            $table->text('feature');
            $table->integer('sort_order')->default(0);
        });

        Schema::create('case_study_images', function (Blueprint $table) {
            $table->id();
            $table->foreignId('case_study_id')->constrained()->cascadeOnDelete();
            $table->string('image_path');
            $table->integer('sort_order')->default(0);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('case_study_images');
        Schema::dropIfExists('case_study_features');
        Schema::dropIfExists('case_study_tech_stacks');
        Schema::dropIfExists('case_study_tags');
        Schema::dropIfExists('case_studies');
    }
};

