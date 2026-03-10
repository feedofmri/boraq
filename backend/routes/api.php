<?php

use App\Http\Controllers\Api\ApiController;
use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\AdminCrudController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// Run pending migrations (visit once, then delete)
Route::get('/setup-tables', function () {
    $results = [];

    if (!\Illuminate\Support\Facades\Schema::hasTable('cache')) {
        \Illuminate\Support\Facades\Schema::create('cache', function ($t) {
            $t->string('key')->primary();
            $t->mediumText('value');
            $t->integer('expiration');
        });
        \Illuminate\Support\Facades\Schema::create('cache_locks', function ($t) {
            $t->string('key')->primary();
            $t->string('owner');
            $t->integer('expiration');
        });
        $results[] = 'Created cache + cache_locks';
    }

    if (!\Illuminate\Support\Facades\Schema::hasTable('page_views')) {
        \Illuminate\Support\Facades\Schema::create('page_views', function ($t) {
            $t->id();
            $t->string('path', 500);
            $t->string('referrer', 500)->nullable();
            $t->string('user_agent', 500)->nullable();
            $t->string('ip_hash', 64)->nullable();
            $t->string('session_id', 64)->nullable();
            $t->timestamp('created_at')->useCurrent();
            $t->index('created_at');
            $t->index('path');
            $t->index('session_id');
        });
        $results[] = 'Created page_views';
    }

    if (!\Illuminate\Support\Facades\Schema::hasTable('contact_submissions')) {
        \Illuminate\Support\Facades\Schema::create('contact_submissions', function ($t) {
            $t->id();
            $t->string('first_name');
            $t->string('last_name');
            $t->string('email');
            $t->string('phone')->nullable();
            $t->string('company')->nullable();
            $t->text('message');
            $t->string('status', 20)->default('new');
            $t->timestamps();
            $t->index('status');
            $t->index('created_at');
        });
        $results[] = 'Created contact_submissions';
    }

    if (!\Illuminate\Support\Facades\Schema::hasTable('call_bookings')) {
        \Illuminate\Support\Facades\Schema::create('call_bookings', function ($t) {
            $t->id();
            $t->string('name');
            $t->string('email');
            $t->string('phone')->nullable();
            $t->string('company')->nullable();
            $t->date('preferred_date');
            $t->string('preferred_time', 20);
            $t->string('timezone', 50)->nullable();
            $t->text('message')->nullable();
            $t->string('status', 20)->default('new');
            $t->timestamps();
            $t->index('status');
            $t->index('preferred_date');
            $t->index('created_at');
        });
        $results[] = 'Created call_bookings';
    }

    return response()->json([
        'message' => count($results) ? 'Tables created successfully!' : 'All tables already exist.',
        'created' => $results,
    ]);
});

// Homepage aggregate (single request for all homepage data)
Route::get('/homepage', [ApiController::class, 'homepage']);

// Team Members
Route::get('/team-members', [ApiController::class, 'teamMembers']);
Route::get('/team-members/{slug}', [ApiController::class, 'teamMember']);

// Services
Route::get('/services', [ApiController::class, 'services']);
Route::get('/services/{slug}', [ApiController::class, 'service']);

// Case Studies
Route::get('/case-studies', [ApiController::class, 'caseStudies']);
Route::get('/case-studies/{slug}', [ApiController::class, 'caseStudy']);

// Blog Posts
Route::get('/blog-posts', [ApiController::class, 'blogPosts']);
Route::get('/blog-posts/{slug}', [ApiController::class, 'blogPost']);

// Testimonials
Route::get('/testimonials', [ApiController::class, 'testimonials']);

// FAQs
Route::get('/faqs', [ApiController::class, 'faqs']);

// Stats
Route::get('/stats', [ApiController::class, 'stats']);

// Clients
Route::get('/clients', [ApiController::class, 'clients']);

// Trust Badges & Indicators
Route::get('/trust-badges', [ApiController::class, 'trustBadges']);

// Process Steps
Route::get('/process-steps', [ApiController::class, 'processSteps']);

// Founder's Note
Route::get('/founders-note', [ApiController::class, 'foundersNote']);

// Company Info
Route::get('/company-info', [ApiController::class, 'companyInfo']);

// Activities
Route::get('/activities', [ApiController::class, 'activities']);

// Public Submissions
Route::post('/track', [ApiController::class, 'trackPageView']);
Route::post('/contact', [ApiController::class, 'submitContact']);
Route::post('/book-call', [ApiController::class, 'submitCallBooking']);

// File serving — serves storage files via API to avoid Windows symlink/CSRF issues
Route::get('/files/{path}', function (string $path) {
    $fullPath = storage_path('app/public/' . $path);

    if (!file_exists($fullPath)) {
        abort(404);
    }

    $mime = mime_content_type($fullPath) ?: 'application/octet-stream';

    return response()->file($fullPath, [
        'Content-Type' => $mime,
        'Cache-Control' => 'public, max-age=31536000',
    ]);
})->where('path', '.*');

/*
|--------------------------------------------------------------------------
| Admin Routes (Sanctum Token Auth)
|--------------------------------------------------------------------------
*/

Route::prefix('admin')->group(function () {
    Route::post('/login', [AuthController::class, 'login']);

    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/me', [AuthController::class, 'me']);
        Route::post('/logout', [AuthController::class, 'logout']);
        Route::get('/dashboard', [AdminCrudController::class, 'dashboard']);
        Route::post('/upload', [AdminCrudController::class, 'upload']);

        // Team Members
        Route::get('/team-members', [AdminCrudController::class, 'teamMemberIndex']);
        Route::post('/team-members', [AdminCrudController::class, 'teamMemberStore']);
        Route::get('/team-members/{id}', [AdminCrudController::class, 'teamMemberShow']);
        Route::put('/team-members/{id}', [AdminCrudController::class, 'teamMemberUpdate']);
        Route::delete('/team-members/{id}', [AdminCrudController::class, 'teamMemberDestroy']);

        // Services
        Route::get('/services', [AdminCrudController::class, 'serviceIndex']);
        Route::post('/services', [AdminCrudController::class, 'serviceStore']);
        Route::get('/services/{id}', [AdminCrudController::class, 'serviceShow']);
        Route::put('/services/{id}', [AdminCrudController::class, 'serviceUpdate']);
        Route::delete('/services/{id}', [AdminCrudController::class, 'serviceDestroy']);

        // Case Studies
        Route::get('/case-studies', [AdminCrudController::class, 'caseStudyIndex']);
        Route::post('/case-studies', [AdminCrudController::class, 'caseStudyStore']);
        Route::get('/case-studies/{id}', [AdminCrudController::class, 'caseStudyShow']);
        Route::put('/case-studies/{id}', [AdminCrudController::class, 'caseStudyUpdate']);
        Route::delete('/case-studies/{id}', [AdminCrudController::class, 'caseStudyDestroy']);

        // Blog Posts
        Route::get('/blog-posts', [AdminCrudController::class, 'blogPostIndex']);
        Route::post('/blog-posts', [AdminCrudController::class, 'blogPostStore']);
        Route::get('/blog-posts/{id}', [AdminCrudController::class, 'blogPostShow']);
        Route::put('/blog-posts/{id}', [AdminCrudController::class, 'blogPostUpdate']);
        Route::delete('/blog-posts/{id}', [AdminCrudController::class, 'blogPostDestroy']);

        // Testimonials
        Route::get('/testimonials', [AdminCrudController::class, 'testimonialIndex']);
        Route::post('/testimonials', [AdminCrudController::class, 'testimonialStore']);
        Route::get('/testimonials/{id}', [AdminCrudController::class, 'testimonialShow']);
        Route::put('/testimonials/{id}', [AdminCrudController::class, 'testimonialUpdate']);
        Route::delete('/testimonials/{id}', [AdminCrudController::class, 'testimonialDestroy']);

        // FAQs
        Route::get('/faqs', [AdminCrudController::class, 'faqIndex']);
        Route::post('/faqs', [AdminCrudController::class, 'faqStore']);
        Route::get('/faqs/{id}', [AdminCrudController::class, 'faqShow']);
        Route::put('/faqs/{id}', [AdminCrudController::class, 'faqUpdate']);
        Route::delete('/faqs/{id}', [AdminCrudController::class, 'faqDestroy']);

        // Stats
        Route::get('/stats', [AdminCrudController::class, 'statIndex']);
        Route::post('/stats', [AdminCrudController::class, 'statStore']);
        Route::get('/stats/{id}', [AdminCrudController::class, 'statShow']);
        Route::put('/stats/{id}', [AdminCrudController::class, 'statUpdate']);
        Route::delete('/stats/{id}', [AdminCrudController::class, 'statDestroy']);

        // Clients
        Route::get('/clients', [AdminCrudController::class, 'clientIndex']);
        Route::post('/clients', [AdminCrudController::class, 'clientStore']);
        Route::get('/clients/{id}', [AdminCrudController::class, 'clientShow']);
        Route::put('/clients/{id}', [AdminCrudController::class, 'clientUpdate']);
        Route::delete('/clients/{id}', [AdminCrudController::class, 'clientDestroy']);

        // Trust Badges
        Route::get('/trust-badges', [AdminCrudController::class, 'trustBadgeIndex']);
        Route::post('/trust-badges', [AdminCrudController::class, 'trustBadgeStore']);
        Route::delete('/trust-badges/{id}', [AdminCrudController::class, 'trustBadgeDestroy']);

        // Process Steps
        Route::get('/process-steps', [AdminCrudController::class, 'processStepIndex']);
        Route::post('/process-steps', [AdminCrudController::class, 'processStepStore']);
        Route::get('/process-steps/{id}', [AdminCrudController::class, 'processStepShow']);
        Route::put('/process-steps/{id}', [AdminCrudController::class, 'processStepUpdate']);
        Route::delete('/process-steps/{id}', [AdminCrudController::class, 'processStepDestroy']);

        // Founder's Note
        Route::get('/founders-note', [AdminCrudController::class, 'foundersNoteShow']);
        Route::put('/founders-note', [AdminCrudController::class, 'foundersNoteUpdate']);

        // Company Info
        Route::get('/company-info', [AdminCrudController::class, 'companyInfoIndex']);
        Route::put('/company-info', [AdminCrudController::class, 'companyInfoUpdate']);

        // Activities
        Route::get('/activities', [AdminCrudController::class, 'activityIndex']);
        Route::post('/activities', [AdminCrudController::class, 'activityStore']);
        Route::put('/activities/{id}', [AdminCrudController::class, 'activityUpdate']);
        Route::delete('/activities/{id}', [AdminCrudController::class, 'activityDestroy']);

        // Contact Submissions
        Route::get('/contact-submissions', [AdminCrudController::class, 'contactSubmissionIndex']);
        Route::get('/contact-submissions/{id}', [AdminCrudController::class, 'contactSubmissionShow']);
        Route::put('/contact-submissions/{id}', [AdminCrudController::class, 'contactSubmissionUpdate']);
        Route::delete('/contact-submissions/{id}', [AdminCrudController::class, 'contactSubmissionDestroy']);

        // Call Bookings
        Route::get('/call-bookings', [AdminCrudController::class, 'callBookingIndex']);
        Route::get('/call-bookings/{id}', [AdminCrudController::class, 'callBookingShow']);
        Route::put('/call-bookings/{id}', [AdminCrudController::class, 'callBookingUpdate']);
        Route::delete('/call-bookings/{id}', [AdminCrudController::class, 'callBookingDestroy']);

        // Analytics
        Route::get('/analytics', [AdminCrudController::class, 'analyticsOverview']);
    });
});

