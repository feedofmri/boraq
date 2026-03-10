<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('title');
            $table->string('icon_name'); // Lucide icon name e.g. "MonitorSmartphone"
            $table->text('description');
            $table->string('link_path');
            $table->string('col_span')->nullable();
            $table->string('project_count')->nullable();
            $table->string('client_result')->nullable();
            $table->foreignId('lead_team_member_id')->nullable()->constrained('team_members')->nullOnDelete();
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};

