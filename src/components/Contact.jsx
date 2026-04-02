import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="relative py-24 md:py-32 bg-void-black">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="font-rajdhani text-hud-cyan tracking-[0.3em] text-sm mb-4 uppercase inline-block"
                    >
                        REQUEST YOUR CLEARANCE
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="font-orbitron font-bold text-3xl md:text-5xl text-white uppercase tracking-widest mb-6"
                    >
                        MISSION BRIEFING
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="font-mono text-titanium text-sm md:text-base"
                    >
                        Register for Career Con 2.0 or reach out to the GDG team.
                        Transmission lines are secure.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-steel-gray/20 border border-hud-cyan/10 p-8 md:p-12 relative overflow-hidden"
                >
                    {/* Scanline effect overlay */}
                    <div className="absolute inset-0 bg-scanline pointer-events-none opacity-5" />

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="flex flex-col space-y-2">
                            <label className="font-rajdhani text-[0.6rem] tracking-[0.2em] text-hud-cyan uppercase">OPERATIVE NAME</label>
                            <input
                                type="text"
                                placeholder="E.G. JOHN DOE"
                                className="bg-void-black/50 border border-hud-cyan/20 px-4 py-3 font-mono text-sm text-white focus:outline-none focus:border-hud-cyan/60 transition-colors placeholder:opacity-30"
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="font-rajdhani text-[0.6rem] tracking-[0.2em] text-hud-cyan uppercase">INSTITUTE EMAIL</label>
                            <input
                                type="email"
                                placeholder="ID@BENNETT.EDU.IN"
                                className="bg-void-black/50 border border-hud-cyan/20 px-4 py-3 font-mono text-sm text-white focus:outline-none focus:border-hud-cyan/60 transition-colors placeholder:opacity-30"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2 mb-8">
                        <label className="font-rajdhani text-[0.6rem] tracking-[0.2em] text-hud-cyan uppercase">AREA OF INTEREST</label>
                        <select className="bg-void-black/50 border border-hud-cyan/20 px-4 py-3 font-mono text-sm text-white focus:outline-none focus:border-hud-cyan/60 transition-colors appearance-none">
                            <option value="">SELECT CLEARANCE PATH</option>
                            <option value="software">SOFTWARE ENGINEERING</option>
                            <option value="ai">ARTIFICIAL INTELLIGENCE</option>
                            <option value="design">UI/UX & DESIGN</option>
                            <option value="cyber">CYBERSECURITY</option>
                            <option value="cloud">CLOUD INFRASTRUCTURE</option>
                        </select>
                    </div>

                    <div className="flex flex-col space-y-2 mb-10">
                        <label className="font-rajdhani text-[0.6rem] tracking-[0.2em] text-hud-cyan uppercase">MESSAGE / INTEL</label>
                        <textarea
                            rows="4"
                            placeholder="YOUR MISSION OBJECTIVES OR QUESTIONS..."
                            className="bg-void-black/50 border border-hud-cyan/20 px-4 py-3 font-mono text-sm text-white focus:outline-none focus:border-hud-cyan/60 transition-colors placeholder:opacity-30 resize-none"
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            className="relative group px-12 py-3 bg-transparent border border-hud-cyan text-hud-cyan font-orbitron text-sm tracking-[0.2em] overflow-hidden transition-all duration-300 hover:text-void-black"
                            onClick={() => alert("Transmission received.")}
                        >
                            <span className="relative z-10">SEND TRANSMISSION</span>
                            <motion.div
                                className="absolute inset-0 bg-hud-cyan -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
                            />
                            {/* Scan sweep line */}
                            <motion.div
                                animate={{ left: ['-100%', '200%'] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                className="absolute top-0 bottom-0 w-20 bg-white/20 skew-x-12 z-20 pointer-events-none"
                            />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
