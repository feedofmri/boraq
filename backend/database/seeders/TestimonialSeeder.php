<?php

namespace Database\Seeders;

use App\Models\Testimonial;
use Illuminate\Database\Seeder;

class TestimonialSeeder extends Seeder
{
    public function run(): void
    {
        $testimonials = [
            [
                'quote' => "Boraq delivered our eCommerce platform on time with a scalable architecture. Their dedicated manager kept us in the loop everyday.",
                'author_name' => 'Arifur Rahman',
                'author_role' => 'CEO, AgriTech Startup',
                'author_image_url' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
                'company' => 'Nibaron',
                'verified' => true,
                'platform' => 'Google Reviews',
                'platform_url' => '#',
                'project_duration' => '4 months',
                'result' => 'Scalable marketplace architecture',
                'sort_order' => 0,
            ],
            [
                'quote' => "The team at Boraq transformed our brand identity with Moushum: a nature-inspired design that perfectly captured our vision. Excellent design systems.",
                'author_name' => 'Nusrat Jahan',
                'author_role' => 'Creative Director',
                'author_image_url' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
                'company' => 'Moushum',
                'verified' => true,
                'platform' => 'Google Reviews',
                'platform_url' => '#',
                'project_duration' => '3 months',
                'result' => 'Complete brand identity',
                'sort_order' => 1,
            ],
            [
                'quote' => "Their AI expertise helped us build predictive ML models that truly add value. Boraq's customized research approach made all the difference.",
                'author_name' => 'Sarah Jenkins',
                'author_role' => 'Head of Product',
                'author_image_url' => 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
                'company' => 'Retail Intel',
                'verified' => true,
                'platform' => 'Google Reviews',
                'platform_url' => '#',
                'project_duration' => '5 months',
                'result' => 'ML-powered insights tool',
                'sort_order' => 2,
            ],
            [
                'quote' => "Boraq's Web3 expertise helped us launch a secure, transparent protocol. Their code audits gave us and our users real peace of mind.",
                'author_name' => 'Michael Chen',
                'author_role' => 'CTO',
                'author_image_url' => 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200',
                'company' => 'ChainLabs',
                'verified' => true,
                'platform' => 'Google Reviews',
                'platform_url' => '#',
                'project_duration' => '3 months',
                'result' => 'Secure Layer-2 protocol',
                'sort_order' => 3,
            ],
        ];

        foreach ($testimonials as $t) {
            Testimonial::create($t);
        }
    }
}

