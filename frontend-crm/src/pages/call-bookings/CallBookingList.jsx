import { useState } from 'react';
import useResource from '../../hooks/useResource';
import DataTable from '../../components/shared/DataTable';
import PageHeader from '../../components/shared/PageHeader';

const statusColors = {
  new: 'bg-blue-500/20 text-blue-400',
  confirmed: 'bg-yellow-500/20 text-yellow-400',
  completed: 'bg-green-500/20 text-green-400',
  cancelled: 'bg-red-500/20 text-red-400',
};

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'preferred_date', label: 'Date', render: (row) => new Date(row.preferred_date).toLocaleDateString() },
  { key: 'preferred_time', label: 'Time' },
  {
    key: 'status', label: 'Status',
    render: (row) => (
      <span className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase ${statusColors[row.status] || ''}`}>
        {row.status}
      </span>
    ),
  },
];

export default function CallBookingList() {
  const { items, loading, fetchAll, remove } = useResource('/call-bookings');
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? items : items.filter((i) => i.status === filter);

  const handleDelete = async (id) => { await remove(id); fetchAll(); };

  return (
    <div>
      <PageHeader title="Call Bookings" />
      <div className="flex items-center gap-2 mb-4">
        {['all', 'new', 'confirmed', 'completed', 'cancelled'].map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              filter === s
                ? 'bg-accent text-white'
                : 'bg-surface-elevated text-text-secondary hover:text-text-primary'
            }`}
          >
            {s === 'all' ? 'All' : s.charAt(0).toUpperCase() + s.slice(1)}
            {s === 'new' && items.filter((i) => i.status === 'new').length > 0 && (
              <span className="ml-1.5 px-1.5 py-0.5 bg-blue-500 text-white rounded-full text-[10px]">
                {items.filter((i) => i.status === 'new').length}
              </span>
            )}
          </button>
        ))}
      </div>
      <DataTable
        columns={columns}
        data={filtered}
        loading={loading}
        basePath="/call-bookings"
        linkSuffix=""
        hideCreate
        onDelete={handleDelete}
        searchField="name"
      />
    </div>
  );
}


