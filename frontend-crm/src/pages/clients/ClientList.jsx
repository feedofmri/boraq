import useResource from '../../hooks/useResource';
import DataTable from '../../components/shared/DataTable';
import PageHeader from '../../components/shared/PageHeader';

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'logo_concept', label: 'Logo Concept' },
  { key: 'sort_order', label: 'Order' },
];

export default function ClientList() {
  const { items, loading, fetchAll, remove } = useResource('/clients');
  const handleDelete = async (id) => { await remove(id); fetchAll(); };
  return (
    <div>
      <PageHeader title="Clients" />
      <DataTable columns={columns} data={items} loading={loading} basePath="/clients" onDelete={handleDelete} searchField="name" />
    </div>
  );
}

