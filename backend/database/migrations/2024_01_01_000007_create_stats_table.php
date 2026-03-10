<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('stats', function (Blueprint $table) {
            $table->id();
            $table->string('label');
            $table->string('prefix')->default('');
            $table->decimal('value', 10, 1);
            $table->string('suffix')->default('');
            $table->string('context')->nullable();
            $table->string('color_classes')->nullable();
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('stats');
    }
};

