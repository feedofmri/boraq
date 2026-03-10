import useResource from '../../hooks/useResource';
import DataTable from '../../components/shared/DataTable';
import PageHeader from '../../components/shared/PageHeader';

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'title', label: 'Title', render: (r) => <span className="font-medium">{r.title?.slice(0, 50)}{r.title?.length > 50 ? '...' : ''}</span> },
  { key: 'category', label: 'Category' },
  { key: 'date', label: 'Date' },
  { key: 'read_time', label: 'Read Time' },
];

export default function BlogPostList() {
  const { items, loading, fetchAll, remove } = useResource('/blog-posts');
  const handleDelete = async (id) => { await remove(id); fetchAll(); };

  return (
    <div>
      <PageHeader title="Blog Posts" />
      <DataTable columns={columns} data={items} loading={loading} basePath="/blog-posts" onDelete={handleDelete} searchField="title" />
    </div>
  );
}

