<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
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
            $table->string('status', 20)->default('new'); // new, confirmed, completed, cancelled
            $table->timestamps();

            $table->index('status');
            $table->index('preferred_date');
            $table->index('created_at');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('call_bookings');
    }
};

