<?php

namespace Database\Seeders;

use App\Models\Client;
use App\Models\TrustBadge;
use App\Models\TrustIndicator;
use Illuminate\Database\Seeder;

class ClientAndTrustSeeder extends Seeder
{
    public function run(): void
    {
        $clients = [
            ['name' => 'Boraq Space', 'symbol' => '🛒', 'sort_order' => 0],
            ['name' => 'Proshno', 'symbol' => '❓', 'sort_order' => 1],
            ['name' => 'Sohojogi', 'symbol' => '🏠', 'sort_order' => 2],
            ['name' => 'Moushum', 'symbol' => '🌿', 'sort_order' => 3],
            ['name' => 'Nibaron', 'symbol' => '🌾', 'sort_order' => 4],
            ['name' => 'LiteDocs', 'symbol' => '📄', 'sort_order' => 5],
            ['name' => 'Nondan', 'symbol' => '🎉', 'sort_order' => 6],
            ['name' => 'AuraAccess', 'symbol' => '📡', 'sort_order' => 7],
        ];

        foreach ($clients as $c) {
            Client::create($c);
        }

        $badges = [
            ['icon_name' => 'Star', 'title' => 'Google Verified 5.0', 'description' => 'Perfect 5-star rating on Google Reviews from our satisfied clients.', 'year_label' => 'Verified', 'sort_order' => 0],
            ['icon_name' => 'Award', 'title' => '32+ Projects Shipped', 'description' => 'Proven track record across Web & App, AI, Vision, IoT, and Web3 domains.', 'year_label' => 'Delivered', 'sort_order' => 1],
            ['icon_name' => 'Shield', 'title' => '24x7 Support', 'description' => 'Continuous availability with dedicated managers for immediate resolution.', 'year_label' => 'Always On', 'sort_order' => 2],
            ['icon_name' => 'CheckCircle2', 'title' => '6 Service Divisions', 'description' => 'Specialized expertise spanning development, design, AI, vision, IoT, and blockchain.', 'year_label' => 'Expert', 'sort_order' => 3],
        ];

        foreach ($badges as $b) {
            TrustBadge::create($b);
        }

        $indicators = [
            ['icon_name' => 'Star', 'label' => 'Google Verified 5.0', 'sort_order' => 0],
            ['icon_name' => 'Award', 'label' => '32+ Projects Delivered', 'sort_order' => 1],
            ['icon_name' => 'BadgeCheck', 'label' => '28+ Global Clients', 'sort_order' => 2],
            ['icon_name' => 'Shield', 'label' => '24x7 Support', 'sort_order' => 3],
        ];

        foreach ($indicators as $i) {
            TrustIndicator::create($i);
        }
    }
}

