<?php

namespace Database\Seeders;

use App\Models\ProcessStep;
use Illuminate\Database\Seeder;

class ProcessStepSeeder extends Seeder
{
    public function run(): void
    {
        $steps = [
            [
                'icon_name' => 'Search',
                'title' => 'Discovery & Strategy',
                'description' => 'We start by listening. We dive deep into your business goals, target audience, and technical constraints to formulate a roadmap.',
                'timeline' => 'Week 1-2',
                'human_touch' => "You'll meet your dedicated project lead who stays with you from day one.",
                'touch_icon_name' => 'UserCheck',
                'sort_order' => 0,
            ],
            [
                'icon_name' => 'PenTool',
                'title' => 'UI/UX Design',
                'description' => 'Our design team creates wireframes and high-fidelity prototypes, focusing on user journeys and conversion optimization.',
                'timeline' => 'Week 3-5',
                'human_touch' => 'Live design review sessions with your direct feedback shaping every pixel.',
                'touch_icon_name' => 'Video',
                'sort_order' => 1,
            ],
            [
                'icon_name' => 'Code',
                'title' => 'Development & Engineering',
                'description' => 'We write clean, scalable code. You get full transparency with weekly sprint demos and access to staging environments.',
                'timeline' => 'Week 6-12+',
                'human_touch' => 'Weekly video demos: see real progress, ask questions, steer direction.',
                'touch_icon_name' => 'Video',
                'sort_order' => 2,
            ],
            [
                'icon_name' => 'Rocket',
                'title' => 'Testing & Launch',
                'description' => 'Rigorous QA testing ensures a bug-free experience. We handle the deployment architecture to ensure a smooth launch.',
                'timeline' => 'Week 13-14',
                'human_touch' => 'Joint launch call with our team: we celebrate milestones together.',
                'touch_icon_name' => 'MessageSquare',
                'sort_order' => 3,
            ],
            [
                'icon_name' => 'RefreshCcw',
                'title' => 'Growth & Iterate',
                'description' => 'Post-launch, we monitor analytics, gather user feedback, and iterate to continuously improve performance and ROI.',
                'timeline' => 'Ongoing',
                'human_touch' => 'Monthly strategy calls to align tech efforts with your business growth.',
                'touch_icon_name' => 'MessageSquare',
                'sort_order' => 4,
            ],
        ];

        foreach ($steps as $step) {
            ProcessStep::create($step);
        }
    }
}

