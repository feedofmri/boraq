import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-all duration-300 ease-in-out hover:bg-black/5 dark:hover:bg-white/10 text-black dark:text-white"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-boraq-cyan" />
            ) : (
                <Moon className="w-5 h-5" />
            )}
        </button>
    );
}
