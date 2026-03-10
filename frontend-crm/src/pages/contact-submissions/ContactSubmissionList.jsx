import { useState } from 'react';
import useResource from '../../hooks/useResource';
import DataTable from '../../components/shared/DataTable';
import PageHeader from '../../components/shared/PageHeader';

const statusColors = {
  new: 'bg-blue-500/20 text-blue-400',
  read: 'bg-yellow-500/20 text-yellow-400',
  replied: 'bg-green-500/20 text-green-400',
  archived: 'bg-gray-500/20 text-gray-400',
};

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'first_name', label: 'Name', render: (row) => `${row.first_name} ${row.last_name}` },
  { key: 'email', label: 'Email' },
  {
    key: 'status', label: 'Status',
    render: (row) => (
      <span className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase ${statusColors[row.status] || ''}`}>
        {row.status}
      </span>
    ),
  },
  { key: 'created_at', label: 'Date', render: (row) => new Date(row.created_at).toLocaleDateString() },
];

export default function ContactSubmissionList() {
  const { items, loading, fetchAll, remove } = useResource('/contact-submissions');
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? items : items.filter((i) => i.status === filter);

  const handleDelete = async (id) => { await remove(id); fetchAll(); };

  return (
    <div>
      <PageHeader title="Contact Submissions" />
      <div className="flex items-center gap-2 mb-4">
        {['all', 'new', 'read', 'replied', 'archived'].map((s) => (
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
        basePath="/contact-submissions"
        linkSuffix=""
        hideCreate
        onDelete={handleDelete}
        searchField="email"
      />
    </div>
  );
}


