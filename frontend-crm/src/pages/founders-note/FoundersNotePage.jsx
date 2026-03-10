import { useState, useEffect } from 'react';
import { Input, Textarea } from '../../components/shared/FormField';
import PageHeader from '../../components/shared/PageHeader';
import api from '../../api/client';

export default function FoundersNotePage() {
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    heading: '', subheading: '', body_paragraphs: '', signature_name: '',
    signature_title: '', email: '', photo_path: '',
  });

  useEffect(() => {
    api.get('/founders-note').then((res) => {
      if (res.data) {
        setForm({
          heading: res.data.heading || '',
          subheading: res.data.subheading || '',
          body_paragraphs: Array.isArray(res.data.body_paragraphs)
            ? res.data.body_paragraphs.join('\n\n')
            : res.data.body_paragraphs || '',
          signature_name: res.data.signature_name || '',
          signature_title: res.data.signature_title || '',
          email: res.data.email || '',
          photo_path: res.data.photo_path || '',
        });
      }
    }).finally(() => setLoading(false));
  }, []);

  const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const handleSave = async () => {
    setSaving(true);
    try {
      const payload = {
        ...form,
        body_paragraphs: form.body_paragraphs.split('\n\n').filter(Boolean),
      };
      await api.put('/founders-note', payload);
      alert('Saved!');
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    } finally { setSaving(false); }
  };

  if (loading) return <div className="text-center py-12 text-text-muted">Loading...</div>;

  return (
    <div>
      <PageHeader title="Founder's Note" onSave={handleSave} saving={saving} />
      <div className="bg-surface-card rounded-xl border border-surface-border p-6 max-w-3xl">
        <Input label="Heading" value={form.heading} onChange={(e) => set('heading', e.target.value)} />
        <Input label="Subheading" value={form.subheading} onChange={(e) => set('subheading', e.target.value)} />
        <Textarea label="Body (separate paragraphs with blank lines)" rows={10} value={form.body_paragraphs} onChange={(e) => set('body_paragraphs', e.target.value)} />
        <div className="grid grid-cols-2 gap-4">
          <Input label="Signature Name" value={form.signature_name} onChange={(e) => set('signature_name', e.target.value)} />
          <Input label="Signature Title" value={form.signature_title} onChange={(e) => set('signature_title', e.target.value)} />
          <Input label="Email" type="email" value={form.email} onChange={(e) => set('email', e.target.value)} />
          <Input label="Photo Path" value={form.photo_path} onChange={(e) => set('photo_path', e.target.value)} />
        </div>
      </div>
    </div>
  );
}

