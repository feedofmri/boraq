import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useResource from '../../hooks/useResource';
import { Input } from '../../components/shared/FormField';
import PageHeader from '../../components/shared/PageHeader';

export default function StatForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchOne, create, update } = useResource('/stats');
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({ icon_name: '', label: '', value: 0, suffix: '', sort_order: 0 });

  useEffect(() => { if (id) fetchOne(id).then((d) => setForm({ icon_name: d.icon_name || '', label: d.label || '', value: d.value || 0, suffix: d.suffix || '', sort_order: d.sort_order || 0 })); }, [id]);
  const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));
  const handleSave = async () => {
    setSaving(true);
    try { if (id) await update(id, form); else await create(form); navigate('/stats'); }
    catch (err) { alert(err.response?.data?.message || err.message); }
    finally { setSaving(false); }
  };

  return (
    <div>
      <PageHeader title={id ? 'Edit Stat' : 'Add Stat'} backTo="/stats" onSave={handleSave} saving={saving} />
      <div className="bg-surface-card rounded-xl border border-surface-border p-6 max-w-3xl">
        <div className="grid grid-cols-2 gap-4">
          <Input label="Icon Name" value={form.icon_name} onChange={(e) => set('icon_name', e.target.value)} placeholder="e.g. Users, FolderKanban" />
          <Input label="Label" value={form.label} onChange={(e) => set('label', e.target.value)} />
          <Input label="Value" type="number" value={form.value} onChange={(e) => set('value', +e.target.value)} />
          <Input label="Suffix" value={form.suffix} onChange={(e) => set('suffix', e.target.value)} placeholder="e.g. +, %" />
          <Input label="Sort Order" type="number" value={form.sort_order} onChange={(e) => set('sort_order', +e.target.value)} />
        </div>
      </div>
    </div>
  );
}

