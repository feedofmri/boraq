import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';

export default function PageHeader({ title, backTo, onSave, saving }) {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        {backTo && (
          <button onClick={() => navigate(backTo)} className="p-2 rounded-lg hover:bg-surface-hover text-text-secondary transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
        )}
        <h1 className="text-2xl font-bold text-text-primary">{title}</h1>
      </div>
      {onSave && (
        <button
          onClick={onSave}
          disabled={saving}
          className="flex items-center gap-2 px-5 py-2.5 bg-accent text-white rounded-lg text-sm font-semibold hover:bg-accent-hover transition-colors disabled:opacity-50"
        >
          <Save className="w-4 h-4" />
          {saving ? 'Saving...' : 'Save'}
        </button>
      )}
    </div>
  );
}

