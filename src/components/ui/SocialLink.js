import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
export function SocialLink({ link }) {
    const Icon = link.icon;
    return (_jsxs(motion.a, { href: link.href, target: "_blank", rel: "noopener noreferrer", whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, className: "flex flex-col items-center gap-4 p-6 bg-gray-800 dark:bg-gray-900 rounded-xl hover:bg-emerald-400/10 transition-colors", children: [_jsx("div", { className: "text-emerald-400 w-8 h-8", children: _jsx(Icon, {}) }), _jsx("span", { className: "text-sm font-medium", children: link.label })] }));
}
