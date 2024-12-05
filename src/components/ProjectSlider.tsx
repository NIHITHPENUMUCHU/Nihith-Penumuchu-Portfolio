import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

export function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-20 px-6 bg-gray-800" id="projects">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="relative h-[500px] md:h-[550px] overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="h-full bg-gray-900 rounded-xl overflow-hidden">
                  <div className="relative h-1/2">
                    <img 
                      src={projects[currentIndex].image} 
                      alt={projects[currentIndex].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold mb-3">{projects[currentIndex].title}</h3>
                    <p className="text-gray-400 mb-4 text-sm md:text-base">{projects[currentIndex].description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {projects[currentIndex].tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="bg-emerald-400/10 text-emerald-400 px-3 py-1 rounded-full text-xs md:text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a 
                        href={projects[currentIndex].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-emerald-400 text-gray-900 rounded-lg hover:bg-emerald-500 transition-colors text-sm md:text-base"
                      >
                        <Github size={18} />
                        View Code
                      </a>
                      <a 
                        href={projects[currentIndex].live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors text-sm md:text-base"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-emerald-400/20 hover:bg-emerald-400/30 rounded-full flex items-center justify-center transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6 text-emerald-400" />
          </button>

          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-emerald-400/20 hover:bg-emerald-400/30 rounded-full flex items-center justify-center transition-colors"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6 text-emerald-400" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-emerald-400' : 'bg-gray-600'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}