import useResource from '../../hooks/useResource';
import DataTable from '../../components/shared/DataTable';
import PageHeader from '../../components/shared/PageHeader';
import fileUrl from '../../api/fileUrl';

const columns = [
  { key: 'id', label: 'ID' },
  {
    key: 'image_path', label: 'Photo',
    render: (row) => row.image_path
      ? <img src={fileUrl(row.image_path)} alt="" className="w-10 h-10 rounded-full object-cover" />
      : <div className="w-10 h-10 rounded-full bg-surface-elevated" />,
  },
  { key: 'name', label: 'Name' },
  { key: 'role', label: 'Role' },
  { key: 'member_type', label: 'Type', render: (row) => {
    const types = { founder: '👑 Founder', executive: '⭐ Executive', member: '👤 Member' };
    return types[row.member_type] || row.member_type || 'Member';
  }},
  { key: 'sort_order', label: 'Order' },
];

export default function TeamMemberList() {
  const { items, loading, fetchAll, remove } = useResource('/team-members');

  const handleDelete = async (id) => {
    await remove(id);
    fetchAll();
  };

  return (
    <div>
      <PageHeader title="Team Members" />
      <DataTable
        columns={columns}
        data={items}
        loading={loading}
        basePath="/team-members"
        onDelete={handleDelete}
        searchField="name"
      />
    </div>
  );
}

