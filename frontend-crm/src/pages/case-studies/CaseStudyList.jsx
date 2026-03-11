import useResource from '../../hooks/useResource';
import DataTable from '../../components/shared/DataTable';
import PageHeader from '../../components/shared/PageHeader';
import fileUrl from '../../api/fileUrl';

const columns = [
  { key: 'number', label: '#' },
  {
    key: 'cover_image_path', label: 'Cover',
    render: (row) => row.cover_image_path
      ? <img src={fileUrl(row.cover_image_path)} alt="" className="w-16 h-10 rounded object-cover" />
      : <div className="w-16 h-10 rounded bg-surface-elevated" />,
  },
  { key: 'title', label: 'Title' },
  { key: 'category', label: 'Category' },
  { key: 'date', label: 'Date' },
];

export default function CaseStudyList() {
  const { items, loading, fetchAll, remove } = useResource('/case-studies');
  const handleDelete = async (id) => { await remove(id); fetchAll(); };

  return (
    <div>
      <PageHeader title="Case Studies" />
      <DataTable columns={columns} data={items} loading={loading} basePath="/case-studies" onDelete={handleDelete} searchField="title" />
    </div>
  );
}

