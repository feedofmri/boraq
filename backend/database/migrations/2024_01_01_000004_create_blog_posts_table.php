<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('blog_posts', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('title');
            $table->text('excerpt');
            $table->string('category');
            $table->string('read_time');
            $table->string('date');
            $table->string('image_url')->nullable();
            $table->foreignId('author_team_member_id')->nullable()->constrained('team_members')->nullOnDelete();
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });

        Schema::create('blog_post_tags', function (Blueprint $table) {
            $table->id();
            $table->foreignId('blog_post_id')->constrained()->cascadeOnDelete();
            $table->string('tag');
        });

        Schema::create('blog_post_content_blocks', function (Blueprint $table) {
            $table->id();
            $table->foreignId('blog_post_id')->constrained()->cascadeOnDelete();
            $table->string('type'); // text, heading, quote, list
            $table->json('content'); // string or array for list
            $table->integer('sort_order')->default(0);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('blog_post_content_blocks');
        Schema::dropIfExists('blog_post_tags');
        Schema::dropIfExists('blog_posts');
    }
};

