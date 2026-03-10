import { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';
import api from '../api/client';

const NotificationContext = createContext(null);

let toastId = 0;

export function NotificationProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const prevCounts = useRef(null);

  const addToast = useCallback((message, type = 'info') => {
    const id = ++toastId;
    setToasts((prev) => [...prev, { id, message, type, exiting: false }]);
    // Auto-dismiss after 5s
    setTimeout(() => {
      setToasts((prev) =>
        prev.map((t) => (t.id === id ? { ...t, exiting: true } : t))
      );
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 300);
    }, 5000);
  }, []);

  const dismissToast = useCallback((id) => {
    setToasts((prev) =>
      prev.map((t) => (t.id === id ? { ...t, exiting: true } : t))
    );
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 300);
  }, []);

  // Poll for new submissions every 30 seconds
  useEffect(() => {
    const token = localStorage.getItem('boraq_token');
    if (!token) return;

    const processData = (data) => {
      // backend now exposes explicit "New" counts for unread notifications
      const newContacts = data.contactSubmissionsNew ?? data.contactSubmissions ?? 0;
      const newBookings = data.callBookingsNew ?? data.callBookings ?? 0;
      const total = newContacts + newBookings;

      if (prevCounts.current !== null) {
        if (newContacts > prevCounts.current.contacts) {
          const diff = newContacts - prevCounts.current.contacts;
          addToast(`${diff} new contact submission${diff > 1 ? 's' : ''}!`, 'contact');
        }
        if (newBookings > prevCounts.current.bookings) {
          const diff = newBookings - prevCounts.current.bookings;
          addToast(`${diff} new call booking${diff > 1 ? 's' : ''}!`, 'booking');
        }
      }

      prevCounts.current = { contacts: newContacts, bookings: newBookings };
      setUnreadCount(total);
    };

    const checkNew = async () => {
      try {
        const res = await api.get('/dashboard');
        processData(res.data);
      } catch {
        // Silently fail
      }
    };

    checkNew();
    const interval = setInterval(checkNew, 30000);
    return () => clearInterval(interval);
  }, [addToast]);

  // Expose a manual refresh function so other components can trigger immediate unread count refresh
  const refreshUnread = async () => {
    try {
      const res = await api.get('/dashboard');
      const data = res.data;
      const newContacts = data.contactSubmissionsNew ?? data.contactSubmissions ?? 0;
      const newBookings = data.callBookingsNew ?? data.callBookings ?? 0;
      setUnreadCount(newContacts + newBookings);
      prevCounts.current = { contacts: newContacts, bookings: newBookings };
    } catch {
      // ignore
    }
  };

  return (
    <NotificationContext.Provider value={{ toasts, addToast, dismissToast, unreadCount, refreshUnread }}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  return useContext(NotificationContext);
}
