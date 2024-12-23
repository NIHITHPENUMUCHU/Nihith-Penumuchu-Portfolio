import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
export function RotatingCircle() {
    return (_jsxs("div", { className: "absolute inset-0", children: [_jsx(motion.div, { animate: { rotate: 360 }, transition: { duration: 10, repeat: Infinity, ease: "linear" }, className: "w-full h-full rounded-full border-2 border-dashed border-emerald-400/30" }), _jsx(motion.div, { animate: { rotate: -360 }, transition: { duration: 15, repeat: Infinity, ease: "linear" }, className: "absolute inset-4 rounded-full border-2 border-dashed border-emerald-400/20" })] }));
}
