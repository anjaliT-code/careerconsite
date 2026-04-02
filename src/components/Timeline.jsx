import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Mic, Code, Users, Award } from 'lucide-react';

const TimelineNode = ({ date, title, description, icon: Icon, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div className="relative flex items-center justify-center mb-16 md:mb-24 w-full">
            {/* Central Axis Node */}
            <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 z-10">
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="w-4 h-4 rounded-full bg-hud-cyan shadow-[0_0_10px_#00D4FF]"
                />
            </div>

            {/* Content Card */}
            <div className={`flex flex-col w-full px-12 md:px-0 md:w-[45%] ${isEven ? 'md:mr-auto text-left md:text-right md:pr-12' : 'md:ml-auto text-left md:pl-12'}`}>
                <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-steel-gray/30 p-6 border border-hud-cyan/10 backdrop-blur-sm rounded-lg hover:border-hud-cyan/30 transition-all group"
                >
                    <div className={`flex items-center mb-4 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        <span className="p-2 bg-hud-cyan/5 text-hud-cyan rounded-md mr-3">
                            <Icon size={20} />
                        </span>
                        <span className="font-orbitron text-xs tracking-widest text-titanium">{date}</span>
                    </div>
                    <h3 className="font-orbitron font-bold text-lg md:text-xl text-white mb-3 group-hover:text-hud-cyan transition-colors">
                        {title}
                    </h3>
                    <p className="font-mono text-xs md:text-sm text-titanium/80 leading-relaxed">
                        {description}
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

const Timeline = () => {
    const nodes = [
        {
            date: "MARCH 15, 2025",
            title: "REGISTRATION OPENS",
            description: "Online portal goes live for undergraduate students and early bird clearance.",
            icon: Calendar
        },
        {
            date: "APRIL 05, 2025",
            title: "SPEAKER ANNOUNCEMENTS",
            description: "Unveiling tactical mentors and industry leaders from Big Tech and beyond.",
            icon: Mic
        },
        {
            date: "APRIL 18, 2025",
            title: "WORKSHOP DAY",
            description: "Intensive technical drills, system architecture drills, and career strategy coding.",
            icon: Code
        },
        {
            date: "APRIL 19, 2025",
            title: "MAIN EVENT: DEPLOYMENT",
            description: "Panel discussions, mock interviews, and high-stakes networking in the main hangar.",
            icon: Users
        },
        {
            date: "APRIL 19, 2025",
            title: "CLOSING CEREMONY",
            description: "Final mission debrief, awards, and direct placement opportunities revealed.",
            icon: Award
        }
    ];

    return (
        <section id="timeline" className="relative py-24 md:py-32 bg-void-black">
            <div className="container mx-auto px-6 mb-20 text-center">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="font-rajdhani text-hud-cyan tracking-[0.3em] text-sm mb-4 uppercase inline-block"
                >
                    MISSION LOG / ITINERARY
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="font-orbitron font-bold text-3xl md:text-5xl text-white uppercase tracking-widest"
                >
                    EVENT TIMELINE
                </motion.h2>
            </div>

            <div className="relative container mx-auto px-6 max-w-5xl">
                {/* Central Vertical Line */}
                <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-hud-cyan via-gdg-purple to-hud-cyan/10 origin-top -translate-x-1/2"
                />

                <div className="flex flex-col">
                    {nodes.map((node, i) => (
                        <TimelineNode key={i} {...node} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
