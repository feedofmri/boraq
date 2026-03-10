<?php

namespace Database\Seeders;

use App\Models\FoundersNote;
use App\Models\CompanyInfo;
use App\Models\Activity;
use App\Models\TeamMember;
use Illuminate\Database\Seeder;

class MiscSeeder extends Seeder
{
    public function run(): void
    {
        // Founder's Note
        FoundersNote::create([
            'quote_text' => "We don't just ship code. We build the architecture for what's next.",
            'body_paragraphs' => [
                'Boraq was born from a desire to do more than just fulfill tickets. We\'re here to solve the hard problems: the ones that require deep research and precise engineering across six specialized divisions.',
                'From Computer Vision and NLP research to full-stack development and Web3 platforms, every solution we deliver is backed by a team that truly cares. With 32+ projects delivered for 28+ clients, our promise remains the same: to exceed expectations through quality and authentic innovation.',
            ],
            'signature_name' => 'Md. Rubayet Islam',
            'signature_title' => 'Founder & CEO',
            'email' => 'hello@boraq.io',
            'founded_date' => 'Nov 2023',
            'projects_shipped' => '32+',
        ]);

        // Company Info
        $info = [
            'email' => 'hello@boraq.io',
            'whatsapp' => '8801902993907',
            'address' => 'Mirpur 14, Dhaka, Bangladesh',
            'github' => 'https://github.com/boraqio',
            'facebook' => 'https://facebook.com/boraqio',
            'linkedin' => 'https://linkedin.com/company/boraqio',
            'description' => 'Innovation-driven software development and research company based in Mirpur 14, Dhaka. Shaping the future with advanced solutions across six specialized service divisions.',
            'avg_response_time' => '2 hours',
            'global_clients' => '28+',
            'client_retention' => '98%',
            'google_rating' => '5.0/5',
        ];

        foreach ($info as $key => $value) {
            CompanyInfo::create(['key' => $key, 'value' => $value]);
        }

        // Activities
        $ceo = TeamMember::where('slug', 'md-rubayet-islam')->first();
        $cto = TeamMember::where('slug', 'rakib-hasan')->first();
        $coo = TeamMember::where('slug', 'ma-huan-sheikh-meem')->first();
        $cpo = TeamMember::where('slug', 'adel-mohammad-zahid')->first();
        $pl  = TeamMember::where('slug', 'tahmid-khan')->first();

        $activities = [
            ['text' => 'Rubayet completed a sprint review for Boraq Space eCommerce', 'time_label' => '2 hours ago', 'team_member_id' => $ceo?->id, 'sort_order' => 0],
            ['text' => 'Meem published new case study: Moushum Brand Identity', 'time_label' => '5 hours ago', 'team_member_id' => $coo?->id, 'sort_order' => 1],
            ['text' => 'Rakib shipped Nibaron: ClimateAI Web3 platform for farmers', 'time_label' => 'Yesterday', 'team_member_id' => $cto?->id, 'sort_order' => 2],
            ['text' => 'Adel deployed ML model for Car Price Prediction', 'time_label' => 'Yesterday', 'team_member_id' => $cpo?->id, 'sort_order' => 3],
            ['text' => 'Tahmid completed IoT firmware update for Smart Device project', 'time_label' => '2 days ago', 'team_member_id' => $pl?->id, 'sort_order' => 4],
        ];

        foreach ($activities as $a) {
            Activity::create($a);
        }
    }
}

