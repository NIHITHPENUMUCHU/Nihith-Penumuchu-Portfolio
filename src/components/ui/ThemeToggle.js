import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
export function ThemeToggle({ isDark, toggleTheme }) {
    return (_jsx(motion.button, { whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, onClick: toggleTheme, className: "p-2 rounded-full bg-gray-800 dark:bg-gray-100 text-white dark:text-gray-900", "aria-label": "Toggle theme", children: isDark ? (_jsx(Sun, { className: "w-6 h-6" })) : (_jsx(Moon, { className: "w-6 h-6" })) }));
}
