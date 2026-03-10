import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useResource from '../../hooks/useResource';
import { Input } from '../../components/shared/FormField';
import PageHeader from '../../components/shared/PageHeader';

export default function ClientForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchOne, create, update } = useResource('/clients');
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({ name: '', logo_concept: '', sort_order: 0 });

  useEffect(() => { if (id) fetchOne(id).then((d) => setForm({ name: d.name || '', logo_concept: d.logo_concept || '', sort_order: d.sort_order || 0 })); }, [id]);
  const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));
  const handleSave = async () => {
    setSaving(true);
    try { if (id) await update(id, form); else await create(form); navigate('/clients'); }
    catch (err) { alert(err.response?.data?.message || err.message); }
    finally { setSaving(false); }
  };

  return (
    <div>
      <PageHeader title={id ? 'Edit Client' : 'Add Client'} backTo="/clients" onSave={handleSave} saving={saving} />
      <div className="bg-surface-card rounded-xl border border-surface-border p-6 max-w-3xl">
        <Input label="Name" value={form.name} onChange={(e) => set('name', e.target.value)} />
        <Input label="Logo Concept" value={form.logo_concept} onChange={(e) => set('logo_concept', e.target.value)} placeholder="Text-based logo concept" />
        <Input label="Sort Order" type="number" value={form.sort_order} onChange={(e) => set('sort_order', +e.target.value)} />
      </div>
    </div>
  );
}

