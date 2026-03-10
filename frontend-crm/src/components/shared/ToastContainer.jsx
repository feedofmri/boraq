import { useNotifications } from '../../contexts/NotificationContext';
import { X, Mail, Phone, Info } from 'lucide-react';

const iconMap = {
  contact: Mail,
  booking: Phone,
  info: Info,
};

const colorMap = {
  contact: 'border-blue-500/30 bg-blue-500/10',
  booking: 'border-green-500/30 bg-green-500/10',
  info: 'border-accent/30 bg-accent-bg',
};

const iconColorMap = {
  contact: 'text-blue-400',
  booking: 'text-green-400',
  info: 'text-accent',
};

export default function ToastContainer() {
  const { toasts, dismissToast } = useNotifications();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-20 right-6 z-[100] flex flex-col gap-3 max-w-sm">
      {toasts.map((toast) => {
        const Icon = iconMap[toast.type] || Info;
        return (
          <div
            key={toast.id}
            className={`${toast.exiting ? 'toast-exit' : 'toast-enter'} 
              flex items-start gap-3 px-4 py-3 rounded-xl border shadow-lg backdrop-blur-sm
              ${colorMap[toast.type] || colorMap.info}
              bg-surface-card/95`}
          >
            <Icon className={`w-5 h-5 mt-0.5 shrink-0 ${iconColorMap[toast.type] || 'text-accent'}`} />
            <p className="text-sm text-text-primary font-medium flex-1">{toast.message}</p>
            <button
              onClick={() => dismissToast(toast.id)}
              className="text-text-muted hover:text-text-primary transition-colors shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
}

