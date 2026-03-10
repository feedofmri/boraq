import useResource from '../../hooks/useResource';
import DataTable from '../../components/shared/DataTable';
import PageHeader from '../../components/shared/PageHeader';

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'text', label: 'Text' },
  { key: 'time_label', label: 'Time' },
  { key: 'sort_order', label: 'Order' },
];

export default function ActivityList() {
  const { items, loading, fetchAll, remove } = useResource('/activities');
  const handleDelete = async (id) => { await remove(id); fetchAll(); };
  return (
    <div>
      <PageHeader title="Activities" />
      <DataTable columns={columns} data={items} loading={loading} basePath="/activities" onDelete={handleDelete} searchField="text" />
    </div>
  );
}

