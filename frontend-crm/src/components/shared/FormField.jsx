export default function FormField({ label, children, className = '' }) {
  return (
    <div className={`mb-4 ${className}`}>
      {label && <label className="block text-sm font-medium text-text-secondary mb-1.5">{label}</label>}
      {children}
    </div>
  );
}

export function Input({ label, ...props }) {
  return (
    <FormField label={label}>
      <input
        {...props}
        className="w-full px-3 py-2 text-sm bg-surface-elevated border border-surface-border text-text-primary rounded-lg placeholder-text-muted"
      />
    </FormField>
  );
}

export function Textarea({ label, rows = 3, ...props }) {
  return (
    <FormField label={label}>
      <textarea
        rows={rows}
        {...props}
        className="w-full px-3 py-2 text-sm bg-surface-elevated border border-surface-border text-text-primary rounded-lg placeholder-text-muted resize-y"
      />
    </FormField>
  );
}

export function Select({ label, options = [], ...props }) {
  return (
    <FormField label={label}>
      <select
        {...props}
        className="w-full px-3 py-2 text-sm bg-surface-elevated border border-surface-border text-text-primary rounded-lg"
      >
        <option value="">Select...</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </FormField>
  );
}

export function Checkbox({ label, ...props }) {
  return (
    <label className="flex items-center gap-2 mb-4 cursor-pointer">
      <input type="checkbox" {...props} className="w-4 h-4 rounded border-surface-border bg-surface-elevated text-accent accent-accent" />
      <span className="text-sm text-text-secondary">{label}</span>
    </label>
  );
}

