<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TeamMember;
use App\Models\Service;
use App\Models\CaseStudy;
use App\Models\BlogPost;
use App\Models\Testimonial;
use App\Models\Faq;
use App\Models\Stat;
use App\Models\Client;
use App\Models\TrustBadge;
use App\Models\TrustIndicator;
use App\Models\ProcessStep;
use App\Models\FoundersNote;
use App\Models\CompanyInfo;
use App\Models\Activity;
use App\Models\PageView;
use App\Models\ContactSubmission;
use App\Models\CallBooking;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    // ─── Team Members ───────────────────────────────────────

    public function teamMembers(): JsonResponse
    {
        $members = TeamMember::orderBy('sort_order')->get()->map(fn($m) => $this->formatTeamMember($m));
        return response()->json($members);
    }

    public function teamMember(string $slug): JsonResponse
    {
        $member = TeamMember::where('slug', $slug)->firstOrFail();
        return response()->json($this->formatTeamMember($member));
    }

    // ─── Services ───────────────────────────────────────────

    public function services(): JsonResponse
    {
        $services = Service::with('lead')->orderBy('sort_order')->get()->map(fn($s) => $this->formatService($s));
        return response()->json($services);
    }

    public function service(string $slug): JsonResponse
    {
        $service = Service::with('lead')->where('slug', $slug)->firstOrFail();
        return response()->json($this->formatService($service));
    }

    // ─── Case Studies ───────────────────────────────────────

    public function caseStudies(): JsonResponse
    {
        $studies = CaseStudy::with(['tags', 'techStacks', 'features', 'images'])
            ->orderBy('number')
            ->get()
            ->map(fn($cs) => $this->formatCaseStudy($cs));
        return response()->json($studies);
    }

    public function caseStudy(string $slug): JsonResponse
    {
        $study = CaseStudy::with(['tags', 'techStacks', 'features', 'images'])
            ->where('slug', $slug)
            ->firstOrFail();
        return response()->json($this->formatCaseStudy($study));
    }

    // ─── Blog Posts ─────────────────────────────────────────

    public function blogPosts(): JsonResponse
    {
        $posts = BlogPost::with(['author', 'tags', 'contentBlocks'])
            ->orderBy('sort_order')
            ->get()
            ->map(fn($p) => $this->formatBlogPost($p));
        return response()->json($posts);
    }

    public function blogPost(string $slug): JsonResponse
    {
        $post = BlogPost::with(['author', 'tags', 'contentBlocks'])
            ->where('slug', $slug)
            ->firstOrFail();
        return response()->json($this->formatBlogPost($post));
    }

    // ─── Testimonials ───────────────────────────────────────

    public function testimonials(): JsonResponse
    {
        return response()->json(
            Testimonial::orderBy('sort_order')->get()
        );
    }

    // ─── FAQs ───────────────────────────────────────────────

    public function faqs(): JsonResponse
    {
        return response()->json(
            Faq::orderBy('sort_order')->get()
        );
    }

    // ─── Stats ──────────────────────────────────────────────

    public function stats(): JsonResponse
    {
        return response()->json(
            Stat::orderBy('sort_order')->get()
        );
    }

    // ─── Clients ────────────────────────────────────────────

    public function clients(): JsonResponse
    {
        return response()->json(
            Client::orderBy('sort_order')->get()
        );
    }

    // ─── Trust Badges & Indicators ──────────────────────────

    public function trustBadges(): JsonResponse
    {
        return response()->json([
            'badges' => TrustBadge::orderBy('sort_order')->get(),
            'indicators' => TrustIndicator::orderBy('sort_order')->get(),
        ]);
    }

    // ─── Process Steps ──────────────────────────────────────

    public function processSteps(): JsonResponse
    {
        return response()->json(
            ProcessStep::orderBy('sort_order')->get()
        );
    }

    // ─── Founder's Note ─────────────────────────────────────

    public function foundersNote(): JsonResponse
    {
        $note = FoundersNote::first();
        if (!$note) {
            return response()->json(null);
        }
        return response()->json($note);
    }

    // ─── Company Info ───────────────────────────────────────

    public function companyInfo(): JsonResponse
    {
        $info = CompanyInfo::pluck('value', 'key');
        return response()->json($info);
    }

    // ─── Activities ─────────────────────────────────────────

    public function activities(): JsonResponse
    {
        $activities = Activity::with('teamMember')
            ->orderBy('sort_order')
            ->get()
            ->map(fn($a) => [
                'id' => $a->id,
                'text' => $a->text,
                'time' => $a->time_label,
                'avatar' => $a->teamMember ? $a->teamMember->image_url : null,
                'memberName' => $a->teamMember?->short_name ?? $a->teamMember?->name,
            ]);
        return response()->json($activities);
    }

    // ─── Homepage Aggregate ─────────────────────────────────
    // Single endpoint to load all homepage data in one request

    public function homepage(): JsonResponse
    {
        $teamMembers = TeamMember::orderBy('sort_order')->get()->map(fn($m) => $this->formatTeamMember($m));
        $services = Service::with('lead')->orderBy('sort_order')->get()->map(fn($s) => $this->formatService($s));
        $caseStudies = CaseStudy::with(['tags', 'techStacks', 'features', 'images'])
            ->orderBy('number')
            ->get()
            ->map(fn($cs) => $this->formatCaseStudy($cs));

        return response()->json([
            'teamMembers' => $teamMembers,
            'services' => $services,
            'caseStudies' => $caseStudies,
            'testimonials' => Testimonial::orderBy('sort_order')->get(),
            'faqs' => Faq::orderBy('sort_order')->get(),
            'stats' => Stat::orderBy('sort_order')->get(),
            'clients' => Client::orderBy('sort_order')->get(),
            'trustBadges' => TrustBadge::orderBy('sort_order')->get(),
            'trustIndicators' => TrustIndicator::orderBy('sort_order')->get(),
            'processSteps' => ProcessStep::orderBy('sort_order')->get(),
            'foundersNote' => FoundersNote::first(),
            'companyInfo' => CompanyInfo::pluck('value', 'key'),
            'activities' => Activity::with('teamMember')->orderBy('sort_order')->get()->map(fn($a) => [
                'id' => $a->id,
                'text' => $a->text,
                'time' => $a->time_label,
                'avatar' => $a->teamMember ? $a->teamMember->image_url : null,
                'memberName' => $a->teamMember?->short_name ?? $a->teamMember?->name,
            ]),
        ]);
    }

    // ─── Formatting Helpers ─────────────────────────────────

    private function formatTeamMember(TeamMember $m): array
    {
        return [
            'id' => $m->id,
            'name' => $m->name,
            'slug' => $m->slug,
            'shortName' => $m->short_name,
            'role' => $m->role,
            'image' => $m->image_url,
            'quote' => $m->quote,
            'bio' => $m->bio,
            'funFact' => $m->fun_fact,
            'linkedin' => $m->linkedin,
            'twitter' => $m->twitter,
            'email' => $m->email,
            'whatsapp' => $m->whatsapp,
            'isFounder' => $m->is_founder,
            'memberType' => $m->member_type ?? 'member',
        ];
    }

    private function formatService(Service $s): array
    {
        return [
            'id' => $s->id,
            'slug' => $s->slug,
            'icon' => $s->icon_name,
            'title' => $s->title,
            'desc' => $s->description,
            'link' => $s->link_path,
            'colSpan' => $s->col_span,
            'projectCount' => $s->project_count,
            'clientResult' => $s->client_result,
            'lead' => $s->lead ? [
                'name' => $s->lead->name,
                'role' => $s->lead->role,
                'avatar' => $s->lead->image_url,
            ] : null,
        ];
    }

    private function formatCaseStudy(CaseStudy $cs): array
    {
        return [
            'id' => $cs->slug,
            'number' => $cs->number,
            'title' => $cs->title,
            'subtitle' => $cs->subtitle,
            'category' => $cs->category,
            'tags' => $cs->tags->pluck('tag')->toArray(),
            'cover' => $cs->cover_image_url,
            'images' => $cs->images->map(fn($i) => $i->image_path ? '/api/files/' . $i->image_path : null)->filter()->values()->toArray(),
            'youtubeUrl' => $cs->youtube_url,
            'liveUrl' => $cs->live_url,
            'overview' => $cs->overview,
            'challenge' => $cs->challenge,
            'solution' => $cs->solution,
            'outcome' => $cs->outcome,
            'features' => $cs->features->pluck('feature')->toArray(),
            'techStack' => $cs->techStacks->pluck('name')->toArray(),
            'date' => $cs->date?->toDateString(),
        ];
    }

    private function formatBlogPost(BlogPost $p): array
    {
        return [
            'id' => $p->slug,
            'title' => $p->title,
            'excerpt' => $p->excerpt,
            'category' => $p->category,
            'readTime' => $p->read_time,
            'date' => $p->date,
            'image' => $p->image_url,
            'tags' => $p->tags->pluck('tag')->toArray(),
            'author' => $p->author?->name,
            'authorPhoto' => $p->author?->image_url,
            'content' => $p->contentBlocks->map(fn($b) => [
                'type' => $b->type,
                'content' => $b->content,
            ])->toArray(),
        ];
    }

    // ─── Page View Tracking ─────────────────────────────────

    public function trackPageView(Request $request): JsonResponse
    {
        $data = $request->validate([
            'path' => 'required|string|max:500',
            'referrer' => 'nullable|string|max:500',
        ]);

        try {
            PageView::create([
                'path' => $data['path'],
                'referrer' => $data['referrer'] ?? null,
                'user_agent' => substr($request->userAgent() ?? '', 0, 500),
                'ip_hash' => hash('sha256', $request->ip() . config('app.key')),
                'session_id' => hash('sha256', $request->ip() . ($request->userAgent() ?? '') . date('Y-m-d')),
                'created_at' => now(),
            ]);
        } catch (\Exception $e) {
            // Silently fail if table doesn't exist yet
        }

        return response()->json(['ok' => true]);
    }

    // ─── Contact Form Submission ────────────────────────────

    public function submitContact(Request $request): JsonResponse
    {
        $data = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:50',
            'company' => 'nullable|string|max:255',
            'message' => 'required|string|max:5000',
        ]);

        ContactSubmission::create($data);

        return response()->json(['message' => 'Thank you! We will get back to you soon.'], 201);
    }

    // ─── Book-a-Call Submission ──────────────────────────────

    public function submitCallBooking(Request $request): JsonResponse
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:50',
            'company' => 'nullable|string|max:255',
            'preferred_date' => 'required|date|after_or_equal:today',
            'preferred_time' => 'required|string|max:20',
            'timezone' => 'nullable|string|max:50',
            'message' => 'nullable|string|max:5000',
        ]);

        CallBooking::create($data);

        return response()->json(['message' => 'Your call has been booked! We will send a confirmation shortly.'], 201);
    }
}

