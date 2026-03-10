import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useResource from '../../hooks/useResource';
import { Input, Textarea } from '../../components/shared/FormField';
import PageHeader from '../../components/shared/PageHeader';

export default function TrustBadgeForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchOne, create, update } = useResource('/trust-badges');
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({ icon_name: '', title: '', description: '', year_label: '', sort_order: 0 });

  useEffect(() => { if (id) fetchOne(id).then((d) => setForm({ icon_name: d.icon_name || '', title: d.title || '', description: d.description || '', year_label: d.year_label || '', sort_order: d.sort_order || 0 })); }, [id]);
  const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));
  const handleSave = async () => {
    setSaving(true);
    try { if (id) await update(id, form); else await create(form); navigate('/trust-badges'); }
    catch (err) { alert(err.response?.data?.message || err.message); }
    finally { setSaving(false); }
  };

  return (
    <div>
      <PageHeader title={id ? 'Edit Trust Badge' : 'Add Trust Badge'} backTo="/trust-badges" onSave={handleSave} saving={saving} />
      <div className="bg-surface-card rounded-xl border border-surface-border p-6 max-w-3xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label="Icon Name" value={form.icon_name} onChange={(e) => set('icon_name', e.target.value)} />
          <Input label="Title" value={form.title} onChange={(e) => set('title', e.target.value)} />
          <Input label="Year Label" value={form.year_label} onChange={(e) => set('year_label', e.target.value)} />
          <Input label="Sort Order" type="number" value={form.sort_order} onChange={(e) => set('sort_order', +e.target.value)} />
        </div>
        <Textarea label="Description" rows={3} value={form.description} onChange={(e) => set('description', e.target.value)} />
      </div>
    </div>
  );
}
