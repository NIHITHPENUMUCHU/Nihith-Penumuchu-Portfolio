import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { ProjectsGrid } from './ProjectsGrid';
import { ProjectsSlider } from './ProjectsSlider';
import { projects } from '../../data/projects';
import { useMediaQuery } from '../../hooks/useMediaQuery';
export function Projects() {
    const isMobile = useMediaQuery('(max-width: 768px)');
    return (_jsx("section", { className: "py-20 px-6 bg-gray-900", id: "projects", children: _jsxs("div", { className: "container mx-auto", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, className: "text-center mb-12", children: [_jsx("h2", { className: "text-4xl font-bold mb-4", children: "Featured Projects" }), _jsx("p", { className: "text-gray-400 max-w-2xl mx-auto", children: "Explore my latest work and personal projects. Each project demonstrates my skills in different areas of web development." })] }), isMobile ? (_jsx(ProjectsSlider, { projects: projects })) : (_jsx(ProjectsGrid, { projects: projects }))] }) }));
}
