import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { Project } from '../../types/project';
import { useSwipeable } from '../../hooks/useSwipeable';

interface ProjectsSliderProps {
  projects: Project[];
}

const slideVariants = {
  enter: (direction: number) => ({
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
  exit: (direction: number) => ({
    x: direction < 0 ? '-100%' : '100%',
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.3,
      ease: [0.4, 0.0, 0.2, 1]
    }
  })
};

export function ProjectsSlider({ projects }: ProjectsSliderProps) {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const paginate = useCallback((newDirection: number) => {
    if (isAnimating) return;
    
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

  // Updated event type
  const onTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    // You can handle touch start here if needed
    const touchStart = e.changedTouches[0].clientX;
  };

  const onTouchEnd: React.TouchEventHandler<HTMLDivElement> = (e) => {
    const touchStart = e.changedTouches[0].clientX;
    const touchEnd = e.changedTouches[0].clientX;

    if (touchStart - touchEnd > 150) paginate(1);
    if (touchEnd - touchStart > 150) paginate(-1);
  };

  return (
    <div
      className="relative select-none"
      {...swipeHandlers}
      onTouchStart={onTouchStart}  // Set the event handler here
      onTouchEnd={onTouchEnd}
    >
      <div className="overflow-hidden">
        <AnimatePresence
          initial={false}
          custom={direction}
          mode="wait"
        >
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -100) paginate(1);
              if (swipe > 100) paginate(-1);
            }}
          >
            <ProjectCard project={projects[page]} />
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => paginate(-1)}
        disabled={isAnimating}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-emerald-400/20 hover:bg-emerald-400/30 rounded-full flex items-center justify-center transition-colors z-10 disabled:opacity-50"
        aria-label="Previous project"
      >
        <ChevronLeft className="w-6 h-6 text-emerald-400" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => paginate(1)}
        disabled={isAnimating}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-emerald-400/20 hover:bg-emerald-400/30 rounded-full flex items-center justify-center transition-colors z-10 disabled:opacity-50"
        aria-label="Next project"
      >
        <ChevronRight className="w-6 h-6 text-emerald-400" />
      </motion.button>

      <div className="flex justify-center gap-2 mt-6">
        {projects.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              if (!isAnimating) {
                const newDirection = index > page ? 1 : -1;
                setPage([index, newDirection]);
                setIsAnimating(true);
                setTimeout(() => setIsAnimating(false), 400);
              }
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === page ? 'bg-emerald-400' : 'bg-gray-600'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
