import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useResource from '../../hooks/useResource';
import { Input, Textarea, Select } from '../../components/shared/FormField';
import PageHeader from '../../components/shared/PageHeader';
import api from '../../api/client';

export default function ServiceForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchOne, create, update } = useResource('/services');
  const [saving, setSaving] = useState(false);
  const [teamMembers, setTeamMembers] = useState([]);
  const [form, setForm] = useState({
    slug: '', icon_name: '', title: '', description: '', link_path: '',
    col_span: 1, project_count: '', client_result: '', lead_team_member_id: '', sort_order: 0,
  });

  useEffect(() => {
    api.get('/team-members').then((res) => setTeamMembers(res.data));
    if (id) {
      fetchOne(id).then((data) => setForm({
        slug: data.slug || '', icon_name: data.icon_name || '', title: data.title || '',
        description: data.description || '', link_path: data.link_path || '',
        col_span: data.col_span || 1, project_count: data.project_count || '',
        client_result: data.client_result || '', lead_team_member_id: data.lead_team_member_id || '',
        sort_order: data.sort_order || 0,
      }));
    }
  }, [id]);

  const set = (key, val) => setForm((prev) => ({ ...prev, [key]: val }));

  const handleSave = async () => {
    setSaving(true);
    try {
      if (id) await update(id, form);
      else await create(form);
      navigate('/services');
    } catch (err) {
      alert('Error: ' + (err.response?.data?.message || err.message));
    } finally { setSaving(false); }
  };

  return (
    <div>
      <PageHeader title={id ? 'Edit Service' : 'Add Service'} backTo="/services" onSave={handleSave} saving={saving} />
      <div className="bg-surface-card rounded-xl border border-surface-border p-6 max-w-3xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label="Title" value={form.title} onChange={(e) => set('title', e.target.value)} />
          <Input label="Slug" value={form.slug} onChange={(e) => set('slug', e.target.value)} />
          <Input label="Icon Name" value={form.icon_name} onChange={(e) => set('icon_name', e.target.value)} placeholder="e.g. Code, PenTool" />
          <Input label="Link Path" value={form.link_path} onChange={(e) => set('link_path', e.target.value)} placeholder="/services/web-app" />
          <Input label="Column Span" type="number" value={form.col_span} onChange={(e) => set('col_span', +e.target.value)} />
          <Input label="Sort Order" type="number" value={form.sort_order} onChange={(e) => set('sort_order', +e.target.value)} />
          <Input label="Project Count" value={form.project_count} onChange={(e) => set('project_count', e.target.value)} />
          <Input label="Client Result" value={form.client_result} onChange={(e) => set('client_result', e.target.value)} />
        </div>
        <Textarea label="Description" rows={4} value={form.description} onChange={(e) => set('description', e.target.value)} />
        <Select
          label="Lead Team Member"
          value={form.lead_team_member_id}
          onChange={(e) => set('lead_team_member_id', e.target.value || null)}
          options={teamMembers.map((m) => ({ value: m.id, label: m.name }))}
        />
      </div>
    </div>
  );
}

