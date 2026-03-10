import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useResource from '../../hooks/useResource';
import { Input, Textarea } from '../../components/shared/FormField';
import PageHeader from '../../components/shared/PageHeader';

export default function TestimonialForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchOne, create, update } = useResource('/testimonials');
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    name: '', role: '', company: '', quote: '', avatar_url: '',
    rating: 5, result: '', platform: '', sort_order: 0,
  });

  useEffect(() => {
    if (id) fetchOne(id).then((d) => setForm({ ...form, ...d }));
  }, [id]);

  const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));
  const handleSave = async () => {
    setSaving(true);
    try {
      if (id) await update(id, form); else await create(form);
      navigate('/testimonials');
    } catch (err) { alert(err.response?.data?.message || err.message); }
    finally { setSaving(false); }
  };

  return (
    <div>
      <PageHeader title={id ? 'Edit Testimonial' : 'Add Testimonial'} backTo="/testimonials" onSave={handleSave} saving={saving} />
      <div className="bg-surface-card rounded-xl border border-surface-border p-6 max-w-3xl">
        <div className="grid grid-cols-2 gap-4">
          <Input label="Name" value={form.name} onChange={(e) => set('name', e.target.value)} />
          <Input label="Role" value={form.role} onChange={(e) => set('role', e.target.value)} />
          <Input label="Company" value={form.company} onChange={(e) => set('company', e.target.value)} />
          <Input label="Rating" type="number" min="1" max="5" value={form.rating} onChange={(e) => set('rating', +e.target.value)} />
          <Input label="Avatar URL" value={form.avatar_url} onChange={(e) => set('avatar_url', e.target.value)} />
          <Input label="Platform" value={form.platform} onChange={(e) => set('platform', e.target.value)} />
          <Input label="Result" value={form.result} onChange={(e) => set('result', e.target.value)} />
          <Input label="Sort Order" type="number" value={form.sort_order} onChange={(e) => set('sort_order', +e.target.value)} />
        </div>
        <Textarea label="Quote" rows={4} value={form.quote} onChange={(e) => set('quote', e.target.value)} />
      </div>
    </div>
  );
}

