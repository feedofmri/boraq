<?php

namespace Database\Seeders;

use App\Models\Stat;
use Illuminate\Database\Seeder;

class StatSeeder extends Seeder
{
    public function run(): void
    {
        $stats = [
            ['label' => 'Projects Delivered', 'prefix' => '', 'value' => 32, 'suffix' => '+', 'context' => 'Across all six service divisions', 'color_classes' => 'from-blue-400 to-cyan-400', 'sort_order' => 0],
            ['label' => 'Global Clients', 'prefix' => '', 'value' => 28, 'suffix' => '+', 'context' => 'Long-term relationships built on trust', 'color_classes' => 'from-purple-400 to-pink-400', 'sort_order' => 1],
            ['label' => 'User Satisfaction', 'prefix' => '', 'value' => 4.9, 'suffix' => '/5', 'context' => 'Google verified 5.0 rating', 'color_classes' => 'from-green-400 to-emerald-400', 'sort_order' => 2],
            ['label' => 'Service Divisions', 'prefix' => '', 'value' => 6, 'suffix' => '', 'context' => 'Web & App, UI & Branding, AI, Vision, IoT, Web3', 'color_classes' => 'from-orange-400 to-yellow-400', 'sort_order' => 3],
        ];

        foreach ($stats as $stat) {
            Stat::create($stat);
        }
    }
}

