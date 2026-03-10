import { Routes, Route } from 'react-router-dom';
import AdminLayout from './components/layout/AdminLayout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

// Team Members
import TeamMemberList from './pages/team-members/TeamMemberList';
import TeamMemberForm from './pages/team-members/TeamMemberForm';

// Services
import ServiceList from './pages/services/ServiceList';
import ServiceForm from './pages/services/ServiceForm';

// Case Studies
import CaseStudyList from './pages/case-studies/CaseStudyList';
import CaseStudyForm from './pages/case-studies/CaseStudyForm';

// Blog Posts
import BlogPostList from './pages/blog-posts/BlogPostList';
import BlogPostForm from './pages/blog-posts/BlogPostForm';

// Testimonials
import TestimonialList from './pages/testimonials/TestimonialList';
import TestimonialForm from './pages/testimonials/TestimonialForm';

// FAQs
import FaqList from './pages/faqs/FaqList';
import FaqForm from './pages/faqs/FaqForm';

// Stats
import StatList from './pages/stats/StatList';
import StatForm from './pages/stats/StatForm';

// Clients
import ClientList from './pages/clients/ClientList';
import ClientForm from './pages/clients/ClientForm';

// Trust Badges
import TrustBadgeList from './pages/trust-badges/TrustBadgeList';
import TrustBadgeForm from './pages/trust-badges/TrustBadgeForm';

// Process Steps
import ProcessStepList from './pages/process-steps/ProcessStepList';
import ProcessStepForm from './pages/process-steps/ProcessStepForm';

// Activities
import ActivityList from './pages/activities/ActivityList';
import ActivityForm from './pages/activities/ActivityForm';

// Single-record pages
import FoundersNotePage from './pages/founders-note/FoundersNotePage';
import CompanyInfoPage from './pages/company-info/CompanyInfoPage';

// Contact Submissions
import ContactSubmissionList from './pages/contact-submissions/ContactSubmissionList';
import ContactSubmissionDetail from './pages/contact-submissions/ContactSubmissionDetail';

// Call Bookings
import CallBookingList from './pages/call-bookings/CallBookingList';
import CallBookingDetail from './pages/call-bookings/CallBookingDetail';

// Analytics
import AnalyticsDashboard from './pages/analytics/AnalyticsDashboard';

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<AdminLayout />}>
        <Route index element={<Dashboard />} />

        {/* Team Members */}
        <Route path="team-members" element={<TeamMemberList />} />
        <Route path="team-members/create" element={<TeamMemberForm />} />
        <Route path="team-members/:id/edit" element={<TeamMemberForm />} />

        {/* Services */}
        <Route path="services" element={<ServiceList />} />
        <Route path="services/create" element={<ServiceForm />} />
        <Route path="services/:id/edit" element={<ServiceForm />} />

        {/* Case Studies */}
        <Route path="case-studies" element={<CaseStudyList />} />
        <Route path="case-studies/create" element={<CaseStudyForm />} />
        <Route path="case-studies/:id/edit" element={<CaseStudyForm />} />

        {/* Blog Posts */}
        <Route path="blog-posts" element={<BlogPostList />} />
        <Route path="blog-posts/create" element={<BlogPostForm />} />
        <Route path="blog-posts/:id/edit" element={<BlogPostForm />} />

        {/* Testimonials */}
        <Route path="testimonials" element={<TestimonialList />} />
        <Route path="testimonials/create" element={<TestimonialForm />} />
        <Route path="testimonials/:id/edit" element={<TestimonialForm />} />

        {/* FAQs */}
        <Route path="faqs" element={<FaqList />} />
        <Route path="faqs/create" element={<FaqForm />} />
        <Route path="faqs/:id/edit" element={<FaqForm />} />

        {/* Stats */}
        <Route path="stats" element={<StatList />} />
        <Route path="stats/create" element={<StatForm />} />
        <Route path="stats/:id/edit" element={<StatForm />} />

        {/* Clients */}
        <Route path="clients" element={<ClientList />} />
        <Route path="clients/create" element={<ClientForm />} />
        <Route path="clients/:id/edit" element={<ClientForm />} />

        {/* Trust Badges */}
        <Route path="trust-badges" element={<TrustBadgeList />} />
        <Route path="trust-badges/create" element={<TrustBadgeForm />} />
        <Route path="trust-badges/:id/edit" element={<TrustBadgeForm />} />

        {/* Process Steps */}
        <Route path="process-steps" element={<ProcessStepList />} />
        <Route path="process-steps/create" element={<ProcessStepForm />} />
        <Route path="process-steps/:id/edit" element={<ProcessStepForm />} />

        {/* Activities */}
        <Route path="activities" element={<ActivityList />} />
        <Route path="activities/create" element={<ActivityForm />} />
        <Route path="activities/:id/edit" element={<ActivityForm />} />

        {/* Single-record pages */}
        <Route path="founders-note" element={<FoundersNotePage />} />
        <Route path="company-info" element={<CompanyInfoPage />} />

        {/* Analytics */}
        <Route path="analytics" element={<AnalyticsDashboard />} />

        {/* Contact Submissions */}
        <Route path="contact-submissions" element={<ContactSubmissionList />} />
        <Route path="contact-submissions/:id" element={<ContactSubmissionDetail />} />

        {/* Call Bookings */}
        <Route path="call-bookings" element={<CallBookingList />} />
        <Route path="call-bookings/:id" element={<CallBookingDetail />} />
      </Route>
    </Routes>
  );
}

