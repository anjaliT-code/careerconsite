import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import JetAnimation from './components/JetAnimation';
import About from './components/About';
import Timeline from './components/Timeline';
import Collaborate from './components/Collaborate';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="relative bg-void-black text-ghost-white font-mono selection:bg-hud-cyan/30 selection:text-white min-h-screen">
      <CustomCursor />
      <ParticleBackground />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10"
      >
        <Navbar />
        <JetAnimation />
        <div className="relative z-20 bg-void-black">
          <About />
          <Timeline />
          <Collaborate />
          <Contact />
          <Footer />
        </div>
      </motion.main>
    </div>
  );
}

export default App;
