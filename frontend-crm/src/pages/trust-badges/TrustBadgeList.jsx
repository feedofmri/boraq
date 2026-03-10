import useResource from '../../hooks/useResource';
import DataTable from '../../components/shared/DataTable';
import PageHeader from '../../components/shared/PageHeader';
import api from '../../api/client';

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'icon_name', label: 'Icon' },
  { key: 'title', label: 'Title' },
  { key: 'sort_order', label: 'Order' },
];

export default function TrustBadgeList() {
  const { items, loading, fetchAll, remove } = useResource('/trust-badges');

  const badges = items?.badges || items || [];
  const indicators = items?.indicators || [];

  const handleDelete = async (id) => { await remove(id); fetchAll(); };

  return (
    <div>
      <PageHeader title="Trust Badges" />
      <h2 className="text-lg font-semibold text-text-primary mb-3">Badges</h2>
      <DataTable columns={columns} data={badges} loading={loading} basePath="/trust-badges" onDelete={handleDelete} searchField="title" />

      <h2 className="text-lg font-semibold text-text-primary mb-3 mt-8">Indicators</h2>
      <DataTable
        columns={[
          { key: 'id', label: 'ID' },
          { key: 'icon_name', label: 'Icon' },
          { key: 'label', label: 'Label' },
          { key: 'sort_order', label: 'Order' },
        ]}
        data={indicators}
        loading={loading}
        onDelete={(id) => { api.delete(`/trust-badges/${id}`, { data: { _type: 'indicator' } }).then(fetchAll); }}
      />
    </div>
  );
}


