<?php

namespace Database\Seeders;

use App\Models\Faq;
use Illuminate\Database\Seeder;

class FaqSeeder extends Seeder
{
    public function run(): void
    {
        $faqs = [
            [
                'question' => 'Do you only work with large enterprises?',
                'answer' => "Not at all. We work with startups, small businesses, and growing brands. We scale our teams to fit your specific needs and budget — from solo founders to established companies.",
                'sort_order' => 0,
            ],
            [
                'question' => 'How do you ensure transparency during development?',
                'answer' => "Transparent communication is core to how we operate. You get a dedicated project manager, high-frequency updates, and clear reporting throughout the project lifecycle. No black boxes.",
                'sort_order' => 1,
            ],
            [
                'question' => 'What happens after the project launches?',
                'answer' => "We provide 24x7 support and don't just launch and leave. We offer ongoing maintenance, iterative improvements, and continuous support to keep your product running smoothly.",
                'sort_order' => 2,
            ],
            [
                'question' => 'How do you handle intellectual property (IP)?',
                'answer' => "You own 100% of the code and intellectual property we create for you upon payment completion. We sign strict NDAs before you share a single detail with us to protect your vision.",
                'sort_order' => 3,
            ],
            [
                'question' => 'What is your tech stack?',
                'answer' => "We specialize in React, React Native, WordPress, Python, and the MERN stack. Our six service divisions cover Web & App, UI & Branding, AI & Automation, Vision & Speech, Smart Devices, and Web3 platforms.",
                'sort_order' => 4,
            ],
        ];

        foreach ($faqs as $faq) {
            Faq::create($faq);
        }
    }
}

