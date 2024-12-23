import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
export function ProjectSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const projectsPerView = 2;
    const totalSlides = Math.ceil(projects.length / projectsPerView);
    const paginate = (direction) => {
        if (isAnimating)
            return;
        setIsAnimating(true);
        const newIndex = (currentIndex + direction + totalSlides) % totalSlides;
        setCurrentIndex(newIndex);
        // Reset animation lock after transition
        setTimeout(() => setIsAnimating(false), 500);
    };
    const getVisibleProjects = () => {
        const start = currentIndex * projectsPerView;
        return projects.slice(start, start + projectsPerView);
    };
    return (_jsx("section", { className: "py-20 px-6 bg-gray-800", id: "projects", children: _jsxs("div", { className: "container mx-auto", children: [_jsx("h2", { className: "text-4xl font-bold mb-12 text-center", children: "Projects" }), _jsxs("div", { className: "relative max-w-6xl mx-auto", children: [_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: _jsx(AnimatePresence, { mode: "wait", children: getVisibleProjects().map((project, index) => (_jsxs(motion.div, { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -50 }, transition: { duration: 0.3 }, className: "bg-gray-900 rounded-xl overflow-hidden h-full", children: [_jsxs("div", { className: "relative h-64", children: [_jsx("img", { src: project.image, alt: project.title, className: "w-full h-full object-cover" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" })] }), _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-2xl font-bold mb-3", children: project.title }), _jsx("p", { className: "text-gray-400 mb-4", children: project.description }), _jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: project.tags.map((tag, tagIndex) => (_jsx("span", { className: "bg-emerald-400/10 text-emerald-400 px-3 py-1 rounded-full text-sm", children: tag }, tagIndex))) }), _jsxs("div", { className: "flex gap-4", children: [_jsxs("a", { href: project.github, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-2 px-4 py-2 bg-emerald-400 text-gray-900 rounded-lg hover:bg-emerald-500 transition-colors", children: [_jsx(Github, { size: 18 }), "View Code"] }), _jsxs("a", { href: project.live, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors", children: [_jsx(ExternalLink, { size: 18 }), "Live Demo"] })] })] })] }, `${currentIndex}-${index}`))) }) }), _jsx("button", { onClick: () => paginate(-1), disabled: isAnimating, className: "absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-emerald-400/20 hover:bg-emerald-400/30 rounded-full flex items-center justify-center transition-colors z-10 disabled:opacity-50", "aria-label": "Previous projects", children: _jsx(ChevronLeft, { className: "w-6 h-6 text-emerald-400" }) }), _jsx("button", { onClick: () => paginate(1), disabled: isAnimating, className: "absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-emerald-400/20 hover:bg-emerald-400/30 rounded-full flex items-center justify-center transition-colors z-10 disabled:opacity-50", "aria-label": "Next projects", children: _jsx(ChevronRight, { className: "w-6 h-6 text-emerald-400" }) }), _jsx("div", { className: "flex justify-center gap-2 mt-6", children: Array.from({ length: totalSlides }).map((_, index) => (_jsx("button", { onClick: () => {
                                    if (!isAnimating) {
                                        setIsAnimating(true);
                                        setCurrentIndex(index);
                                        setTimeout(() => setIsAnimating(false), 500);
                                    }
                                }, className: `w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-emerald-400' : 'bg-gray-600'}`, "aria-label": `Go to projects ${index + 1}` }, index))) })] })] }) }));
}
