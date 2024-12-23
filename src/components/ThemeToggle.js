import { jsx as _jsx } from "react/jsx-runtime";
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
export function ThemeToggle({ isDark, toggleTheme }) {
    return (_jsx(motion.button, { whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, onClick: toggleTheme, className: "p-2 rounded-full bg-gray-800 dark:bg-gray-100", children: isDark ? (_jsx(Sun, { className: "w-6 h-6 text-yellow-500" })) : (_jsx(Moon, { className: "w-6 h-6 text-gray-900" })) }));
}
