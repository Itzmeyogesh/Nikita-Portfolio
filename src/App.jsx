import React from 'react';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer'; // ✅ Import Footer

import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Project';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="bg-[#0d1b2a] font-sans">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Sections */}
      <main className="pl-20">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer /> {/* ✅ Add Footer at the end */}
      </main>
    </div>
  );
};

export default App;
