<?php

namespace Database\Seeders;

use App\Models\Service;
use App\Models\TeamMember;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    public function run(): void
    {
        $ceo = TeamMember::where('slug', 'md-rubayet-islam')->first();
        $cto = TeamMember::where('slug', 'rakib-hasan')->first();
        $coo = TeamMember::where('slug', 'ma-huan-sheikh-meem')->first();
        $cpo = TeamMember::where('slug', 'adel-mohammad-zahid')->first();
        $pl  = TeamMember::where('slug', 'tahmid-khan')->first();

        $services = [
            [
                'slug' => 'web-app',
                'title' => 'Web & Mobile Apps',
                'icon_name' => 'MonitorSmartphone',
                'description' => 'High-performance, scalable applications engineered for iOS, Android, and Web.',
                'link_path' => '/services/web-app',
                'col_span' => 'col-span-1 md:col-span-2 lg:col-span-2',
                'project_count' => '8+',
                'client_result' => 'Built Boraq Space — comprehensive eCommerce platform',
                'lead_team_member_id' => $ceo?->id,
                'sort_order' => 0,
            ],
            [
                'slug' => 'ui-branding',
                'title' => 'UI/UX & Branding',
                'icon_name' => 'Brush',
                'description' => 'Strategic design that converts visitors into loyal customers through intuitive interfaces.',
                'link_path' => '/services/ui-branding',
                'col_span' => 'col-span-1',
                'project_count' => '11+',
                'client_result' => 'Crafted Moushum — nature-inspired brand identity',
                'lead_team_member_id' => $coo?->id,
                'sort_order' => 1,
            ],
            [
                'slug' => 'ai-automation',
                'title' => 'AI & Automation',
                'icon_name' => 'BrainCircuit',
                'description' => 'Custom machine learning models to automate workflows and unlock data insights.',
                'link_path' => '/services/ai-automation',
                'col_span' => 'col-span-1',
                'project_count' => '3+',
                'client_result' => 'Car Price Prediction & Heart Disease ML models',
                'lead_team_member_id' => $cpo?->id,
                'sort_order' => 2,
            ],
            [
                'slug' => 'vision-speech',
                'title' => 'Vision & Speech',
                'icon_name' => 'Mic',
                'description' => 'Advanced computer vision and NLP solutions for real-world challenges.',
                'link_path' => '/services/vision-speech',
                'col_span' => 'col-span-1 md:col-span-2 lg:col-span-1',
                'project_count' => '2+',
                'client_result' => 'Advanced speech-to-text integration systems',
                'lead_team_member_id' => $ceo?->id,
                'sort_order' => 3,
            ],
            [
                'slug' => 'smart-device',
                'title' => 'Smart Devices',
                'icon_name' => 'Watch',
                'description' => 'IoT integrations bridging software with hardware for connected ecosystems.',
                'link_path' => '/services/smart-device',
                'col_span' => 'col-span-1',
                'project_count' => '2+',
                'client_result' => 'IoT and hardware-software integration',
                'lead_team_member_id' => $pl?->id,
                'sort_order' => 4,
            ],
            [
                'slug' => 'web3',
                'title' => 'Web3 & Blockchain',
                'icon_name' => 'Link',
                'description' => 'Secure distributed ledger technologies and smart contract development.',
                'link_path' => '/services/web3',
                'col_span' => 'col-span-1 md:col-span-3 lg:col-span-1',
                'project_count' => '1+',
                'client_result' => 'Nibaron — ClimateAI for Farmers platform',
                'lead_team_member_id' => $cto?->id,
                'sort_order' => 5,
            ],
        ];

        foreach ($services as $service) {
            Service::create($service);
        }
    }
}

