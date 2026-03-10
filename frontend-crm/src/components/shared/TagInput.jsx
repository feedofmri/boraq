import { Plus, X } from 'lucide-react';
import { useState } from 'react';

export default function TagInput({ label, tags = [], onChange }) {
  const [input, setInput] = useState('');

  const addTag = () => {
    const trimmed = input.trim();
    if (trimmed && !tags.includes(trimmed)) {
      onChange([...tags, trimmed]);
    }
    setInput('');
  };

  const removeTag = (index) => {
    onChange(tags.filter((_, i) => i !== index));
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-text-secondary mb-1.5">{label}</label>
      <div className="flex flex-wrap gap-2 mb-2">
        {tags.map((tag, i) => (
          <span key={i} className="inline-flex items-center gap-1 px-2.5 py-1 bg-accent-bg text-accent rounded-full text-xs font-medium">
            {tag}
            <button type="button" onClick={() => removeTag(i)} className="hover:text-danger">
              <X className="w-3 h-3" />
            </button>
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addTag(); } }}
          placeholder="Type and press Enter..."
          className="flex-1 px-3 py-2 text-sm bg-surface-elevated border border-surface-border text-text-primary rounded-lg placeholder-text-muted"
        />
        <button type="button" onClick={addTag} className="px-3 py-2 bg-surface-hover rounded-lg text-text-secondary hover:bg-accent-bg hover:text-accent transition-colors">
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

