import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useResource from '../../hooks/useResource';
import { Input, Textarea } from '../../components/shared/FormField';
import PageHeader from '../../components/shared/PageHeader';

export default function FaqForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchOne, create, update } = useResource('/faqs');
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({ question: '', answer: '', sort_order: 0 });

  useEffect(() => { if (id) fetchOne(id).then((d) => setForm({ question: d.question || '', answer: d.answer || '', sort_order: d.sort_order || 0 })); }, [id]);
  const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));
  const handleSave = async () => {
    setSaving(true);
    try { if (id) await update(id, form); else await create(form); navigate('/faqs'); }
    catch (err) { alert(err.response?.data?.message || err.message); }
    finally { setSaving(false); }
  };

  return (
    <div>
      <PageHeader title={id ? 'Edit FAQ' : 'Add FAQ'} backTo="/faqs" onSave={handleSave} saving={saving} />
      <div className="bg-surface-card rounded-xl border border-surface-border p-6 max-w-3xl">
        <Input label="Question" value={form.question} onChange={(e) => set('question', e.target.value)} />
        <Textarea label="Answer" rows={5} value={form.answer} onChange={(e) => set('answer', e.target.value)} />
        <Input label="Sort Order" type="number" value={form.sort_order} onChange={(e) => set('sort_order', +e.target.value)} />
      </div>
    </div>
  );
}

