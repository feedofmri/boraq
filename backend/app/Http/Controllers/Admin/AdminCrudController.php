<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Helpers\FileUrl;
use App\Models\{TeamMember, Service, CaseStudy, CaseStudyTag, CaseStudyTechStack, CaseStudyFeature, CaseStudyImage,
    BlogPost, BlogPostTag, BlogPostContentBlock, Testimonial, Faq, Stat, Client, TrustBadge, TrustIndicator,
    ProcessStep, FoundersNote, CompanyInfo, Activity, ContactSubmission, CallBooking, PageView};
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class AdminCrudController extends Controller
{
    // ─── Dashboard ──────────────────────────────────────────

    public function dashboard(): JsonResponse
    {
        $safeCount = fn($model) => class_exists($model) ? (function() use ($model) {
            try { return $model::count(); } catch (\Exception $e) { return 0; }
        })() : 0;

        return response()->json([
            'teamMembers' => TeamMember::count(),
            'services' => Service::count(),
            'caseStudies' => CaseStudy::count(),
            'blogPosts' => BlogPost::count(),
            'testimonials' => Testimonial::count(),
            'faqs' => Faq::count(),
            'stats' => Stat::count(),
            'clients' => Client::count(),
            'trustBadges' => TrustBadge::count(),
            'processSteps' => ProcessStep::count(),
            'activities' => Activity::count(),
            'contactSubmissions' => $safeCount(ContactSubmission::class),
            'callBookings' => $safeCount(CallBooking::class),
            // Unread / new counts for notifications (frontend uses these to show unread badges)
            'contactSubmissionsNew' => ContactSubmission::where('status', 'new')->count(),
            'callBookingsNew' => CallBooking::where('status', 'new')->count(),
        ]);
    }

    // ─── File Upload ────────────────────────────────────────

    public function upload(Request $request): JsonResponse
    {
        $request->validate(['file' => 'required|file|max:10240']);

        $folder = $request->input('folder', 'uploads');
        $path = $request->file('file')->store($folder, 'public');

        return response()->json([
            'path' => $path,
            'url' => FileUrl::url($path),
        ]);
    }

    // ─── Team Members ───────────────────────────────────────

    public function teamMemberIndex(): JsonResponse
    {
        return response()->json(TeamMember::orderBy('sort_order')->get());
    }

    public function teamMemberStore(Request $request): JsonResponse
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'short_name' => 'nullable|string|max:100',
            'image_path' => 'nullable|string',
            'quote' => 'nullable|string',
            'bio' => 'nullable|string',
            'fun_fact' => 'nullable|string|max:255',
            'linkedin' => 'nullable|string|max:500',
            'twitter' => 'nullable|string|max:500',
            'email' => 'nullable|email|max:255',
            'whatsapp' => 'nullable|string|max:50',
            'is_founder' => 'boolean',
            'member_type' => 'in:founder,executive,member',
            'sort_order' => 'integer',
        ]);

        $data['slug'] = Str::slug($data['name']);
        $member = TeamMember::create($data);
        return response()->json($member, 201);
    }

    public function teamMemberShow(int $id): JsonResponse
    {
        return response()->json(TeamMember::findOrFail($id));
    }

    public function teamMemberUpdate(Request $request, int $id): JsonResponse
    {
        $member = TeamMember::findOrFail($id);
        $data = $request->validate([
            'name' => 'string|max:255',
            'role' => 'string|max:255',
            'short_name' => 'nullable|string|max:100',
            'image_path' => 'nullable|string',
            'quote' => 'nullable|string',
            'bio' => 'nullable|string',
            'fun_fact' => 'nullable|string|max:255',
            'linkedin' => 'nullable|string|max:500',
            'twitter' => 'nullable|string|max:500',
            'email' => 'nullable|email|max:255',
            'whatsapp' => 'nullable|string|max:50',
            'is_founder' => 'boolean',
            'member_type' => 'in:founder,executive,member',
            'sort_order' => 'integer',
        ]);

        if (isset($data['name'])) {
            $data['slug'] = Str::slug($data['name']);
        }
        $member->update($data);
        return response()->json($member);
    }

    public function teamMemberDestroy(int $id): JsonResponse
    {
        TeamMember::findOrFail($id)->delete();
        return response()->json(['message' => 'Deleted']);
    }

    // ─── Services ───────────────────────────────────────────

    public function serviceIndex(): JsonResponse
    {
        return response()->json(Service::with('lead')->orderBy('sort_order')->get());
    }

    public function serviceStore(Request $request): JsonResponse
    {
        $data = $request->validate([
            'slug' => 'required|string|unique:services,slug',
            'icon_name' => 'required|string',
            'title' => 'required|string',
            'description' => 'required|string',
            'link_path' => 'required|string',
            'col_span' => 'integer',
            'project_count' => 'nullable|string',
            'client_result' => 'nullable|string',
            'lead_team_member_id' => 'nullable|exists:team_members,id',
            'sort_order' => 'integer',
        ]);
        return response()->json(Service::create($data), 201);
    }

    public function serviceShow(int $id): JsonResponse
    {
        return response()->json(Service::with('lead')->findOrFail($id));
    }

    public function serviceUpdate(Request $request, int $id): JsonResponse
    {
        $service = Service::findOrFail($id);
        $data = $request->validate([
            'slug' => 'string|unique:services,slug,' . $id,
            'icon_name' => 'string',
            'title' => 'string',
            'description' => 'string',
            'link_path' => 'string',
            'col_span' => 'integer',
            'project_count' => 'nullable|string',
            'client_result' => 'nullable|string',
            'lead_team_member_id' => 'nullable|exists:team_members,id',
            'sort_order' => 'integer',
        ]);
        $service->update($data);
        return response()->json($service);
    }

    public function serviceDestroy(int $id): JsonResponse
    {
        Service::findOrFail($id)->delete();
        return response()->json(['message' => 'Deleted']);
    }

    // ─── Case Studies ───────────────────────────────────────

    public function caseStudyIndex(): JsonResponse
    {
        return response()->json(
            CaseStudy::with(['tags', 'techStacks', 'features', 'images'])->orderBy('number')->get()
        );
    }

    public function caseStudyStore(Request $request): JsonResponse
    {
        $data = $request->validate([
            'slug' => 'required|string|unique:case_studies,slug',
            'number' => 'required|integer|unique:case_studies,number',
            'title' => 'required|string',
            'subtitle' => 'required|string',
            'category' => 'required|string',
            'cover_image_path' => 'nullable|string',
            'youtube_url' => 'nullable|string',
            'live_url' => 'nullable|string',
            'overview' => 'required|string',
            'challenge' => 'required|string',
            'solution' => 'required|string',
            'outcome' => 'required|string',
            'date' => 'required|date',
            'sort_order' => 'integer',
            'tags' => 'array',
            'tags.*' => 'string',
            'techStack' => 'array',
            'techStack.*' => 'string',
            'features' => 'array',
            'features.*' => 'string',
            'images' => 'array',
            'images.*' => 'string',
        ]);

        $tags = $data['tags'] ?? [];
        $tech = $data['techStack'] ?? [];
        $features = $data['features'] ?? [];
        $images = $data['images'] ?? [];
        unset($data['tags'], $data['techStack'], $data['features'], $data['images']);

        $cs = CaseStudy::create($data);
        foreach ($tags as $t) CaseStudyTag::create(['case_study_id' => $cs->id, 'tag' => $t]);
        foreach ($tech as $t) CaseStudyTechStack::create(['case_study_id' => $cs->id, 'name' => $t]);
        foreach ($features as $i => $f) CaseStudyFeature::create(['case_study_id' => $cs->id, 'feature' => $f, 'sort_order' => $i]);
        foreach ($images as $i => $img) CaseStudyImage::create(['case_study_id' => $cs->id, 'image_path' => $img, 'sort_order' => $i]);

        return response()->json($cs->load(['tags', 'techStacks', 'features', 'images']), 201);
    }

    public function caseStudyShow(int $id): JsonResponse
    {
        return response()->json(
            CaseStudy::with(['tags', 'techStacks', 'features', 'images'])->findOrFail($id)
        );
    }

    public function caseStudyUpdate(Request $request, int $id): JsonResponse
    {
        $cs = CaseStudy::findOrFail($id);
        $data = $request->validate([
            'slug' => 'string|unique:case_studies,slug,' . $id,
            'number' => 'integer|unique:case_studies,number,' . $id,
            'title' => 'string',
            'subtitle' => 'string',
            'category' => 'string',
            'cover_image_path' => 'nullable|string',
            'youtube_url' => 'nullable|string',
            'live_url' => 'nullable|string',
            'overview' => 'string',
            'challenge' => 'string',
            'solution' => 'string',
            'outcome' => 'string',
            'date' => 'date',
            'sort_order' => 'integer',
            'tags' => 'array',
            'tags.*' => 'string',
            'techStack' => 'array',
            'techStack.*' => 'string',
            'features' => 'array',
            'features.*' => 'string',
            'images' => 'array',
            'images.*' => 'string',
        ]);

        if (isset($data['tags'])) {
            $cs->tags()->delete();
            foreach ($data['tags'] as $t) CaseStudyTag::create(['case_study_id' => $cs->id, 'tag' => $t]);
            unset($data['tags']);
        }
        if (isset($data['techStack'])) {
            $cs->techStacks()->delete();
            foreach ($data['techStack'] as $t) CaseStudyTechStack::create(['case_study_id' => $cs->id, 'name' => $t]);
            unset($data['techStack']);
        }
        if (isset($data['features'])) {
            $cs->features()->delete();
            foreach ($data['features'] as $i => $f) CaseStudyFeature::create(['case_study_id' => $cs->id, 'feature' => $f, 'sort_order' => $i]);
            unset($data['features']);
        }
        if (isset($data['images'])) {
            $cs->images()->delete();
            foreach ($data['images'] as $i => $img) CaseStudyImage::create(['case_study_id' => $cs->id, 'image_path' => $img, 'sort_order' => $i]);
            unset($data['images']);
        }

        $cs->update($data);
        return response()->json($cs->load(['tags', 'techStacks', 'features', 'images']));
    }

    public function caseStudyDestroy(int $id): JsonResponse
    {
        CaseStudy::findOrFail($id)->delete();
        return response()->json(['message' => 'Deleted']);
    }

    // ─── Blog Posts ─────────────────────────────────────────

    public function blogPostIndex(): JsonResponse
    {
        return response()->json(
            BlogPost::with(['author', 'tags', 'contentBlocks'])->orderBy('sort_order')->get()
        );
    }

    public function blogPostStore(Request $request): JsonResponse
    {
        $data = $request->validate([
            'slug' => 'required|string|unique:blog_posts,slug',
            'title' => 'required|string',
            'excerpt' => 'required|string',
            'category' => 'required|string',
            'read_time' => 'required|string',
            'date' => 'required|string',
            'image_url' => 'nullable|string',
            'author_team_member_id' => 'nullable|exists:team_members,id',
            'sort_order' => 'integer',
            'tags' => 'array',
            'tags.*' => 'string',
            'content' => 'array',
            'content.*.type' => 'required|string',
            'content.*.content' => 'required',
        ]);

        $tags = $data['tags'] ?? [];
        $content = $data['content'] ?? [];
        unset($data['tags'], $data['content']);

        $post = BlogPost::create($data);
        foreach ($tags as $t) BlogPostTag::create(['blog_post_id' => $post->id, 'tag' => $t]);
        foreach ($content as $i => $block) {
            BlogPostContentBlock::create([
                'blog_post_id' => $post->id,
                'type' => $block['type'],
                'content' => $block['content'],
                'sort_order' => $i,
            ]);
        }

        return response()->json($post->load(['author', 'tags', 'contentBlocks']), 201);
    }

    public function blogPostShow(int $id): JsonResponse
    {
        return response()->json(
            BlogPost::with(['author', 'tags', 'contentBlocks'])->findOrFail($id)
        );
    }

    public function blogPostUpdate(Request $request, int $id): JsonResponse
    {
        $post = BlogPost::findOrFail($id);
        $data = $request->validate([
            'slug' => 'string|unique:blog_posts,slug,' . $id,
            'title' => 'string',
            'excerpt' => 'string',
            'category' => 'string',
            'read_time' => 'string',
            'date' => 'string',
            'image_url' => 'nullable|string',
            'author_team_member_id' => 'nullable|exists:team_members,id',
            'sort_order' => 'integer',
            'tags' => 'array',
            'tags.*' => 'string',
            'content' => 'array',
            'content.*.type' => 'required|string',
            'content.*.content' => 'required',
        ]);

        if (isset($data['tags'])) {
            $post->tags()->delete();
            foreach ($data['tags'] as $t) BlogPostTag::create(['blog_post_id' => $post->id, 'tag' => $t]);
            unset($data['tags']);
        }
        if (isset($data['content'])) {
            $post->contentBlocks()->delete();
            foreach ($data['content'] as $i => $block) {
                BlogPostContentBlock::create([
                    'blog_post_id' => $post->id,
                    'type' => $block['type'],
                    'content' => $block['content'],
                    'sort_order' => $i,
                ]);
            }
            unset($data['content']);
        }

        $post->update($data);
        return response()->json($post->load(['author', 'tags', 'contentBlocks']));
    }

    public function blogPostDestroy(int $id): JsonResponse
    {
        BlogPost::findOrFail($id)->delete();
        return response()->json(['message' => 'Deleted']);
    }

    // ─── Testimonials ───────────────────────────────────────

    public function testimonialIndex(): JsonResponse
    {
        return response()->json(Testimonial::orderBy('sort_order')->get());
    }

    public function testimonialStore(Request $request): JsonResponse
    {
        return response()->json(Testimonial::create($request->all()), 201);
    }

    public function testimonialShow(int $id): JsonResponse
    {
        return response()->json(Testimonial::findOrFail($id));
    }

    public function testimonialUpdate(Request $request, int $id): JsonResponse
    {
        $item = Testimonial::findOrFail($id);
        $item->update($request->all());
        return response()->json($item);
    }

    public function testimonialDestroy(int $id): JsonResponse
    {
        Testimonial::findOrFail($id)->delete();
        return response()->json(['message' => 'Deleted']);
    }

    // ─── FAQs ───────────────────────────────────────────────

    public function faqIndex(): JsonResponse
    {
        return response()->json(Faq::orderBy('sort_order')->get());
    }

    public function faqStore(Request $request): JsonResponse
    {
        return response()->json(Faq::create($request->all()), 201);
    }

    public function faqShow(int $id): JsonResponse
    {
        return response()->json(Faq::findOrFail($id));
    }

    public function faqUpdate(Request $request, int $id): JsonResponse
    {
        $item = Faq::findOrFail($id);
        $item->update($request->all());
        return response()->json($item);
    }

    public function faqDestroy(int $id): JsonResponse
    {
        Faq::findOrFail($id)->delete();
        return response()->json(['message' => 'Deleted']);
    }

    // ─── Stats ──────────────────────────────────────────────

    public function statIndex(): JsonResponse
    {
        return response()->json(Stat::orderBy('sort_order')->get());
    }

    public function statStore(Request $request): JsonResponse
    {
        return response()->json(Stat::create($request->all()), 201);
    }

    public function statShow(int $id): JsonResponse
    {
        return response()->json(Stat::findOrFail($id));
    }

    public function statUpdate(Request $request, int $id): JsonResponse
    {
        $item = Stat::findOrFail($id);
        $item->update($request->all());
        return response()->json($item);
    }

    public function statDestroy(int $id): JsonResponse
    {
        Stat::findOrFail($id)->delete();
        return response()->json(['message' => 'Deleted']);
    }

    // ─── Clients ────────────────────────────────────────────

    public function clientIndex(): JsonResponse
    {
        return response()->json(Client::orderBy('sort_order')->get());
    }

    public function clientStore(Request $request): JsonResponse
    {
        return response()->json(Client::create($request->all()), 201);
    }

    public function clientShow(int $id): JsonResponse
    {
        return response()->json(Client::findOrFail($id));
    }

    public function clientUpdate(Request $request, int $id): JsonResponse
    {
        $item = Client::findOrFail($id);
        $item->update($request->all());
        return response()->json($item);
    }

    public function clientDestroy(int $id): JsonResponse
    {
        Client::findOrFail($id)->delete();
        return response()->json(['message' => 'Deleted']);
    }

    // ─── Trust Badges ───────────────────────────────────────

    public function trustBadgeIndex(): JsonResponse
    {
        return response()->json([
            'badges' => TrustBadge::orderBy('sort_order')->get(),
            'indicators' => TrustIndicator::orderBy('sort_order')->get(),
        ]);
    }

    public function trustBadgeStore(Request $request): JsonResponse
    {
        $type = $request->input('_type', 'badge');
        if ($type === 'indicator') {
            return response()->json(TrustIndicator::create($request->except('_type')), 201);
        }
        return response()->json(TrustBadge::create($request->except('_type')), 201);
    }

    public function trustBadgeDestroy(Request $request, int $id): JsonResponse
    {
        $type = $request->input('_type', 'badge');
        if ($type === 'indicator') {
            TrustIndicator::findOrFail($id)->delete();
        } else {
            TrustBadge::findOrFail($id)->delete();
        }
        return response()->json(['message' => 'Deleted']);
    }

    // ─── Process Steps ──────────────────────────────────────

    public function processStepIndex(): JsonResponse
    {
        return response()->json(ProcessStep::orderBy('sort_order')->get());
    }

    public function processStepStore(Request $request): JsonResponse
    {
        return response()->json(ProcessStep::create($request->all()), 201);
    }

    public function processStepShow(int $id): JsonResponse
    {
        return response()->json(ProcessStep::findOrFail($id));
    }

    public function processStepUpdate(Request $request, int $id): JsonResponse
    {
        $item = ProcessStep::findOrFail($id);
        $item->update($request->all());
        return response()->json($item);
    }

    public function processStepDestroy(int $id): JsonResponse
    {
        ProcessStep::findOrFail($id)->delete();
        return response()->json(['message' => 'Deleted']);
    }

    // ─── Founder's Note ─────────────────────────────────────

    public function foundersNoteShow(): JsonResponse
    {
        return response()->json(FoundersNote::first());
    }

    public function foundersNoteUpdate(Request $request): JsonResponse
    {
        $note = FoundersNote::first();
        if ($note) {
            $note->update($request->all());
        } else {
            $note = FoundersNote::create($request->all());
        }
        return response()->json($note);
    }

    // ─── Company Info ───────────────────────────────────────

    public function companyInfoIndex(): JsonResponse
    {
        return response()->json(CompanyInfo::all());
    }

    public function companyInfoUpdate(Request $request): JsonResponse
    {
        $items = $request->validate(['items' => 'required|array', 'items.*.key' => 'required|string', 'items.*.value' => 'required|string']);
        foreach ($items['items'] as $item) {
            CompanyInfo::updateOrCreate(['key' => $item['key']], ['value' => $item['value']]);
        }
        return response()->json(CompanyInfo::all());
    }

    // ─── Activities ─────────────────────────────────────────

    public function activityIndex(): JsonResponse
    {
        return response()->json(Activity::with('teamMember')->orderBy('sort_order')->get());
    }

    public function activityStore(Request $request): JsonResponse
    {
        return response()->json(Activity::create($request->all()), 201);
    }

    public function activityUpdate(Request $request, int $id): JsonResponse
    {
        $item = Activity::findOrFail($id);
        $item->update($request->all());
        return response()->json($item);
    }

    public function activityDestroy(int $id): JsonResponse
    {
        Activity::findOrFail($id)->delete();
        return response()->json(['message' => 'Deleted']);
    }

    // ─── Contact Submissions ────────────────────────────────

    public function contactSubmissionIndex(): JsonResponse
    {
        try {
            return response()->json(ContactSubmission::orderByDesc('created_at')->get());
        } catch (\Exception $e) {
            return response()->json([]);
        }
    }

    public function contactSubmissionShow(int $id): JsonResponse
    {
        return response()->json(ContactSubmission::findOrFail($id));
    }

    public function contactSubmissionUpdate(Request $request, int $id): JsonResponse
    {
        $item = ContactSubmission::findOrFail($id);
        $data = $request->validate([
            'status' => 'required|in:new,read,replied,archived',
        ]);
        $item->update($data);
        return response()->json($item);
    }

    public function contactSubmissionDestroy(int $id): JsonResponse
    {
        ContactSubmission::findOrFail($id)->delete();
        return response()->json(['message' => 'Deleted']);
    }

    // ─── Call Bookings ──────────────────────────────────────

    public function callBookingIndex(): JsonResponse
    {
        try {
            return response()->json(CallBooking::orderByDesc('created_at')->get());
        } catch (\Exception $e) {
            return response()->json([]);
        }
    }

    public function callBookingShow(int $id): JsonResponse
    {
        return response()->json(CallBooking::findOrFail($id));
    }

    public function callBookingUpdate(Request $request, int $id): JsonResponse
    {
        $item = CallBooking::findOrFail($id);
        $data = $request->validate([
            'status' => 'required|in:new,confirmed,completed,cancelled',
        ]);
        $item->update($data);
        return response()->json($item);
    }

    public function callBookingDestroy(int $id): JsonResponse
    {
        CallBooking::findOrFail($id)->delete();
        return response()->json(['message' => 'Deleted']);
    }

    // ─── Analytics ──────────────────────────────────────────

    public function analyticsOverview(): JsonResponse
    {
        try {
            $now = now();
            $today = $now->copy()->startOfDay();
            $weekAgo = $now->copy()->subDays(7)->startOfDay();
            $monthAgo = $now->copy()->subDays(30)->startOfDay();
            $prevWeek = $now->copy()->subDays(14)->startOfDay();
            $prevMonth = $now->copy()->subDays(60)->startOfDay();

            // Visitor counts (unique sessions)
            $visitorsToday = PageView::where('created_at', '>=', $today)->distinct('session_id')->count('session_id');
            $visitorsWeek = PageView::where('created_at', '>=', $weekAgo)->distinct('session_id')->count('session_id');
            $visitorsMonth = PageView::where('created_at', '>=', $monthAgo)->distinct('session_id')->count('session_id');
            $visitorsPrevWeek = PageView::whereBetween('created_at', [$prevWeek, $weekAgo])->distinct('session_id')->count('session_id');
            $visitorsPrevMonth = PageView::whereBetween('created_at', [$prevMonth, $monthAgo])->distinct('session_id')->count('session_id');
            $totalPageViews = PageView::count();

            // Page views per day (last 30 days)
            $dailyViews = PageView::where('created_at', '>=', $monthAgo)
                ->selectRaw('DATE(created_at) as date, COUNT(*) as views, COUNT(DISTINCT session_id) as visitors')
                ->groupByRaw('DATE(created_at)')
                ->orderByRaw('DATE(created_at)')
                ->get();

            // Top pages
            $topPages = PageView::where('created_at', '>=', $monthAgo)
                ->selectRaw('path, COUNT(*) as views')
                ->groupBy('path')
                ->orderByDesc('views')
                ->limit(10)
                ->get();

            // Referrer breakdown
            $referrers = PageView::where('created_at', '>=', $monthAgo)
                ->whereNotNull('referrer')
                ->where('referrer', '!=', '')
                ->selectRaw("
                    CASE
                        WHEN referrer LIKE '%google%' THEN 'Google'
                        WHEN referrer LIKE '%facebook%' OR referrer LIKE '%fb.%' THEN 'Facebook'
                        WHEN referrer LIKE '%twitter%' OR referrer LIKE '%t.co%' THEN 'Twitter/X'
                        WHEN referrer LIKE '%linkedin%' THEN 'LinkedIn'
                        WHEN referrer LIKE '%github%' THEN 'GitHub'
                        ELSE 'Other'
                    END as source,
                    COUNT(*) as views
                ")
                ->groupByRaw("
                    CASE
                        WHEN referrer LIKE '%google%' THEN 'Google'
                        WHEN referrer LIKE '%facebook%' OR referrer LIKE '%fb.%' THEN 'Facebook'
                        WHEN referrer LIKE '%twitter%' OR referrer LIKE '%t.co%' THEN 'Twitter/X'
                        WHEN referrer LIKE '%linkedin%' THEN 'LinkedIn'
                        WHEN referrer LIKE '%github%' THEN 'GitHub'
                        ELSE 'Other'
                    END
                ")
                ->orderByDesc('views')
                ->get();

            // Add Direct traffic
            $directCount = PageView::where('created_at', '>=', $monthAgo)
                ->where(function ($q) {
                    $q->whereNull('referrer')->orWhere('referrer', '');
                })
                ->count();
            if ($directCount > 0) {
                $referrers->push((object)['source' => 'Direct', 'views' => $directCount]);
            }

            // Content growth
            $contentGrowth = [
                'caseStudies' => CaseStudy::selectRaw('DATE(created_at) as date, COUNT(*) as total')
                    ->groupByRaw('DATE(created_at)')->orderByRaw('DATE(created_at)')->get(),
                'blogPosts' => BlogPost::selectRaw('DATE(created_at) as date, COUNT(*) as total')
                    ->groupByRaw('DATE(created_at)')->orderByRaw('DATE(created_at)')->get(),
                'teamMembers' => TeamMember::selectRaw('DATE(created_at) as date, COUNT(*) as total')
                    ->groupByRaw('DATE(created_at)')->orderByRaw('DATE(created_at)')->get(),
            ];

            // Recent submissions
            $recentContacts = ContactSubmission::orderByDesc('created_at')->limit(5)->get();
            $recentBookings = CallBooking::orderByDesc('created_at')->limit(5)->get();

            // Submissions stats
            $contactsThisWeek = ContactSubmission::where('created_at', '>=', $weekAgo)->count();
            $bookingsThisWeek = CallBooking::where('created_at', '>=', $weekAgo)->count();
            $contactsNew = ContactSubmission::where('status', 'new')->count();
            $bookingsNew = CallBooking::where('status', 'new')->count();

            return response()->json([
                'visitors' => [
                    'today' => $visitorsToday,
                    'week' => $visitorsWeek,
                    'month' => $visitorsMonth,
                    'weekTrend' => $visitorsPrevWeek > 0 ? round(($visitorsWeek - $visitorsPrevWeek) / $visitorsPrevWeek * 100) : 100,
                    'monthTrend' => $visitorsPrevMonth > 0 ? round(($visitorsMonth - $visitorsPrevMonth) / $visitorsPrevMonth * 100) : 100,
                ],
                'totalPageViews' => $totalPageViews,
                'dailyViews' => $dailyViews,
                'topPages' => $topPages,
                'referrers' => $referrers,
                'contentGrowth' => $contentGrowth,
                'inbox' => [
                    'contactsThisWeek' => $contactsThisWeek,
                    'bookingsThisWeek' => $bookingsThisWeek,
                    'contactsNew' => $contactsNew,
                    'bookingsNew' => $bookingsNew,
                    'recentContacts' => $recentContacts,
                    'recentBookings' => $recentBookings,
                ],
            ]);
        } catch (\Exception $e) {
            // Return empty analytics if tables don't exist yet
            return response()->json([
                'visitors' => ['today' => 0, 'week' => 0, 'month' => 0, 'weekTrend' => 0, 'monthTrend' => 0],
                'totalPageViews' => 0,
                'dailyViews' => [],
                'topPages' => [],
                'referrers' => [],
                'contentGrowth' => ['caseStudies' => [], 'blogPosts' => [], 'teamMembers' => []],
                'inbox' => [
                    'contactsThisWeek' => 0, 'bookingsThisWeek' => 0,
                    'contactsNew' => 0, 'bookingsNew' => 0,
                    'recentContacts' => [], 'recentBookings' => [],
                ],
            ]);
        }
    }
}

