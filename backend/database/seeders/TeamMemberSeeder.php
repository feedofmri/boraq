<?php

namespace Database\Seeders;

use App\Models\TeamMember;
use Illuminate\Database\Seeder;

class TeamMemberSeeder extends Seeder
{
    public function run(): void
    {
        $members = [
            [
                'name' => 'Md. Rubayet Islam',
                'slug' => 'md-rubayet-islam',
                'short_name' => 'Rubayet',
                'role' => 'Founder & CEO',
                'image_path' => 'team/md-rubayet-islam.jpg',
                'quote' => 'We innovate not just to provide services, but to push the boundaries of technology.',
                'bio' => 'Expert in Web & App development and Computer Vision. Founded Boraq to shape the future through advanced solutions and research.',
                'fun_fact' => 'Computer Vision researcher & full-stack developer',
                'linkedin' => 'https://linkedin.com/company/boraqio',
                'twitter' => '#',
                'email' => 'hello@boraq.io',
                'whatsapp' => '8801620929190',
                'is_founder' => true,
                'member_type' => 'founder',
                'sort_order' => 0,
            ],
            [
                'name' => 'Rakib Hasan',
                'slug' => 'rakib-hasan',
                'short_name' => 'Rakib',
                'role' => 'Chief Technology Officer',
                'image_path' => 'team/rakib-hasan.jpg',
                'quote' => 'Decentralization is the foundation of the next digital era.',
                'bio' => "Blockchain and Web3 specialist. Architects decentralized platforms, smart contracts, and token systems powering Boraq's Web3 division.",
                'fun_fact' => 'Blockchain pioneer & open-source contributor',
                'linkedin' => 'https://linkedin.com/company/boraqio',
                'twitter' => '#',
                'email' => 'hello@boraq.io',
                'whatsapp' => null,
                'is_founder' => false,
                'member_type' => 'executive',
                'sort_order' => 1,
            ],
            [
                'name' => 'Ma-Huan Sheikh Meem',
                'slug' => 'ma-huan-sheikh-meem',
                'short_name' => 'Meem',
                'role' => 'Chief Operating Officer',
                'image_path' => 'team/ma-huan-sheikh-meem.jpg',
                'quote' => 'Great design tells a story that words alone cannot.',
                'bio' => 'UI/UX & Graphics expert. Oversees operations while driving visual excellence across brand identities and digital interfaces.',
                'fun_fact' => 'UI/UX enthusiast & creative operations lead',
                'linkedin' => 'https://linkedin.com/company/boraqio',
                'twitter' => '#',
                'email' => 'hello@boraq.io',
                'whatsapp' => '8801533514667',
                'is_founder' => false,
                'member_type' => 'executive',
                'sort_order' => 2,
            ],
            [
                'name' => 'Adel Mohammad Zahid',
                'slug' => 'adel-mohammad-zahid',
                'short_name' => 'Adel',
                'role' => 'Chief Product Officer',
                'image_path' => 'team/adel-mohammad-zahid.jpg',
                'quote' => 'Intelligent automation is how we turn data into actionable impact.',
                'bio' => "ML & Automation specialist. Leads predictive modeling, intelligent workflows, and AI-powered product strategy across Boraq's projects.",
                'fun_fact' => 'Machine Learning engineer & product strategist',
                'linkedin' => 'https://linkedin.com/company/boraqio',
                'twitter' => '#',
                'email' => 'hello@boraq.io',
                'whatsapp' => null,
                'is_founder' => false,
                'member_type' => 'executive',
                'sort_order' => 3,
            ],
            [
                'name' => 'Tahmid Khan',
                'slug' => 'tahmid-khan',
                'short_name' => 'Tahmid',
                'role' => 'Project Lead',
                'image_path' => 'team/tahmid-khan.jpg',
                'quote' => 'Bridging software and hardware to create connected experiences.',
                'bio' => 'IoT and hardware-software integration specialist. Leads Smart Device projects and ensures seamless delivery across teams.',
                'fun_fact' => 'IoT enthusiast & embedded systems developer',
                'linkedin' => 'https://linkedin.com/company/boraqio',
                'twitter' => '#',
                'email' => 'hello@boraq.io',
                'whatsapp' => null,
                'is_founder' => false,
                'member_type' => 'member',
                'sort_order' => 4,
            ],
        ];

        foreach ($members as $member) {
            TeamMember::create($member);
        }
    }
}

