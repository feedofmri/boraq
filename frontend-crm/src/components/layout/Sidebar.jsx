import { NavLink } from 'react-router-dom';
import { X, Zap,
  LayoutDashboard, Users, Briefcase, FolderKanban, FileText,
  MessageSquareQuote, HelpCircle, BarChart3, Building2, Shield,
  ListOrdered, BookOpen, Settings, Activity, TrendingUp, Mail, Phone
} from 'lucide-react';

const navItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/analytics', label: 'Analytics', icon: TrendingUp },
  { type: 'divider', label: 'Inbox' },
  { to: '/contact-submissions', label: 'Contact Forms', icon: Mail },
  { to: '/call-bookings', label: 'Call Bookings', icon: Phone },
  { type: 'divider', label: 'Content' },
  { to: '/team-members', label: 'Team Members', icon: Users },
  { to: '/services', label: 'Services', icon: Briefcase },
  { to: '/case-studies', label: 'Case Studies', icon: FolderKanban },
  { to: '/blog-posts', label: 'Blog Posts', icon: FileText },
  { to: '/testimonials', label: 'Testimonials', icon: MessageSquareQuote },
  { to: '/faqs', label: 'FAQs', icon: HelpCircle },
  { to: '/stats', label: 'Stats', icon: BarChart3 },
  { to: '/clients', label: 'Clients', icon: Building2 },
  { to: '/trust-badges', label: 'Trust Badges', icon: Shield },
  { to: '/process-steps', label: 'Process Steps', icon: ListOrdered },
  { to: '/founders-note', label: "Founder's Note", icon: BookOpen },
  { to: '/company-info', label: 'Company Info', icon: Settings },
  { to: '/activities', label: 'Activities', icon: Activity },
];

export default function Sidebar({ open, onClose }) {
  return (
    <aside className={`fixed left-0 top-0 bottom-0 w-64 bg-surface-card border-r border-surface-border text-text-primary flex flex-col z-50 transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
      <div className="px-6 py-5 border-b border-surface-border flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">
          <Zap className="inline w-5 h-5 text-accent mr-1.5 -mt-0.5" />
          Boraq <span className="text-accent">CRM</span>
        </h1>
        {/* Close button visible only on mobile */}
        <button
          onClick={onClose}
          className="lg:hidden p-1.5 rounded-lg hover:bg-surface-hover text-text-secondary hover:text-text-primary transition-colors"
          aria-label="Close sidebar"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        {navItems.map((item, idx) => {
          if (item.type === 'divider') {
            return (
              <div key={idx} className="mt-4 mb-2 px-3">
                <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted">{item.label}</p>
              </div>
            );
          }
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors mb-0.5 ${
                  isActive
                    ? 'bg-accent-bg text-accent'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-hover'
                }`
              }
            >
              <item.icon className="w-4 h-4 shrink-0" />
              {item.label}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
