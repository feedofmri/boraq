import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useResource from '../../hooks/useResource';
import { Input, Textarea, Select } from '../../components/shared/FormField';
import ImageUpload from '../../components/shared/ImageUpload';
import PageHeader from '../../components/shared/PageHeader';

export default function TeamMemberForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchOne, create, update } = useResource('/team-members');
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    name: '', role: '', short_name: '', image_path: '', quote: '', bio: '',
    fun_fact: '', linkedin: '', twitter: '', email: '', whatsapp: '',
    is_founder: false, member_type: 'member', sort_order: 0,
  });

  useEffect(() => {
    if (id) {
      fetchOne(id).then((data) => setForm({
        name: data.name || '', role: data.role || '', short_name: data.short_name || '',
        image_path: data.image_path || '', quote: data.quote || '', bio: data.bio || '',
        fun_fact: data.fun_fact || '', linkedin: data.linkedin || '', twitter: data.twitter || '',
        email: data.email || '', whatsapp: data.whatsapp || '',
        is_founder: !!data.is_founder, member_type: data.member_type || 'member', sort_order: data.sort_order || 0,
      }));
    }
  }, [id]);

  const set = (key, val) => setForm((prev) => ({ ...prev, [key]: val }));

  const handleSave = async () => {
    setSaving(true);
    try {
      if (id) await update(id, form);
      else await create(form);
      navigate('/team-members');
    } catch (err) {
      alert('Error: ' + (err.response?.data?.message || err.message));
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <PageHeader title={id ? 'Edit Team Member' : 'Add Team Member'} backTo="/team-members" onSave={handleSave} saving={saving} />
      <div className="bg-surface-card rounded-xl border border-surface-border p-6 max-w-3xl">
        <div className="grid grid-cols-2 gap-4">
          <Input label="Name" value={form.name} onChange={(e) => set('name', e.target.value)} />
          <Input label="Role" value={form.role} onChange={(e) => set('role', e.target.value)} />
          <Input label="Short Name" value={form.short_name} onChange={(e) => set('short_name', e.target.value)} />
          <Input label="Sort Order" type="number" value={form.sort_order} onChange={(e) => set('sort_order', +e.target.value)} />
        </div>
        <ImageUpload label="Photo" value={form.image_path} onChange={(v) => set('image_path', v)} folder="team" />
        <Textarea label="Quote" value={form.quote} onChange={(e) => set('quote', e.target.value)} />
        <Textarea label="Bio" rows={4} value={form.bio} onChange={(e) => set('bio', e.target.value)} />
        <Input label="Fun Fact" value={form.fun_fact} onChange={(e) => set('fun_fact', e.target.value)} />
        <div className="grid grid-cols-2 gap-4">
          <Input label="Email" type="email" value={form.email} onChange={(e) => set('email', e.target.value)} />
          <Input label="WhatsApp" value={form.whatsapp} onChange={(e) => set('whatsapp', e.target.value)} />
          <Input label="LinkedIn URL" value={form.linkedin} onChange={(e) => set('linkedin', e.target.value)} />
          <Input label="Twitter URL" value={form.twitter} onChange={(e) => set('twitter', e.target.value)} />
        </div>
        <Select
          label="Member Type"
          value={form.member_type}
          onChange={(e) => {
            const val = e.target.value;
            set('member_type', val);
            set('is_founder', val === 'founder');
          }}
          options={[
            { value: 'founder', label: 'Founder' },
            { value: 'executive', label: 'Executive (C-Suite)' },
            { value: 'member', label: 'Team Member' },
          ]}
        />
      </div>
    </div>
  );
}

