import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useResource from '../../hooks/useResource';
import { useNotifications } from '../../contexts/NotificationContext';
import PageHeader from '../../components/shared/PageHeader';
import { Mail, Phone, Building2, Clock, User } from 'lucide-react';

const statusOptions = [
  { value: 'new', label: 'New', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
  { value: 'read', label: 'Read', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
  { value: 'replied', label: 'Replied', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
  { value: 'archived', label: 'Archived', color: 'bg-gray-500/20 text-gray-400 border-gray-500/30' },
];

export default function ContactSubmissionDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchOne, update } = useResource('/contact-submissions');
  const { refreshUnread } = useNotifications();
  const [data, setData] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchOne(id).then(setData);
  }, [id]);

  const handleStatus = async (status) => {
    setSaving(true);
    try {
      await update(id, { status });
      setData((prev) => ({ ...prev, status }));
      // If we marked it read, refresh global unread counts
      if (status === 'read') {
        refreshUnread().catch(() => {});
      }
    } finally {
      setSaving(false);
    }
  };

  if (!data) return <div className="text-center py-12 text-text-muted">Loading...</div>;

  return (
    <div>
      <PageHeader title="Contact Submission" backTo="/contact-submissions" />
      <div className="max-w-3xl space-y-6">
        {/* Info Card */}
        <div className="bg-surface-card rounded-xl border border-surface-border p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <User className="w-4 h-4 text-accent mt-0.5 shrink-0" />
              <div>
                <p className="text-xs text-text-muted mb-1">Name</p>
                <p className="text-text-primary font-medium">{data.first_name} {data.last_name}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-accent mt-0.5 shrink-0" />
              <div>
                <p className="text-xs text-text-muted mb-1">Email</p>
                <a href={`mailto:${data.email}`} className="text-accent hover:text-accent-hover">{data.email}</a>
              </div>
            </div>
            {data.phone && (
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-text-muted mb-1">Phone</p>
                  <p className="text-text-primary">{data.phone}</p>
                </div>
              </div>
            )}
            {data.company && (
              <div className="flex items-start gap-3">
                <Building2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-text-muted mb-1">Company</p>
                  <p className="text-text-primary">{data.company}</p>
                </div>
              </div>
            )}
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-accent mt-0.5 shrink-0" />
              <div>
                <p className="text-xs text-text-muted mb-1">Submitted</p>
                <p className="text-text-primary">{new Date(data.created_at).toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="bg-surface-card rounded-xl border border-surface-border p-6">
          <h3 className="text-sm font-semibold text-text-secondary mb-3">Message</h3>
          <p className="text-text-primary whitespace-pre-wrap leading-relaxed">{data.message}</p>
        </div>

        {/* Status */}
        <div className="bg-surface-card rounded-xl border border-surface-border p-6">
          <h3 className="text-sm font-semibold text-text-secondary mb-3">Status</h3>
          <div className="flex flex-wrap gap-2">
            {statusOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleStatus(opt.value)}
                disabled={saving || data.status === opt.value}
                className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-all ${
                  data.status === opt.value
                    ? `${opt.color} border`
                    : 'bg-surface-elevated text-text-secondary border-surface-border hover:text-text-primary'
                } disabled:opacity-50`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-3">
          <a
            href={`mailto:${data.email}?subject=Re: Your inquiry to Boraq`}
            className="px-5 py-2.5 bg-accent text-white rounded-lg text-sm font-semibold hover:bg-accent-hover transition-colors"
          >
            Reply via Email
          </a>
          <button
            onClick={() => navigate('/contact-submissions')}
            className="px-5 py-2.5 bg-surface-elevated text-text-secondary rounded-lg text-sm font-semibold hover:text-text-primary transition-colors"
          >
            Back to List
          </button>
        </div>
      </div>
    </div>
  );
}
