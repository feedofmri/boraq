import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-all duration-300 ease-in-out hover:bg-boraq-black/5 dark:hover:bg-boraq-white/10 text-boraq-black dark:text-boraq-white"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-[#AFD7E2]" />
            ) : (
                <Moon className="w-5 h-5 text-[#313334]" />
            )}
        </button>
    );
}
