import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show navbar background after scrolling past some point (e.g., hero section)
            setScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'ABOUT', href: '#about', color: 'bg-gdg-blue' },
        { name: 'TIMELINE', href: '#timeline', color: 'bg-gdg-purple' },
        { name: 'COLLABORATE', href: '#collaborate', color: 'bg-gdg-yellow' },
        { name: 'CONTACT', href: '#contact', color: 'bg-gdg-red' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-void-black/80 backdrop-blur-md border-b border-hud-cyan/10 py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Left: Bennett Logo */}
                <div className="flex items-center">
                    <img
                        src="/assets/bennett-logo.png"
                        alt="Bennett Logo"
                        className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity grayscale invert"
                        onError={(e) => { e.target.style.display = 'none'; }}
                    />
                </div>

                {/* Center: Title */}
                <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none md:pointer-events-auto">
                    <h1 className="font-orbitron font-bold tracking-[0.4em] text-sm md:text-lg text-white">
                        CAREER CON 2.0
                    </h1>
                </div>

                {/* Right: Desktop Links */}
                <div className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="font-rajdhani text-xs tracking-widest text-titanium hover:text-hud-cyan transition-colors border border-hud-cyan/20 px-4 py-1.5 rounded-full hover:bg-hud-cyan/5"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-hud-cyan p-1"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-40 bg-void-black/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center space-y-10"
                    >
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="absolute top-8 right-8 text-hud-cyan"
                        >
                            <X size={32} />
                        </button>
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center space-x-4 font-orbitron text-2xl tracking-[0.2em] text-white hover:text-hud-cyan transition-colors"
                            >
                                <span className={`w-3 h-3 rounded-full ${link.color}`} />
                                <span>{link.name}</span>
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
