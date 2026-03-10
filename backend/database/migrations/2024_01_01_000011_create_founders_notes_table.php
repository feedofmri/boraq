<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('founders_notes', function (Blueprint $table) {
            $table->id();
            $table->text('quote_text');
            $table->json('body_paragraphs');
            $table->string('signature_name');
            $table->string('signature_title');
            $table->string('email');
            $table->string('founded_date')->nullable();
            $table->string('projects_shipped')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('founders_notes');
    }
};

