import useResource from '../../hooks/useResource';
import DataTable from '../../components/shared/DataTable';
import PageHeader from '../../components/shared/PageHeader';

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'icon_name', label: 'Icon' },
  { key: 'label', label: 'Label' },
  { key: 'value', label: 'Value' },
  { key: 'suffix', label: 'Suffix' },
  { key: 'sort_order', label: 'Order' },
];

export default function StatList() {
  const { items, loading, fetchAll, remove } = useResource('/stats');
  const handleDelete = async (id) => { await remove(id); fetchAll(); };
  return (
    <div>
      <PageHeader title="Stats" />
      <DataTable columns={columns} data={items} loading={loading} basePath="/stats" onDelete={handleDelete} searchField="label" />
    </div>
  );
}

