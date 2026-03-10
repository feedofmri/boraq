import { useState, useEffect, useMemo } from 'react';
import api from '../../api/client';
import { useTheme } from '../../contexts/ThemeContext';
import { TrendingUp, TrendingDown, Eye, Users, BarChart3, Mail, Phone } from 'lucide-react';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';

const COLORS = ['#82A9B4', '#587E88', '#AFD7E2', '#2F555F', '#032F38', '#C5C8C8'];

function useChartColors() {
  const { theme } = useTheme();
  return useMemo(() => ({
    grid: theme === 'dark' ? '#1A2528' : '#DDE2E4',
    tick: theme === 'dark' ? '#909393' : '#5E6161',
    line1: theme === 'dark' ? '#82A9B4' : '#2F555F',
    line2: theme === 'dark' ? '#AFD7E2' : '#587E88',
    bar: theme === 'dark' ? '#82A9B4' : '#2F555F',
  }), [theme]);
}

function StatCard({ label, value, trend, icon: Icon }) {
  const isUp = trend >= 0;
  return (
    <div className="bg-surface-card rounded-xl border border-surface-border p-5">
      <div className="flex items-center justify-between mb-3">
        <div className="w-10 h-10 rounded-xl bg-accent-bg flex items-center justify-center">
          <Icon className="w-5 h-5 text-accent" />
        </div>
        {trend !== undefined && trend !== null && (
          <div className={`flex items-center gap-1 text-xs font-bold ${isUp ? 'text-green-400' : 'text-red-400'}`}>
            {isUp ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
            {Math.abs(trend)}%
          </div>
        )}
      </div>
      <p className="text-2xl font-bold text-text-primary">{value?.toLocaleString() ?? 0}</p>
      <p className="text-xs text-text-muted mt-1">{label}</p>
    </div>
  );
}

function ChartCard({ title, children, className = '' }) {
  return (
    <div className={`bg-surface-card rounded-xl border border-surface-border p-6 ${className}`}>
      <h3 className="text-sm font-semibold text-text-secondary mb-4">{title}</h3>
      {children}
    </div>
  );
}

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-surface-elevated border border-surface-border rounded-lg px-3 py-2 shadow-lg">
      <p className="text-xs text-text-muted mb-1">{label}</p>
      {payload.map((entry, i) => (
        <p key={i} className="text-sm font-semibold" style={{ color: entry.color }}>
          {entry.name}: {entry.value}
        </p>
      ))}
    </div>
  );
};

export default function AnalyticsDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const cc = useChartColors();

  useEffect(() => {
    api.get('/analytics')
      .then((res) => setData(res.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center py-12 text-text-muted">Loading analytics...</div>;
  if (!data) return <div className="text-center py-12 text-text-muted">No data available</div>;

  const { visitors, totalPageViews, dailyViews, topPages, referrers, inbox } = data;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-text-primary">Analytics</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Visitors Today" value={visitors.today} icon={Users} />
        <StatCard label="Visitors This Week" value={visitors.week} trend={visitors.weekTrend} icon={Eye} />
        <StatCard label="Visitors This Month" value={visitors.month} trend={visitors.monthTrend} icon={BarChart3} />
        <StatCard label="Total Page Views" value={totalPageViews} icon={Eye} />
      </div>

      {/* Inbox Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="New Contact Submissions" value={inbox.contactsNew} icon={Mail} />
        <StatCard label="Contacts This Week" value={inbox.contactsThisWeek} icon={Mail} />
        <StatCard label="New Call Bookings" value={inbox.bookingsNew} icon={Phone} />
        <StatCard label="Bookings This Week" value={inbox.bookingsThisWeek} icon={Phone} />
      </div>

      {/* Charts Row 1: Traffic Over Time */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <ChartCard title="Traffic — Last 30 Days" className="lg:col-span-2">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dailyViews}>
              <CartesianGrid strokeDasharray="3 3" stroke={cc.grid} />
              <XAxis dataKey="date" tick={{ fontSize: 11, fill: cc.tick }} tickFormatter={(v) => v?.slice(5)} />
              <YAxis tick={{ fontSize: 11, fill: cc.tick }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: 12, color: cc.tick }} />
              <Line type="monotone" dataKey="views" stroke={cc.line1} strokeWidth={2} dot={false} name="Page Views" />
              <Line type="monotone" dataKey="visitors" stroke={cc.line2} strokeWidth={2} dot={false} name="Unique Visitors" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Traffic Sources">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={referrers}
                dataKey="views"
                nameKey="source"
                cx="50%"
                cy="50%"
                outerRadius={100}
                innerRadius={50}
                paddingAngle={2}
                label={({ source, percent }) => `${source} ${(percent * 100).toFixed(0)}%`}
                labelLine={false}
              >
                {referrers?.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Charts Row 2: Top Pages */}
      <ChartCard title="Top Pages — Last 30 Days">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={topPages} layout="vertical" margin={{ left: 100 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={cc.grid} horizontal={false} />
            <XAxis type="number" tick={{ fontSize: 11, fill: cc.tick }} />
            <YAxis
              type="category"
              dataKey="path"
              tick={{ fontSize: 11, fill: cc.tick }}
              width={100}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="views" fill={cc.bar} radius={[0, 6, 6, 0]} name="Views" />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Recent Submissions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ChartCard title="Recent Contact Submissions">
          {inbox.recentContacts?.length === 0 ? (
            <p className="text-text-muted text-sm">No submissions yet</p>
          ) : (
            <div className="space-y-3">
              {inbox.recentContacts?.map((c) => (
                <div key={c.id} className="flex items-center justify-between bg-surface-elevated rounded-lg px-4 py-3">
                  <div>
                    <p className="text-sm font-medium text-text-primary">{c.first_name} {c.last_name}</p>
                    <p className="text-xs text-text-muted">{c.email}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                      c.status === 'new' ? 'bg-blue-500/20 text-blue-400' :
                      c.status === 'read' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>{c.status}</span>
                    <p className="text-[10px] text-text-muted mt-1">{new Date(c.created_at).toLocaleDateString()}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ChartCard>

        <ChartCard title="Recent Call Bookings">
          {inbox.recentBookings?.length === 0 ? (
            <p className="text-text-muted text-sm">No bookings yet</p>
          ) : (
            <div className="space-y-3">
              {inbox.recentBookings?.map((b) => (
                <div key={b.id} className="flex items-center justify-between bg-surface-elevated rounded-lg px-4 py-3">
                  <div>
                    <p className="text-sm font-medium text-text-primary">{b.name}</p>
                    <p className="text-xs text-text-muted">{new Date(b.preferred_date).toLocaleDateString()} at {b.preferred_time}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                      b.status === 'new' ? 'bg-blue-500/20 text-blue-400' :
                      b.status === 'confirmed' ? 'bg-yellow-500/20 text-yellow-400' :
                      b.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>{b.status}</span>
                    <p className="text-[10px] text-text-muted mt-1">{b.email}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ChartCard>
      </div>
    </div>
  );
}

