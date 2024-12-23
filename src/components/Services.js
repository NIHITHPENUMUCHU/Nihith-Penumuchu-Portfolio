import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Code2, Palette, Globe } from 'lucide-react';
export function Services() {
    const services = [
        {
            icon: _jsx(Code2, { size: 40 }),
            title: "Web Development",
            description: "Creating responsive and dynamic web applications using modern technologies and best practices."
        },
        {
            icon: _jsx(Palette, { size: 40 }),
            title: "UI/UX Design",
            description: "Designing intuitive and beautiful user interfaces with focus on user experience and accessibility."
        },
        {
            icon: _jsx(Globe, { size: 40 }),
            title: "Front-end Development",
            description: "End-to-end development from database design to frontend implementation."
        }
    ];
    return (_jsx("section", { className: "py-20 px-6", id: "services", children: _jsxs("div", { className: "container mx-auto", children: [_jsx("h2", { className: "text-4xl font-bold mb-12 text-center", children: "Services" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: services.map((service, index) => (_jsxs("div", { className: "bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors", children: [_jsx("div", { className: "text-emerald-400 mb-4", children: service.icon }), _jsx("h3", { className: "text-xl font-bold mb-4", children: service.title }), _jsx("p", { className: "text-gray-400", children: service.description })] }, index))) })] }) }));
}
