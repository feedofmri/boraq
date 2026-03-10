<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('trust_badges', function (Blueprint $table) {
            $table->id();
            $table->string('icon_name');
            $table->string('title');
            $table->text('description');
            $table->string('year_label')->nullable();
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });

        Schema::create('trust_indicators', function (Blueprint $table) {
            $table->id();
            $table->string('icon_name');
            $table->string('label');
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('trust_indicators');
        Schema::dropIfExists('trust_badges');
    }
};

