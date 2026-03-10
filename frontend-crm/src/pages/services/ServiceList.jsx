import useResource from '../../hooks/useResource';
import DataTable from '../../components/shared/DataTable';
import PageHeader from '../../components/shared/PageHeader';

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'icon_name', label: 'Icon' },
  { key: 'title', label: 'Title' },
  { key: 'project_count', label: 'Projects' },
  { key: 'sort_order', label: 'Order' },
];

export default function ServiceList() {
  const { items, loading, fetchAll, remove } = useResource('/services');
  const handleDelete = async (id) => { await remove(id); fetchAll(); };

  return (
    <div>
      <PageHeader title="Services" />
      <DataTable columns={columns} data={items} loading={loading} basePath="/services" onDelete={handleDelete} searchField="title" />
    </div>
  );
}

