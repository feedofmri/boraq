import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/client';
import {
  Users, Briefcase, FolderKanban, FileText,
  MessageSquareQuote, HelpCircle, BarChart3, Building2,
  Shield, ListOrdered, Activity, Mail, Phone
} from 'lucide-react';

const cards = [
  { key: 'contactSubmissions', label: 'Contact Forms', icon: Mail, color: 'bg-blue-500', link: '/contact-submissions' },
  { key: 'callBookings', label: 'Call Bookings', icon: Phone, color: 'bg-green-500', link: '/call-bookings' },
  { key: 'teamMembers', label: 'Team Members', icon: Users, color: 'bg-boraq-teal-steel', link: '/team-members' },
  { key: 'services', label: 'Services', icon: Briefcase, color: 'bg-boraq-teal-muted', link: '/services' },
  { key: 'caseStudies', label: 'Case Studies', icon: FolderKanban, color: 'bg-boraq-teal-deep', link: '/case-studies' },
  { key: 'blogPosts', label: 'Blog Posts', icon: FileText, color: 'bg-boraq-teal-slate', link: '/blog-posts' },
  { key: 'testimonials', label: 'Testimonials', icon: MessageSquareQuote, color: 'bg-boraq-teal-steel', link: '/testimonials' },
  { key: 'faqs', label: 'FAQs', icon: HelpCircle, color: 'bg-boraq-teal-muted', link: '/faqs' },
  { key: 'stats', label: 'Stats', icon: BarChart3, color: 'bg-boraq-teal-deep', link: '/stats' },
  { key: 'clients', label: 'Clients', icon: Building2, color: 'bg-boraq-teal-slate', link: '/clients' },
  { key: 'trustBadges', label: 'Trust Badges', icon: Shield, color: 'bg-boraq-teal-steel', link: '/trust-badges' },
  { key: 'processSteps', label: 'Process Steps', icon: ListOrdered, color: 'bg-boraq-teal-muted', link: '/process-steps' },
  { key: 'activities', label: 'Activities', icon: Activity, color: 'bg-boraq-teal-deep', link: '/activities' },
];

export default function Dashboard() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/dashboard').then((res) => setData(res.data)).finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-text-primary mb-6">Dashboard</h1>
      {loading ? (
        <div className="text-center py-12 text-text-muted">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {cards.map((card) => (
            <Link
              key={card.key}
              to={card.link}
              className="bg-surface-card rounded-xl border border-surface-border p-5 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 ${card.color} rounded-xl flex items-center justify-center text-white group-hover:scale-105 transition-transform`}>
                  <card.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-text-primary">{data[card.key] ?? 0}</p>
                  <p className="text-sm text-text-secondary">{card.label}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

