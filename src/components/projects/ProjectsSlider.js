import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { useSwipeable } from '../../hooks/useSwipeable';
const slideVariants = {
    enter: (direction) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0,
        scale: 0.95
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3,
            ease: [0.4, 0.0, 0.2, 1]
        }
    },
    exit: (direction) => ({
        x: direction < 0 ? '-100%' : '100%',
        opacity: 0,
        scale: 0.95,
        transition: {
            duration: 0.3,
            ease: [0.4, 0.0, 0.2, 1]
        }
    })
};
export function ProjectsSlider({ projects }) {
    const [[page, direction], setPage] = useState([0, 0]);
    const [isAnimating, setIsAnimating] = useState(false);
    const paginate = useCallback((newDirection) => {
        if (isAnimating)
            return;
        setIsAnimating(true);
        setPage(([currentPage]) => {
            const nextPage = (currentPage + newDirection + projects.length) % projects.length;
            return [nextPage, newDirection];
        });
        setTimeout(() => setIsAnimating(false), 400);
    }, [projects.length, isAnimating]);
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => paginate(1),
        onSwipedRight: () => paginate(-1)
    });
    return (_jsxs("div", { className: "relative select-none", ...swipeHandlers, children: [_jsx("div", { className: "overflow-hidden", children: _jsx(AnimatePresence, { initial: false, custom: direction, mode: "wait", children: _jsx(motion.div, { custom: direction, variants: slideVariants, initial: "enter", animate: "center", exit: "exit", className: "w-full", drag: "x", dragConstraints: { left: 0, right: 0 }, dragElastic: 1, onDragEnd: (_, { offset, velocity }) => {
                            const swipe = Math.abs(offset.x) * velocity.x;
                            if (swipe < -100)
                                paginate(1);
                            if (swipe > 100)
                                paginate(-1);
                        }, children: _jsx(ProjectCard, { project: projects[page] }) }, page) }) }), _jsx(motion.button, { whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, onClick: () => paginate(-1), disabled: isAnimating, className: "absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-emerald-400/20 hover:bg-emerald-400/30 rounded-full flex items-center justify-center transition-colors z-10 disabled:opacity-50", "aria-label": "Previous project", children: _jsx(ChevronLeft, { className: "w-6 h-6 text-emerald-400" }) }), _jsx(motion.button, { whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, onClick: () => paginate(1), disabled: isAnimating, className: "absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-emerald-400/20 hover:bg-emerald-400/30 rounded-full flex items-center justify-center transition-colors z-10 disabled:opacity-50", "aria-label": "Next project", children: _jsx(ChevronRight, { className: "w-6 h-6 text-emerald-400" }) }), _jsx("div", { className: "flex justify-center gap-2 mt-6", children: projects.map((_, index) => (_jsx(motion.button, { whileHover: { scale: 1.2 }, whileTap: { scale: 0.9 }, onClick: () => {
                        if (!isAnimating) {
                            const newDirection = index > page ? 1 : -1;
                            setPage([index, newDirection]);
                            setIsAnimating(true);
                            setTimeout(() => setIsAnimating(false), 400);
                        }
                    }, className: `w-2 h-2 rounded-full transition-colors ${index === page ? 'bg-emerald-400' : 'bg-gray-600'}`, "aria-label": `Go to project ${index + 1}` }, index))) })] }));
}
