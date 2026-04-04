import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import robotVideo from '../assets/robot.mp4';

const HackathonRegister = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // User reached the section — play video
            videoRef.current.currentTime = 0;
            videoRef.current.play();
          } else {
            // User scrolled away — stop video
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hackathon"
      className="relative bg-black py-24 px-6 md:px-16 overflow-hidden"
    >

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">

        {/* LEFT — Hackathon Details */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 max-w-lg"
        >
          {/* Label */}
          <span className="font-rajdhani text-hud-cyan tracking-[0.5em] text-xs uppercase">
            Main Event
          </span>

          {/* Heading */}
          <h2 className="font-orbitron text-white text-3xl md:text-5xl font-bold mt-3 tracking-widest leading-tight">
            HACKATHON
          </h2>

          <div className="w-16 h-[2px] bg-gdg-red mt-4 mb-6" />

          {/* Details */}
          <div className="space-y-3 font-rajdhani text-titanium text-sm md:text-base tracking-wide">
            <p>🗓️ <span className="text-white font-bold">Date:</span> April 20, 2025</p>
            <p>📍 <span className="text-white font-bold">Venue:</span> Bennett University, Greater Noida</p>
            <p>👥 <span className="text-white font-bold">Team Size:</span> 2–4 Members</p>
            <p>🏆 <span className="text-white font-bold">Prize Pool:</span> ₹50,000+</p>
            <p className="text-ghost-white/70 text-xs md:text-sm leading-relaxed pt-2">
              Build, innovate, and compete. A 24-hour hackathon where ideas meet execution. 
              Open to all Bennett University students across all branches.
            </p>
          </div>

          {/* Register Button */}
          <motion.a
            href="https://your-registration-link.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block mt-8 bg-gdg-red text-white font-orbitron font-bold text-sm tracking-[0.3em] px-10 py-4 rounded-sm hover:bg-red-600 transition-colors shadow-lg shadow-gdg-red/30"
          >
            REGISTER NOW
          </motion.a>
        </motion.div>

        {/* RIGHT — Video */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-end items-center"
        >
        <div className="relative overflow-hidden rounded-lg">
          {/* Hides watermark at bottom */}
          <div className="absolute bottom-0 left-0 w-full h-12 bg-black z-10" />
          <video
            ref={videoRef}
            src={robotVideo}
            muted
            playsInline
            className="w-full max-w-lg md:max-w-2xl rounded-lg"
            style={{
                WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 60% 50%, black 40%, transparent 100%)',
                maskImage: 'radial-gradient(ellipse 80% 80% at 60% 50%, black 40%, transparent 100%)',
            }}
          />
        </ div>
        </motion.div>

      </div>
    </section>
  );
};

export default HackathonRegister;