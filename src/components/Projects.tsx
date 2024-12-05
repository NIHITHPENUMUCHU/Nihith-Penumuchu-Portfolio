import React from 'react';

export function Projects() {
  const projects = [
    {
      title: "3D Racing Game",
      description: "A small 3D racing made using JavaScript. use Arrow to move. c - camera change;",
      image: "/3d car racing.png",
      tags: ["JavaScript"]
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website showcasing my work and skills",
      image: "/feastfinder1.png",
      tags: ["React", "Tailwind", "TypeScript"]
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      image: "/SkilBridge1.png",
      tags: ["Vue.js", "Firebase", "Tailwind"]
    }
    {
      title: "Wavelength",
      description: "A collaborative task management application with real-time updates",
      image: "/wavelength1.png",
      tags: ["Vue.js", "Firebase", "Tailwind"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-800" id="work">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-xl overflow-hidden group">
              <div className="relative h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-emerald-400/10 text-emerald-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
