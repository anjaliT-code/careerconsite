import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="relative py-24 md:py-32 overflow-hidden bg-void-black bg-hex">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
                {/* Left Column */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col"
                >
                    <div className="flex flex-col mb-8">
                        <span className="font-rajdhani text-hud-cyan tracking-[0.3em] text-sm mb-2 uppercase">
                            01 / ABOUT
                        </span>
                        <div className="w-24 h-[1px] bg-hud-cyan mb-6" />
                        <h2 className="font-orbitron font-bold text-4xl md:text-5xl leading-tight text-white mb-6">
                            WHERE CAREERS <br />
                            <span className="text-hud-cyan">TAKE FLIGHT.</span>
                        </h2>
                        <div className="flex items-center space-x-4">
                            <span className="px-3 py-1 bg-gdg-blue/10 border border-gdg-blue/30 text-gdg-blue font-rajdhani text-xs tracking-widest -rotate-3 uppercase">
                                [ GDG CLASSIFIED ]
                            </span>
                            <span className="font-rajdhani text-titanium text-[0.7rem] tracking-[0.2em]">
                                REF: BU-GDG-2025
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col space-y-8"
                >
                    <p className="font-mono text-titanium leading-relaxed text-sm md:text-base">
                        Career Con 2.0 is GDG Bennett University’s flagship career-focused tech conference.
                        Bringing together industry leaders, hiring managers, and students for a day of
                        workshops, panel discussions, mock interviews, and networking sessions.
                        Whether you’re looking for internships, full-time roles, or just clarity on
                        your path — this is your launchpad.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <div className="px-6 py-3 border border-hud-cyan/30 rounded-full font-rajdhani text-sm tracking-[0.2em] text-white hover:bg-hud-cyan/5 transition-colors">
                            <span className="text-hud-cyan font-bold mr-2">500+</span> ATTENDEES
                        </div>
                        <div className="px-6 py-3 border border-hud-cyan/30 rounded-full font-rajdhani text-sm tracking-[0.2em] text-white hover:bg-hud-cyan/5 transition-colors">
                            <span className="text-hud-cyan font-bold mr-2">30+</span> COMPANIES
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative vertical line */}
            <div className="absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-hud-cyan/10 to-transparent pointer-events-none" />
        </section>
    );
};

export default About;
