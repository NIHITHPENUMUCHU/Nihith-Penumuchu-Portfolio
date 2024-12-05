import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 bg-gray-900/80 backdrop-blur-sm z-50"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.span
            whileHover={{ scale: 1.1 }}
            className="text-2xl font-bold text-emerald-400"
          >
            Portfolio
          </motion.span>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="hover:text-emerald-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#services" className="hover:text-emerald-400 transition-colors">Services</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>

          {/* Mobile Menu */}
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isMenuOpen ? 1 : 0,
              height: isMenuOpen ? 'auto' : 0
            }}
            className="absolute top-full left-0 right-0 bg-gray-900/95 md:hidden overflow-hidden"
          >
            <div className="flex flex-col items-center gap-4 py-6">
              <a href="#home" onClick={toggleMenu} className="hover:text-emerald-400 transition-colors">Home</a>
              <a href="#about" onClick={toggleMenu} className="hover:text-emerald-400 transition-colors">About</a>
              <a href="#skills" onClick={toggleMenu} className="hover:text-emerald-400 transition-colors">Skills</a>
              <a href="#services" onClick={toggleMenu} className="hover:text-emerald-400 transition-colors">Services</a>
              <a href="#projects" onClick={toggleMenu} className="hover:text-emerald-400 transition-colors">Projects</a>
              <a href="#contact" onClick={toggleMenu} className="hover:text-emerald-400 transition-colors">Contact</a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}