import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JetAnimation from './components/JetAnimation';
import About from './components/About';
import Timeline from './components/Timeline';
import Collaborate from './components/Collaborate';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Basic loading state, JetAnimation will handle its own preloading
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-void-black text-ghost-white font-mono selection:bg-hud-cyan/30 selection:text-white min-h-screen">
      <CustomCursor />
      <ParticleBackground />

      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void-black"
          >
            <motion.img
              src="/assets/gdg-logo.png"
              alt="GDG Logo"
              className="w-24 h-24 mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              onError={(e) => { e.target.src = "https://www.gstatic.com/devrel-devsite/prod/v7739506691656ae53e284f18ba036ded6f8bc9cf040a17f694669862419ea78f/developers/images/touchicon-180.png" }}
            />
            <h1 className="font-orbitron text-hud-cyan tracking-[0.3em] text-xl animate-pulse text-center px-4">
              INITIALIZING SEQUENCE...
            </h1>
            <div className="w-64 h-1 bg-steel-gray mt-8 overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-gdg-blue"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-10"
          >
            <Navbar />
            <Hero />
            <JetAnimation />
            <div className="relative z-20 bg-void-black">
              <About />
              <Timeline />
              <Collaborate />
              <Contact />
              <Footer />
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
