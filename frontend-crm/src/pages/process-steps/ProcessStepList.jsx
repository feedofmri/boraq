import useResource from '../../hooks/useResource';
import DataTable from '../../components/shared/DataTable';
import PageHeader from '../../components/shared/PageHeader';

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'step_number', label: 'Step' },
  { key: 'title', label: 'Title' },
  { key: 'sort_order', label: 'Order' },
];

export default function ProcessStepList() {
  const { items, loading, fetchAll, remove } = useResource('/process-steps');
  const handleDelete = async (id) => { await remove(id); fetchAll(); };
  return (
    <div>
      <PageHeader title="Process Steps" />
      <DataTable columns={columns} data={items} loading={loading} basePath="/process-steps" onDelete={handleDelete} searchField="title" />
    </div>
  );
}

