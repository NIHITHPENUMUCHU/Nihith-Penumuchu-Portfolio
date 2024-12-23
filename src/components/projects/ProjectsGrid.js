import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
export function ProjectsGrid({ projects }) {
    return (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: projects.map((project, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: index * 0.1 }, children: _jsx(ProjectCard, { project: project }) }, project.title))) }));
}
