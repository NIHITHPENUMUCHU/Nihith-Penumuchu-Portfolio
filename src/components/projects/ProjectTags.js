import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from 'framer-motion';
export function ProjectTags({ tags }) {
    return (_jsx("div", { className: "flex flex-wrap gap-2", children: tags.map((tag, index) => (_jsx(motion.span, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { delay: index * 0.1 }, className: "px-3 py-1 bg-emerald-400/10 text-emerald-400 text-sm rounded-full", children: tag }, tag))) }));
}
