<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('process_steps', function (Blueprint $table) {
            $table->id();
            $table->string('icon_name');
            $table->string('title');
            $table->text('description');
            $table->string('timeline');
            $table->text('human_touch');
            $table->string('touch_icon_name');
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('process_steps');
    }
};

