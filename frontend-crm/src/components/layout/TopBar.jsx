import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import { useNotifications } from '../../contexts/NotificationContext';
import { LogOut, User, Sun, Moon, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TopBar() {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { unreadCount } = useNotifications();

  return (
    <header className="h-16 bg-surface-card border-b border-surface-border flex items-center justify-between px-6 sticky top-0 z-40 transition-colors">
      <div />
      <div className="flex items-center gap-3">
        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="relative w-9 h-9 rounded-lg flex items-center justify-center hover:bg-surface-hover text-text-secondary hover:text-text-primary transition-colors"
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
        </button>

        {/* Notification bell */}
        <Link
          to="/contact-submissions"
          className="relative w-9 h-9 rounded-lg flex items-center justify-center hover:bg-surface-hover text-text-secondary hover:text-text-primary transition-colors"
          title="Inbox"
        >
          <Bell className="w-[18px] h-[18px]" />
          {unreadCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 flex items-center justify-center bg-red-500 text-white text-[10px] font-bold rounded-full leading-none">
              {unreadCount > 99 ? '99+' : unreadCount}
            </span>
          )}
        </Link>

        <div className="w-px h-6 bg-surface-border mx-1" />

        {/* User */}
        <span className="text-sm text-text-secondary flex items-center gap-2">
          <User className="w-4 h-4" />
          {user?.name || 'Admin'}
        </span>
        <button
          onClick={logout}
          className="flex items-center gap-1.5 text-sm text-text-muted hover:text-danger transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </header>
  );
}

