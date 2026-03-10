import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { Zap, Sun, Moon } from 'lucide-react';

export default function Login() {
  const { user, login } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (user) return <Navigate to="/" replace />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface-base flex items-center justify-center px-4 transition-colors">
      {/* Theme toggle */}
      <button
        onClick={toggleTheme}
        className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-surface-card border border-surface-border flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
        title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Zap className="w-10 h-10 text-accent mx-auto mb-3" />
          <h1 className="text-2xl font-bold text-text-primary">Boraq <span className="text-accent">CRM</span></h1>
          <p className="text-text-muted text-sm mt-1">Sign in to manage your content</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-surface-card rounded-2xl p-8 shadow-xl border border-surface-border">
          {error && (
            <div className="mb-4 p-3 bg-red-500/10 text-red-400 text-sm rounded-lg border border-red-500/20">{error}</div>
          )}
          <div className="mb-4">
            <label className="block text-sm font-medium text-text-secondary mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2.5 text-sm bg-surface-elevated border border-surface-border text-text-primary rounded-lg placeholder-text-muted"
              placeholder="admin@boraq.io"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-text-secondary mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2.5 text-sm bg-surface-elevated border border-surface-border text-text-primary rounded-lg placeholder-text-muted"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-accent text-white rounded-lg font-semibold hover:bg-accent-hover transition-colors disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}

