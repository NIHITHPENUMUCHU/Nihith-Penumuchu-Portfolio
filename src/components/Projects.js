import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function Projects() {
    const projects = [
        {
            title: "3D Racing Game",
            description: "A small 3D racing made using JavaScript. use Arrow to move. c - camera change;",
            image: "https://drive.google.com/file/d/1HFvIt0CO701e6A9rVIIkRirSa0TMiwyA/view?usp=sharing",
            tags: ["JavaScript"]
        },
        {
            title: "Portfolio Website",
            description: "A modern portfolio website showcasing my work and skills",
            image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80",
            tags: ["React", "Tailwind", "TypeScript"]
        },
        {
            title: "Task Management App",
            description: "A collaborative task management application with real-time updates",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
            tags: ["Vue.js", "Firebase", "Tailwind"]
        }
    ];
    return (_jsx("section", { className: "py-20 px-6 bg-gray-800", id: "work", children: _jsxs("div", { className: "container mx-auto", children: [_jsx("h2", { className: "text-4xl font-bold mb-12 text-center", children: "Projects" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: projects.map((project, index) => (_jsxs("div", { className: "bg-gray-900 rounded-xl overflow-hidden group", children: [_jsx("div", { className: "relative h-48", children: _jsx("img", { src: project.image, alt: project.title, className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" }) }), _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-xl font-bold mb-2", children: project.title }), _jsx("p", { className: "text-gray-400 mb-4", children: project.description }), _jsx("div", { className: "flex flex-wrap gap-2", children: project.tags.map((tag, tagIndex) => (_jsx("span", { className: "bg-emerald-400/10 text-emerald-400 px-3 py-1 rounded-full text-sm", children: tag }, tagIndex))) })] })] }, index))) })] }) }));
}
