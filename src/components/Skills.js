import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Code2, Database, Globe, GitBranch, Terminal, Cpu, Layout, Wrench } from 'lucide-react';
export function Skills() {
    const skills = [
        {
            name: "Frontend Development",
            icon: Layout,
            description: "Building responsive and interactive user interfaces with modern frameworks",
            technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
        },
        {
            name: "Backend Development",
            icon: Terminal,
            description: "Creating scalable server-side applications and RESTful APIs",
            technologies: ["Node.js", "Express", "Python", "FastAPI"]
        },
        {
            name: "Database Management",
            icon: Database,
            description: "Designing and optimizing database schemas and queries",
            technologies: ["MongoDB", "PostgreSQL", "Redis", "Firebase"]
        },
        {
            name: "Web Technologies",
            icon: Globe,
            description: "Proficient in core web technologies and modern standards",
            technologies: ["HTML5", "CSS3", "JavaScript", "Web APIs"]
        },
        {
            name: "Version Control",
            icon: GitBranch,
            description: "Experienced in collaborative development and code management",
            technologies: ["Git", "GitHub", "GitLab", "CI/CD"]
        },
        {
            name: "Development Tools",
            icon: Wrench,
            description: "Utilizing modern development tools and practices",
            technologies: ["VS Code", "Docker", "Webpack", "npm/yarn"]
        },
        {
            name: "Programming Languages",
            icon: Code2,
            description: "Strong foundation in multiple programming paradigms",
            technologies: ["JavaScript", "TypeScript", "Python", "Java"]
        },
        {
            name: "System Architecture",
            icon: Cpu,
            description: "Designing scalable and maintainable system architectures",
            technologies: ["Microservices", "REST", "GraphQL", "AWS"]
        }
    ];
    return (_jsx("section", { className: "py-20 px-6", id: "skills", children: _jsxs("div", { className: "container mx-auto", children: [_jsx(motion.h2, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, className: "text-4xl font-bold mb-12 text-center", children: "Skills & Expertise" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: index * 0.1 }, className: "bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors group", children: [_jsxs("div", { className: "flex items-center gap-4 mb-4", children: [_jsx("div", { className: "p-3 bg-emerald-400/10 rounded-lg group-hover:bg-emerald-400/20 transition-colors", children: _jsx(Icon, { className: "w-6 h-6 text-emerald-400" }) }), _jsx("h3", { className: "text-xl font-semibold", children: skill.name })] }), _jsx("p", { className: "text-gray-400 mb-4", children: skill.description }), _jsx("div", { className: "flex flex-wrap gap-2", children: skill.technologies.map((tech) => (_jsx("span", { className: "px-3 py-1 bg-emerald-400/10 text-emerald-400 text-sm rounded-full", children: tech }, tech))) })] }, skill.name));
                    }) })] }) }));
}
