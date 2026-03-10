import { Link } from 'react-router-dom';
import { Plus, Pencil, Trash2, Search, Eye } from 'lucide-react';
import { useState } from 'react';

export default function DataTable({ columns, data, basePath, onDelete, loading, searchField, linkSuffix = '/edit', hideCreate = false }) {
  const [search, setSearch] = useState('');

  const filtered = searchField
    ? data.filter((row) => {
        const val = row[searchField];
        return val && String(val).toLowerCase().includes(search.toLowerCase());
      })
    : data;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        {searchField && (
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 text-sm bg-surface-elevated border border-surface-border text-text-primary rounded-lg placeholder-text-muted w-64"
            />
          </div>
        )}
        {!searchField && <div />}
        {basePath && !hideCreate && (
          <Link
            to={`${basePath}/create`}
            className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg text-sm font-semibold hover:bg-accent-hover transition-colors"
          >
            <Plus className="w-4 h-4" /> Add New
          </Link>
        )}
      </div>

      {loading ? (
        <div className="text-center py-12 text-text-muted">Loading...</div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-12 text-text-muted">No items found</div>
      ) : (
        <div className="bg-surface-card rounded-xl border border-surface-border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-surface-elevated border-b border-surface-border">
                {columns.map((col) => (
                  <th key={col.key} className="text-left px-4 py-3 text-xs font-semibold text-text-secondary uppercase tracking-wider">
                    {col.label}
                  </th>
                ))}
                <th className="text-right px-4 py-3 text-xs font-semibold text-text-secondary uppercase tracking-wider w-28">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-border">
              {filtered.map((row) => (
                <tr key={row.id} className="hover:bg-surface-hover transition-colors">
                  {columns.map((col) => (
                    <td key={col.key} className="px-4 py-3 text-sm text-text-primary">
                      {col.render ? col.render(row) : String(row[col.key] ?? '')}
                    </td>
                  ))}
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-1">
                      {basePath && (
                        <Link
                          to={`${basePath}/${row.id}${linkSuffix}`}
                          className="p-1.5 rounded-lg hover:bg-accent-bg text-text-secondary hover:text-accent transition-colors"
                        >
                          {linkSuffix === '/edit' ? <Pencil className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </Link>
                      )}
                      {onDelete && (
                        <button
                          onClick={() => {
                            if (confirm('Are you sure you want to delete this item?')) {
                              onDelete(row.id);
                            }
                          }}
                          className="p-1.5 rounded-lg hover:bg-red-500/10 text-text-secondary hover:text-danger transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

