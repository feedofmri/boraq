import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useResource from '../../hooks/useResource';
import { Input, Select } from '../../components/shared/FormField';
import PageHeader from '../../components/shared/PageHeader';
import api from '../../api/client';

export default function ActivityForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchOne, create, update } = useResource('/activities');
  const [saving, setSaving] = useState(false);
  const [teamMembers, setTeamMembers] = useState([]);
  const [form, setForm] = useState({ text: '', time_label: '', team_member_id: '', sort_order: 0 });

  useEffect(() => {
    api.get('/team-members').then((res) => setTeamMembers(res.data));
    if (id) fetchOne(id).then((d) => setForm({
      text: d.text || '', time_label: d.time_label || '',
      team_member_id: d.team_member_id || '', sort_order: d.sort_order || 0,
    }));
  }, [id]);

  const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));
  const handleSave = async () => {
    setSaving(true);
    try { if (id) await update(id, form); else await create(form); navigate('/activities'); }
    catch (err) { alert(err.response?.data?.message || err.message); }
    finally { setSaving(false); }
  };

  return (
    <div>
      <PageHeader title={id ? 'Edit Activity' : 'Add Activity'} backTo="/activities" onSave={handleSave} saving={saving} />
      <div className="bg-surface-card rounded-xl border border-surface-border p-6 max-w-3xl">
        <Input label="Text" value={form.text} onChange={(e) => set('text', e.target.value)} placeholder="e.g. Deployed client dashboard v2.1" />
        <div className="grid grid-cols-2 gap-4">
          <Input label="Time Label" value={form.time_label} onChange={(e) => set('time_label', e.target.value)} placeholder="e.g. 2 hours ago" />
          <Input label="Sort Order" type="number" value={form.sort_order} onChange={(e) => set('sort_order', +e.target.value)} />
        </div>
        <Select
          label="Team Member"
          value={form.team_member_id}
          onChange={(e) => set('team_member_id', e.target.value || null)}
          options={teamMembers.map((m) => ({ value: m.id, label: m.name }))}
        />
      </div>
    </div>
  );
}

