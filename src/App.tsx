import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { ProjectSlider } from './components/ProjectSlider';
import { Contact } from './components/Contact';
import { Background } from './components/Background';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Background />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Services />
      <ProjectSlider />
      <Contact />
    </div>
  );
}

export default App;