import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });

            const target = e.target;
            setIsPointer(
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button')
            );
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
            {/* Outer Crosshair */}
            <motion.div
                animate={{
                    x: mousePos.x,
                    y: mousePos.y,
                    scale: isPointer ? 1.5 : 1,
                    rotate: isPointer ? 45 : 0
                }}
                transition={{ type: 'spring', damping: 25, stiffness: 250, restDelta: 0.001 }}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-hud-cyan/40 flex items-center justify-center rounded-sm"
            >
                <div className="w-[1px] h-2 bg-hud-cyan" />
                <div className="w-2 h-[1px] bg-hud-cyan absolute" />
            </motion.div>

            {/* Inner Dot */}
            <motion.div
                animate={{
                    x: mousePos.x,
                    y: mousePos.y,
                }}
                transition={{ type: 'spring', damping: 30, stiffness: 500, restDelta: 0.001 }}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-hud-cyan rounded-full"
            />
        </div>
    );
};

export default CustomCursor;
