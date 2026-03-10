import useResource from '../../hooks/useResource';
import DataTable from '../../components/shared/DataTable';
import PageHeader from '../../components/shared/PageHeader';

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'role', label: 'Role' },
  { key: 'quote', label: 'Quote', render: (r) => (r.quote || '').slice(0, 60) + '...' },
  { key: 'rating', label: 'Rating' },
  { key: 'sort_order', label: 'Order' },
];

export default function TestimonialList() {
  const { items, loading, fetchAll, remove } = useResource('/testimonials');
  const handleDelete = async (id) => { await remove(id); fetchAll(); };
  return (
    <div>
      <PageHeader title="Testimonials" />
      <DataTable columns={columns} data={items} loading={loading} basePath="/testimonials" onDelete={handleDelete} searchField="name" />
    </div>
  );
}

