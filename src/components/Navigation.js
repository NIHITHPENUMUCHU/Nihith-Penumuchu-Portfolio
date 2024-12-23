import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollToSection } from '../hooks/useScrollToSection';
export function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const scrollToSection = useScrollToSection();
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const handleNavClick = (sectionId) => {
        toggleMenu();
        scrollToSection(sectionId);
    };
    return (_jsx(motion.nav, { initial: { y: -100 }, animate: { y: 0 }, className: "fixed w-full top-0 bg-gray-900/80 backdrop-blur-sm z-50", children: _jsx("div", { className: "container mx-auto px-6 py-4", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx(motion.button, { onClick: () => scrollToSection('home'), whileHover: { scale: 1.1 }, className: "text-2xl font-bold text-emerald-400 cursor-pointer", children: "Portfolio" }), _jsx("button", { onClick: toggleMenu, className: "md:hidden text-white", children: isMenuOpen ? _jsx(X, { size: 24 }) : _jsx(Menu, { size: 24 }) }), _jsxs("div", { className: "hidden md:flex items-center gap-8", children: [_jsx("button", { onClick: () => scrollToSection('home'), className: "hover:text-emerald-400 transition-colors", children: "Home" }), _jsx("button", { onClick: () => scrollToSection('about'), className: "hover:text-emerald-400 transition-colors", children: "About" }), _jsx("button", { onClick: () => scrollToSection('skills'), className: "hover:text-emerald-400 transition-colors", children: "Skills" }), _jsx("button", { onClick: () => scrollToSection('services'), className: "hover:text-emerald-400 transition-colors", children: "Services" }), _jsx("button", { onClick: () => scrollToSection('projects'), className: "hover:text-emerald-400 transition-colors", children: "Projects" }), _jsx("button", { onClick: () => scrollToSection('contact'), className: "hover:text-emerald-400 transition-colors", children: "Contact" }), _jsxs(Link, { to: "/resume", className: "flex items-center gap-2 px-4 py-2 bg-emerald-400 text-gray-900 rounded-lg hover:bg-emerald-500 transition-colors", children: [_jsx(FileText, { size: 18 }), "Resume"] })] }), _jsx(motion.div, { initial: { opacity: 0, height: 0 }, animate: {
                            opacity: isMenuOpen ? 1 : 0,
                            height: isMenuOpen ? 'auto' : 0
                        }, className: "absolute top-full left-0 right-0 bg-gray-900/95 md:hidden overflow-hidden", children: _jsxs("div", { className: "flex flex-col items-center gap-4 py-6", children: [_jsx("button", { onClick: () => handleNavClick('home'), className: "hover:text-emerald-400 transition-colors", children: "Home" }), _jsx("button", { onClick: () => handleNavClick('about'), className: "hover:text-emerald-400 transition-colors", children: "About" }), _jsx("button", { onClick: () => handleNavClick('skills'), className: "hover:text-emerald-400 transition-colors", children: "Skills" }), _jsx("button", { onClick: () => handleNavClick('services'), className: "hover:text-emerald-400 transition-colors", children: "Services" }), _jsx("button", { onClick: () => handleNavClick('projects'), className: "hover:text-emerald-400 transition-colors", children: "Projects" }), _jsx("button", { onClick: () => handleNavClick('contact'), className: "hover:text-emerald-400 transition-colors", children: "Contact" }), _jsxs(Link, { to: "/resume", onClick: toggleMenu, className: "flex items-center gap-2 px-4 py-2 bg-emerald-400 text-gray-900 rounded-lg hover:bg-emerald-500 transition-colors", children: [_jsx(FileText, { size: 18 }), "Resume"] })] }) })] }) }) }));
}
