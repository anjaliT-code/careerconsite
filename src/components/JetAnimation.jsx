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
        stiffness: 70,
        damping: 35,
        restDelta: 0.001
    });

    const lastFrameIndex = useRef(-1);

    // Transform values for the title text zoom effect
    const titleScale = useTransform(smoothProgress, [0, 0.8], [1, 4.5]);
    const titleOpacity = useTransform(smoothProgress, [0, 0.7, 0.95], [1, 1, 0]);

    // Progressive Preload
    useEffect(() => {
        const preloadThreshold = 25; // Reveal after 25 frames
        const loadedImages = [];
        let loadedSoFar = 0;

        for (let i = 1; i <= TOTAL_FRAMES; i++) {
            const img = new Image();
            img.src = `/assets/hero-images/ezgif-frame-${i.toString().padStart(3, '0')}.jpg`;
            img.onload = () => {
                loadedSoFar++;
                setLoadedCount(loadedSoFar);
                if (loadedSoFar === preloadThreshold) {
                    setIsPreloaded(true);
                }
            };
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, []);

    // Optimized Handle canvas drawing
    useEffect(() => {
        if (!isPreloaded || !canvasRef.current) return;

        const ctx = canvasRef.current.getContext('2d', { alpha: false });
        // Enable high-quality smoothing
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        const render = () => {
            // CRITICAL: Use smoothProgress for cinematic movement
            // Using smoothProgress.get() ensures the frame index follows the spring physics
            const currentSmoothProgress = smoothProgress.get();
            // Use Math.round for more accurate frame selection to reduce ghosting
            const frameIndex = Math.round(currentSmoothProgress * (TOTAL_FRAMES - 1));

            // Only draw if the frame has actually changed
            if (frameIndex !== lastFrameIndex.current) {
                const image = images[frameIndex];

                if (image && image.complete) {
                    const canvas = canvasRef.current;
                    const isVertical = canvas.height > canvas.width;

                    // On mobile (vertical), we use a hybrid scaling to avoid too much cropping
                    // while still filling most of the space.
                    const scale = isVertical
                        ? (canvas.height / image.height) * 0.9 // Scale slightly down to see more width
                        : Math.max(canvas.width / image.width, canvas.height / image.height);

                    const x = (canvas.width / 2) - (image.width / 2) * scale;
                    const y = (canvas.height / 2) - (image.height / 2) * scale;

                    // Clear the high-DPI buffer correctly
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(image, x, y, image.width * scale, image.height * scale);
                    lastFrameIndex.current = frameIndex;
                }
            }

            requestAnimationFrame(render);
        };

        // Set initial canvas size
        const resizeCanvas = () => {
            if (canvasRef.current) {
                const dpr = window.devicePixelRatio || 1;
                // Set the internal resolution to match physical pixels
                canvasRef.current.width = window.innerWidth * dpr;
                canvasRef.current.height = window.innerHeight * dpr;

                // Ensure context settings are maintained after resize
                const context = canvasRef.current.getContext('2d');
                context.imageSmoothingEnabled = true;
                context.imageSmoothingQuality = 'high';
            }
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const animationFrameId = requestAnimationFrame(render);
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isPreloaded, images, smoothProgress]);

    return (
        <div ref={containerRef} className="relative h-[600vh]">
            {/* Sticky Canvas Container */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {!isPreloaded && (
                    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm">
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
                    <h2 className="font-orbitron font-bold text-white text-4xl md:text-8xl tracking-widest text-center px-4">
                        CAREER CON 2.0
                    </h2>
                </motion.div>

                {/* HUD Overlay */}
                <div className="absolute inset-0 pointer-events-none z-30 p-4 md:p-10 flex flex-col justify-between font-rajdhani text-hud-cyan">
                    <div className="flex justify-between items-start">
                        <div className="flex flex-col space-y-1">
                            <span className="text-[0.5rem] md:text-[0.6rem] tracking-[0.2em] opacity-60 uppercase">
                                MISSION PARAMS: GDG-BENNETT
                            </span>
                            <div className="flex items-center space-x-2">
                                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-radar-green rounded-full animate-pulse" />
                                <span className="text-[0.6rem] md:text-xs tracking-widest">LAT 28.45 / LON 77.58</span>
                            </div>
                        </div>
                        <div className="text-right flex flex-col items-end">
                            <span className="text-[0.5rem] md:text-[0.6rem] tracking-[0.2em] opacity-60 uppercase">MACH VELOCITY</span>
                            <span className="text-sm md:text-lg font-bold">2.4 <span className="text-[0.5rem] md:text-[0.6rem] font-normal opacity-60">MAX</span></span>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center w-full">
                        <div className="w-full max-w-[180px] md:max-w-xs flex flex-col items-center">
                            <span className="text-[0.5rem] md:text-[0.6rem] tracking-[0.3em] mb-1">APPROACH SEQUENCE</span>
                            <div className="w-full h-[1px] bg-hud-cyan/20 overflow-hidden">
                                <motion.div
                                    className="h-full bg-hud-cyan"
                                    style={{ scaleX: smoothProgress, transformOrigin: 'left' }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-end">
                        <div className="border-l border-b border-hud-cyan/40 w-8 h-8 md:w-12 md:h-12" />
                        <div className="text-[0.5rem] md:text-[0.6rem] tracking-[0.2em] mb-1 md:mb-2 text-center px-2">
                            STEALTH ENGAGEMENT PROTOCOL <br />
                            <span className="opacity-60 uppercase">Career progression active</span>
                        </div>
                        <div className="border-r border-b border-hud-cyan/40 w-8 h-8 md:w-12 md:h-12" />
                    </div>
                </div>

                {/* Global Bottom Progress Bar */}
                <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-gdg-blue z-40"
                    style={{ scaleX: smoothProgress, transformOrigin: 'left' }}
                />
            </div>
        </div>
    );
};

export default JetAnimation;
