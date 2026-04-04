import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import robotVideo from '../assets/robot2.mp4';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const hackathonDate = new Date('2026-04-20T09:00:00');
    const now = new Date();
    const diff = hackathonDate - now;
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2 mt-6">
      {[['DAYS', timeLeft.days], ['HRS', timeLeft.hours], ['MIN', timeLeft.minutes], ['SEC', timeLeft.seconds]].map(([label, value]) => (
        <div key={label} className="flex flex-col items-center justify-center border border-blue-400/40 bg-blue-500/10 rounded-sm py-3 px-2">
          <span className="font-orbitron font-black text-2xl md:text-3xl text-white tabular-nums">
            {String(value).padStart(2, '0')}
          </span>
          <span className="font-rajdhani text-[0.5rem] tracking-[0.2em] text-blue-400 mt-1">{label}</span>
        </div>
      ))}
    </div>
  );
};

const HackathonRegister = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <section
      id="hackathon"
      className="relative bg-black overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* VIDEO — full background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          src={robotVideo}
          muted
          loop
          playsInline
          autoPlay
          className="w-full h-full object-cover"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, black 75%, transparent 100%)',
            maskImage: 'linear-gradient(to right, black 75%, transparent 100%)',
          }}
        />
        {/* Hide Veo watermark */}
        <div className="absolute bottom-0 right-0 w-32 h-12 bg-black z-10" />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* CONTENT — overlapping on right */}
      <div className="relative z-10 flex items-center justify-end min-h-screen px-6 md:px-16 py-24">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md backdrop-blur-sm bg-black/50 rounded-lg p-8 border border-blue-500/20"
        >
          <span className="font-rajdhani text-blue-400 tracking-[0.5em] text-xs uppercase">
            Main Event
          </span>

          <h2 className="font-orbitron text-white text-3xl md:text-5xl font-bold mt-3 tracking-widest">
            HACKATHON
          </h2>

          <div className="w-16 h-[2px] bg-blue-500 mt-4 mb-6" />

          <div className="space-y-3 font-rajdhani text-titanium text-sm md:text-base tracking-wide">
            <p>🗓️ <span className="text-white font-bold">Date:</span> April 20, 2026</p>
            <p>📍 <span className="text-white font-bold">Venue:</span> Bennett University, Greater Noida</p>
            <p>👥 <span className="text-white font-bold">Team Size:</span> 2–4 Members</p>
            <p>🏆 <span className="text-white font-bold">Prize Pool:</span> ₹50,000+</p>
            <p className="text-white/60 text-xs md:text-sm leading-relaxed pt-2">
              Build, innovate, and compete. A 24-hour hackathon where ideas
              meet execution. Open to all Bennett University students across
              all branches.
            </p>
          </div>

          <CountdownTimer />

          <motion.a
            href="https://your-registration-link.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block mt-8 w-full text-center text-white font-orbitron font-bold text-sm tracking-[0.3em] px-10 py-4 rounded-sm transition-all"
            style={{
              background: 'linear-gradient(135deg, #0ea5e9, #2563eb, #4f46e5)',
              boxShadow: '0 0 30px rgba(59,130,246,0.6), 0 0 60px rgba(59,130,246,0.3)',
            }}
          >
            REGISTER NOW →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HackathonRegister;