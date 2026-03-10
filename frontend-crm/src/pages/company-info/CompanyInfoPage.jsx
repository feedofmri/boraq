import { useState, useEffect } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import PageHeader from '../../components/shared/PageHeader';
import api from '../../api/client';

export default function CompanyInfoPage() {
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.get('/company-info').then((res) => {
      setItems(Array.isArray(res.data) ? res.data : Object.entries(res.data).map(([key, value]) => ({ key, value })));
    }).finally(() => setLoading(false));
  }, []);

  const addItem = () => setItems([...items, { key: '', value: '' }]);
  const removeItem = (i) => setItems(items.filter((_, idx) => idx !== i));
  const updateItem = (i, field, val) => {
    const updated = [...items];
    updated[i] = { ...updated[i], [field]: val };
    setItems(updated);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await api.put('/company-info', { items: items.filter((i) => i.key) });
      alert('Saved!');
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    } finally { setSaving(false); }
  };

  if (loading) return <div className="text-center py-12 text-text-muted">Loading...</div>;

  return (
    <div>
      <PageHeader title="Company Info" onSave={handleSave} saving={saving} />
      <div className="bg-surface-card rounded-xl border border-surface-border p-6 max-w-3xl">
        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="flex gap-3 items-start">
              <input
                value={item.key}
                onChange={(e) => updateItem(i, 'key', e.target.value)}
                placeholder="Key (e.g. whatsapp)"
                className="w-48 px-3 py-2 text-sm bg-surface-elevated border border-surface-border text-text-primary rounded-lg placeholder-text-muted"
              />
              <input
                value={item.value}
                onChange={(e) => updateItem(i, 'value', e.target.value)}
                placeholder="Value"
                className="flex-1 px-3 py-2 text-sm bg-surface-elevated border border-surface-border text-text-primary rounded-lg placeholder-text-muted"
              />
              <button onClick={() => removeItem(i)} className="p-2 text-text-muted hover:text-danger">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
        <button onClick={addItem} className="mt-4 flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover font-medium">
          <Plus className="w-4 h-4" /> Add Entry
        </button>
      </div>
    </div>
  );
}

