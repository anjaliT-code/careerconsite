import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '6K+', label: 'Footfall at CareerCon 1.0' },
  { value: '500+', label: 'Attendees Expected' },
  { value: '30+', label: 'Companies' },
  { value: 'Top 10', label: 'GDG on Campus in India' },
];

const highlights = [
  'Comprehensive placement & higher studies support',
  'Real-world exposure beyond classroom learning',
  'Bridging academia with industry excellence',
  'Empowering students for future careers',
  'Mock interviews & resume review sessions',
  '360° career ecosystem for students',
];

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden bg-void-black">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Label */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-rajdhani text-hud-cyan tracking-[0.5em] text-xs uppercase"
        >
          01 / About
        </motion.span>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-orbitron font-bold text-4xl md:text-6xl text-white mt-4 mb-2 leading-tight"
        >
          WHERE CAREERS<br />
          <span className="text-hud-cyan">TAKE FLIGHT.</span>
        </motion.h2>

        <div className="w-16 h-[2px] bg-hud-cyan mt-4 mb-10" />

        {/* Two column layout */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT — Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="font-mono text-titanium leading-relaxed text-sm md:text-base">
              <span className="text-white font-bold">CareerCon 2.0</span> is GDG On Campus Bennett University's flagship career-focused tech conference — happening on <span className="text-hud-cyan font-bold">26th March 2026</span> at TechZone II, Greater Noida.
            </p>

            <p className="font-mono text-titanium leading-relaxed text-sm md:text-base">
              Building on the massive success of CareerCon 1.0 — which saw <span className="text-white font-bold">6K+ footfall</span> and brought together industry leaders, alumni from global tech giants, placement experts, and defense representatives — CareerCon 2.0 is set to be bigger, bolder, and more impactful.
            </p>

            <p className="font-mono text-titanium leading-relaxed text-sm md:text-base">
              Organized by <span className="text-white font-bold">Google Developer Groups On Campus, Bennett University</span> — ranked among the <span className="text-hud-cyan font-bold">Top 10 GDGs on Campus</span> in India and Gold Tier in Google Cloud Jams — this event is your launchpad to the career you deserve.
            </p>

            <p className="font-mono text-titanium leading-relaxed text-sm md:text-base">
              Bennett University, established by <span className="text-white font-bold">The Times Group</span> (NAAC A+ Accredited), is home to 12,000+ students across 30+ programs, with a corporate network of 40,000+ advertisers and 16,000+ employees — giving you unparalleled industry access.
            </p>

            {/* Tag */}
            <div className="flex items-center space-x-4 pt-2">
              <span className="px-3 py-1 bg-gdg-blue/10 border border-gdg-blue/30 text-gdg-blue font-rajdhani text-xs tracking-widest uppercase">
                [ GDG CLASSIFIED ]
              </span>
              <span className="font-rajdhani text-titanium text-[0.7rem] tracking-[0.2em]">
                REF: BU-GDG-2026
              </span>
            </div>
          </motion.div>

          {/* RIGHT — Highlights + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="border border-hud-cyan/20 rounded-sm p-4 bg-hud-cyan/5 hover:bg-hud-cyan/10 transition-colors"
                >
                  <div className="font-orbitron text-hud-cyan font-black text-2xl md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="font-rajdhani text-titanium text-xs tracking-wide mt-1 uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Why CareerCon */}
            <div>
              <h3 className="font-orbitron text-white text-sm tracking-widest mb-4 uppercase">
                Why CareerCon 2.0?
              </h3>
              <div className="space-y-3">
                {highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start space-x-3"
                  >
                    <span className="text-hud-cyan mt-1 text-xs">▹</span>
                    <span className="font-rajdhani text-titanium text-sm tracking-wide">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div className="border-l-2 border-gdg-yellow pl-4 space-y-2">
              <p className="font-orbitron text-gdg-yellow text-xs tracking-widest uppercase">
                🏆 Achievements
              </p>
              <p className="font-mono text-titanium text-xs leading-relaxed">
                Most Collaborative Event Award at Bennett University · Top 10 GDG On Campus India · Gold Tier in Google Cloud Jams · 10+ Events Organized
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-hud-cyan/10 to-transparent pointer-events-none" />
    </section>
  );
};

export default About;