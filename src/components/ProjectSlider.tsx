import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

export function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const projectsPerView = 2;
  const totalSlides = Math.ceil(projects.length / projectsPerView);

  const paginate = (direction: number) => {
    if (isAnimating) return;
    
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

  return (
    <section className="py-20 px-6 bg-gray-800" id="projects">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="wait">
              {getVisibleProjects().map((project, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-900 rounded-xl overflow-hidden h-full"
                >
                  <div className="relative h-64">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="bg-emerald-400/10 text-emerald-400 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-emerald-400 text-gray-900 rounded-lg hover:bg-emerald-500 transition-colors"
                      >
                        <Github size={18} />
                        View Code
                      </a>
                      <a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <button
            onClick={() => paginate(-1)}
            disabled={isAnimating}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-emerald-400/20 hover:bg-emerald-400/30 rounded-full flex items-center justify-center transition-colors z-10 disabled:opacity-50"
            aria-label="Previous projects"
          >
            <ChevronLeft className="w-6 h-6 text-emerald-400" />
          </button>

          <button
            onClick={() => paginate(1)}
            disabled={isAnimating}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-emerald-400/20 hover:bg-emerald-400/30 rounded-full flex items-center justify-center transition-colors z-10 disabled:opacity-50"
            aria-label="Next projects"
          >
            <ChevronRight className="w-6 h-6 text-emerald-400" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-emerald-400' : 'bg-gray-600'
                }`}
                aria-label={`Go to projects ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}