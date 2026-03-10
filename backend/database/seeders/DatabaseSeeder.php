<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            AdminSeeder::class,
            TeamMemberSeeder::class,
            ServiceSeeder::class,
            CaseStudySeeder::class,
            BlogPostSeeder::class,
            TestimonialSeeder::class,
            FaqSeeder::class,
            StatSeeder::class,
            ClientAndTrustSeeder::class,
            ProcessStepSeeder::class,
            MiscSeeder::class,
        ]);
    }
}

