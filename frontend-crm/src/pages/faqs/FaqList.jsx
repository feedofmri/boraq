import useResource from '../../hooks/useResource';
import DataTable from '../../components/shared/DataTable';
import PageHeader from '../../components/shared/PageHeader';

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'question', label: 'Question', render: (r) => (r.question || '').slice(0, 80) },
  { key: 'sort_order', label: 'Order' },
];

export default function FaqList() {
  const { items, loading, fetchAll, remove } = useResource('/faqs');
  const handleDelete = async (id) => { await remove(id); fetchAll(); };
  return (
    <div>
      <PageHeader title="FAQs" />
      <DataTable columns={columns} data={items} loading={loading} basePath="/faqs" onDelete={handleDelete} searchField="question" />
    </div>
  );
}

