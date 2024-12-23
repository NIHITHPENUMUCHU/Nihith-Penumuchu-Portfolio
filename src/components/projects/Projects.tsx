import React from 'react';
import { motion } from 'framer-motion';
import { ProjectsGrid } from './ProjectsGrid';
import { ProjectsSlider } from './ProjectsSlider';
import { projects } from '../../data/projects';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export function Projects() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section className="py-20 px-6 bg-gray-900" id="projects">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my latest work and personal projects. Each project demonstrates my skills
            in different areas of web development.
          </p>
        </motion.div>

        {isMobile ? (
          <ProjectsSlider projects={projects} />
        ) : (
          <ProjectsGrid projects={projects} />
        )}
      </div>
    </section>
  );
}