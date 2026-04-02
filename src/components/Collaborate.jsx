import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, CircleDollarSign, Rocket } from 'lucide-react';

const GlassCard = ({ title, description, icon: Icon, borderColor, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        whileHover={{ y: -8 }}
        className={`relative group p-8 rounded-2xl bg-white/5 backdrop-blur-xl border ${borderColor} transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden`}
    >
        {/* Animated background glow */}
        <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full opacity-10 group-hover:opacity-20 transition-opacity blur-3xl ${borderColor.replace('border-', 'bg-')}`} />

        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className={`w-8 h-8 ${borderColor.replace('border-', 'text-')}`} />
        </div>

        <h3 className="font-orbitron font-bold text-xl text-white mb-4 uppercase tracking-widest">
            {title}
        </h3>

        <p className="font-mono text-xs md:text-sm text-titanium leading-relaxed mb-8">
            {description}
        </p>

        <button className="font-rajdhani text-[0.7rem] tracking-[0.3em] text-white/50 border border-white/10 px-6 py-2 rounded-full group-hover:border-white/30 group-hover:text-white transition-all uppercase">
            LEARN MORE
        </button>
    </motion.div>
);

const Collaborate = () => {
    return (
        <section id="collaborate" className="relative py-24 md:py-32 bg-void-black overflow-hidden">
            {/* Subtle background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gdg-purple/5 via-transparent to-gdg-blue/5 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="font-rajdhani text-hud-cyan tracking-[0.3em] text-sm mb-4 uppercase inline-block"
                    >
                        PARTNERSHIP / OPPORTUNITIES
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="font-orbitron font-bold text-3xl md:text-5xl text-white uppercase tracking-widest mb-6"
                    >
                        COLLABORATE WITH US
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="font-mono text-titanium text-sm md:text-base max-w-2xl"
                    >
                        Partner with GDG Bennett to shape the next generation of tech talent.
                        Choose your clearance level and join the mission.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <GlassCard
                        index={0}
                        title="PARTNER"
                        description="Co-host technical workshops and panel discussions. Direct engagement with the core student community."
                        icon={Handshake}
                        borderColor="border-gdg-blue"
                    />
                    <GlassCard
                        index={1}
                        title="SPONSOR"
                        description="Premium brand visibility across the campus and direct access to candidate profiles and talent resumes."
                        icon={CircleDollarSign}
                        borderColor="border-gdg-yellow"
                    />
                    <GlassCard
                        index={2}
                        title="JOIN US"
                        description="Students: volunteer for ground ops, exhibit projects, or apply for lightning talk opportunities."
                        icon={Rocket}
                        borderColor="border-radar-green"
                    />
                </div>

                <div className="flex flex-col items-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative px-12 py-4 bg-gdg-blue text-white font-orbitron font-bold tracking-[0.2em] rounded-sm group overflow-hidden shadow-[0_0_20px_rgba(66,133,244,0.4)]"
                    >
                        <span className="relative z-10">GET IN TOUCH</span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                        <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-white/30" />
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default Collaborate;
