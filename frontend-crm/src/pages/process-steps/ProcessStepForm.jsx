import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useResource from '../../hooks/useResource';
import { Input, Textarea } from '../../components/shared/FormField';
import PageHeader from '../../components/shared/PageHeader';

export default function ProcessStepForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchOne, create, update } = useResource('/process-steps');
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({ step_number: 1, icon_name: '', title: '', description: '', sort_order: 0 });

  useEffect(() => {
    if (id) fetchOne(id).then((d) => setForm({
      step_number: d.step_number || 1, icon_name: d.icon_name || '',
      title: d.title || '', description: d.description || '', sort_order: d.sort_order || 0,
    }));
  }, [id]);

  const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));
  const handleSave = async () => {
    setSaving(true);
    try { if (id) await update(id, form); else await create(form); navigate('/process-steps'); }
    catch (err) { alert(err.response?.data?.message || err.message); }
    finally { setSaving(false); }
  };

  return (
    <div>
      <PageHeader title={id ? 'Edit Process Step' : 'Add Process Step'} backTo="/process-steps" onSave={handleSave} saving={saving} />
      <div className="bg-surface-card rounded-xl border border-surface-border p-6 max-w-3xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label="Step Number" type="number" value={form.step_number} onChange={(e) => set('step_number', +e.target.value)} />
          <Input label="Icon Name" value={form.icon_name} onChange={(e) => set('icon_name', e.target.value)} placeholder="e.g. Search, Code" />
          <Input label="Title" value={form.title} onChange={(e) => set('title', e.target.value)} />
          <Input label="Sort Order" type="number" value={form.sort_order} onChange={(e) => set('sort_order', +e.target.value)} />
        </div>
        <Textarea label="Description" rows={4} value={form.description} onChange={(e) => set('description', e.target.value)} />
      </div>
    </div>
  );
}
