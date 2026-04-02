import React, { useRef, useEffect, useState, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const TOTAL_FRAMES = 180;

const JetAnimation = () => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [loadedCount, setLoadedCount] = useState(0);
    const [isPreloaded, setIsPreloaded] = useState(false);

    // Framer Motion scroll tracking for the specific container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Smooth out the scroll progress for more fluid frame changes
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Transform values for the title text zoom effect
    const titleScale = useTransform(smoothProgress, [0, 0.8], [1, 3.5]);
    const titleOpacity = useTransform(smoothProgress, [0, 0.7, 0.9], [1, 1, 0]);

    // Preload frames
    useEffect(() => {
        const preloadImages = async () => {
            const loadedImages = [];
            let loadedSoFar = 0;

            for (let i = 1; i <= TOTAL_FRAMES; i++) {
                const img = new Image();
                img.src = `/assets/hero-images/ezgif-frame-${i.toString().padStart(3, '0')}.jpg`;
                img.onload = () => {
                    loadedSoFar++;
                    setLoadedCount(loadedSoFar);
                    if (loadedSoFar === TOTAL_FRAMES) {
                        setIsPreloaded(true);
                    }
                };
                loadedImages.push(img);
            }
            setImages(loadedImages);
        };

        preloadImages();
    }, []);

    // Handle canvas drawing
    useEffect(() => {
        if (!isPreloaded || !canvasRef.current) return;

        const ctx = canvasRef.current.getContext('2d');

        const render = () => {
            // Use the raw scrollYProgress for frame index to keep it tied to actual scroll
            // but maybe some easing would be nice. Let's try raw first.
            const frameIndex = Math.floor(scrollYProgress.get() * (TOTAL_FRAMES - 1));
            const image = images[frameIndex];

            if (image && image.complete) {
                // Draw image with "object-cover" logic
                const canvas = canvasRef.current;
                const scale = Math.max(canvas.width / image.width, canvas.height / image.height);
                const x = (canvas.width / 2) - (image.width / 2) * scale;
                const y = (canvas.height / 2) - (image.height / 2) * scale;

                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(image, x, y, image.width * scale, image.height * scale);
            }

            requestAnimationFrame(render);
        };

        // Set initial canvas size
        const resizeCanvas = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
            }
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const animationFrameId = requestAnimationFrame(render);
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isPreloaded, images, scrollYProgress]);

    return (
        <div ref={containerRef} className="relative h-[400vh] bg-void-black">
            {/* Sticky Canvas Container */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {!isPreloaded && (
                    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-void-black">
                        <h2 className="font-orbitron text-hud-cyan text-sm tracking-[0.3em] mb-4">
                            CALIBRATING FLIGHT SYSTEMS...
                        </h2>
                        <div className="w-48 h-1 bg-steel-gray rounded-full overflow-hidden">
                            <div
                                className="h-full bg-hud-cyan transition-all duration-300"
                                style={{ width: `${(loadedCount / TOTAL_FRAMES) * 100}%` }}
                            />
                        </div>
                    </div>
                )}

                <canvas ref={canvasRef} className="w-full h-full object-cover" />

                {/* Zooming Title Overlay */}
                <motion.div
                    style={{ scale: titleScale, opacity: titleOpacity }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
                >
                    <h2 className="font-orbitron font-bold text-white text-5xl md:text-8xl tracking-widest text-center px-4">
                        CAREER CON 2.0
                    </h2>
                </motion.div>

                {/* HUD Overlay */}
                <div className="absolute inset-0 pointer-events-none z-30 p-6 md:p-10 flex flex-col justify-between font-rajdhani text-hud-cyan">
                    <div className="flex justify-between items-start">
                        <div className="flex flex-col space-y-1">
                            <span className="text-[0.6rem] tracking-[0.2em] opacity-60">MISSION PARAMS: GDG-BENNETT</span>
                            <div className="flex items-center space-x-2">
                                <span className="w-2 h-2 bg-radar-green rounded-full animate-pulse" />
                                <span className="text-xs tracking-widest">LAT 28.45 / LON 77.58</span>
                            </div>
                        </div>
                        <div className="text-right flex flex-col items-end">
                            <span className="text-[0.6rem] tracking-[0.2em] opacity-60">MACH VELOCITY</span>
                            <span className="text-lg font-bold">2.4 <span className="text-[0.6rem] font-normal">MAX</span></span>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center w-full">
                        <div className="w-full max-w-xs flex flex-col items-center">
                            <span className="text-[0.6rem] tracking-[0.3em] mb-1">APPROACH SEQUENCE</span>
                            <div className="w-full h-[1px] bg-hud-cyan/20 overflow-hidden">
                                <motion.div
                                    className="h-full bg-hud-cyan"
                                    style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-end">
                        <div className="border-l border-b border-hud-cyan/40 w-12 h-12" />
                        <div className="text-[0.6rem] tracking-[0.2em] mb-2 text-center">
                            STEALTH ENGAGEMENT PROTOCOL <br />
                            <span className="opacity-60 uppercase">Career progression active</span>
                        </div>
                        <div className="border-r border-b border-hud-cyan/40 w-12 h-12" />
                    </div>
                </div>

                {/* Global Bottom Progress Bar */}
                <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-gdg-blue z-40"
                    style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
                />
            </div>
        </div>
    );
};

export default JetAnimation;
