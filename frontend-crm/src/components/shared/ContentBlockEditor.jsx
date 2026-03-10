import { Plus, Trash2, GripVertical } from 'lucide-react';

const BLOCK_TYPES = [
  { value: 'text', label: 'Text' },
  { value: 'heading', label: 'Heading' },
  { value: 'quote', label: 'Quote' },
  { value: 'list', label: 'List' },
];

export default function ContentBlockEditor({ blocks = [], onChange }) {
  const addBlock = () => {
    onChange([...blocks, { type: 'text', content: '' }]);
  };

  const updateBlock = (index, field, value) => {
    const updated = [...blocks];
    updated[index] = { ...updated[index], [field]: value };
    if (field === 'type' && value === 'list' && typeof updated[index].content === 'string') {
      updated[index].content = updated[index].content ? updated[index].content.split('\n') : [''];
    } else if (field === 'type' && value !== 'list' && Array.isArray(updated[index].content)) {
      updated[index].content = updated[index].content.join('\n');
    }
    onChange(updated);
  };

  const removeBlock = (index) => {
    onChange(blocks.filter((_, i) => i !== index));
  };

  const moveBlock = (from, to) => {
    if (to < 0 || to >= blocks.length) return;
    const updated = [...blocks];
    const [item] = updated.splice(from, 1);
    updated.splice(to, 0, item);
    onChange(updated);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-text-secondary mb-2">Content Blocks</label>
      <div className="space-y-3">
        {blocks.map((block, i) => (
          <div key={i} className="flex gap-2 bg-surface-elevated p-3 rounded-lg border border-surface-border">
            <div className="flex flex-col gap-1 pt-1">
              <button type="button" onClick={() => moveBlock(i, i - 1)} className="text-text-muted hover:text-text-secondary" title="Move up">▲</button>
              <GripVertical className="w-4 h-4 text-text-muted" />
              <button type="button" onClick={() => moveBlock(i, i + 1)} className="text-text-muted hover:text-text-secondary" title="Move down">▼</button>
            </div>
            <div className="flex-1">
              <select
                value={block.type}
                onChange={(e) => updateBlock(i, 'type', e.target.value)}
                className="w-full px-2 py-1.5 text-xs bg-surface-card border border-surface-border text-text-primary rounded-md mb-2"
              >
                {BLOCK_TYPES.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
              {block.type === 'list' ? (
                <textarea
                  value={Array.isArray(block.content) ? block.content.join('\n') : block.content}
                  onChange={(e) => updateBlock(i, 'content', e.target.value.split('\n'))}
                  rows={4}
                  placeholder="One item per line..."
                  className="w-full px-2 py-1.5 text-sm bg-surface-card border border-surface-border text-text-primary rounded-md placeholder-text-muted resize-y"
                />
              ) : (
                <textarea
                  value={block.content || ''}
                  onChange={(e) => updateBlock(i, 'content', e.target.value)}
                  rows={block.type === 'heading' ? 1 : 3}
                  placeholder={block.type === 'heading' ? 'Heading text...' : block.type === 'quote' ? 'Quote text...' : 'Paragraph text...'}
                  className="w-full px-2 py-1.5 text-sm bg-surface-card border border-surface-border text-text-primary rounded-md placeholder-text-muted resize-y"
                />
              )}
            </div>
            <button
              type="button"
              onClick={() => removeBlock(i)}
              className="p-1 text-text-muted hover:text-danger self-start mt-1"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={addBlock}
        className="mt-3 flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover font-medium"
      >
        <Plus className="w-4 h-4" /> Add Block
      </button>
    </div>
  );
}
