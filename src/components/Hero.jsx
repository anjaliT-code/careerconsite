import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-void-black">
            {/* Top Left Logo (Bennett) */}
            <div className="absolute top-8 left-8 z-20">
                <motion.img
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 0.8, x: 0 }}
                    transition={{ duration: 0.8 }}
                    src="/assets/bennett-logo.png"
                    alt="Bennett University"
                    className="h-8 md:h-12 w-auto grayscale invert"
                    onError={(e) => { e.target.style.display = 'none'; }}
                />
            </div>

            {/* Main Content */}
            <div className="z-10 flex flex-col items-center text-center px-6">
                <motion.img
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    src="/assets/gdg-logo.png"
                    alt="GDG Logo"
                    className="w-20 h-20 md:w-28 md:h-28 mb-4"
                    onError={(e) => { e.target.src = "https://www.gstatic.com/devrel-devsite/prod/v7739506691656ae53e284f18ba036ded6f8bc9cf040a17f694669862419ea78f/developers/images/touchicon-180.png" }}
                />

                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="font-rajdhani text-titanium tracking-[0.5em] text-xs md:text-sm mb-4"
                >
                    GDG PRESENTS
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                    className="font-orbitron text-white font-bold leading-tight tracking-tight mt-2"
                    style={{ fontSize: 'clamp(2.5rem, 10vw, 7rem)' }}
                >
                    CAREER CON 2.0
                </motion.h1>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
            >
                <span className="font-rajdhani text-hud-cyan text-[0.6rem] tracking-[0.3em] mb-2 animate-pulse">
                    SCROLL TO ENGAGE
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-hud-cyan"
                >
                    ↓
                </motion.div>
            </motion.div>

            {/* CSS Bracket Decorations */}
            <div className="absolute top-20 left-10 w-8 h-8 border-t-2 border-l-2 border-hud-cyan/30 pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-8 h-8 border-b-2 border-r-2 border-hud-cyan/30 pointer-events-none" />
        </section>
    );
};

export default Hero;
