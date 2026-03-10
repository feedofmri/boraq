import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import ToastContainer from '../shared/ToastContainer';

export default function AdminLayout() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface-base">
        <div className="animate-spin w-8 h-8 border-4 border-accent border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!user) return <Navigate to="/login" replace />;

  return (
    <div className="min-h-screen bg-surface-base transition-colors">
      <Sidebar />
      <div className="ml-64">
        <TopBar />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
      <ToastContainer />
    </div>
  );
}

