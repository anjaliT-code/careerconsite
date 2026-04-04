import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink } from 'lucide-react';

const words = ['Network', 'Collaborate', 'Innovate'];

const TypewriterWords = () => {
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
  const [currentText, setCurrentText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [showDot, setShowDot] = React.useState(true);
  const [started, setStarted] = React.useState(false);
  const ref = React.useRef(null);

  // Start only when visible
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Typewriter logic — type then delete then next word
  React.useEffect(() => {
    if (!started) return;
    const word = words[currentWordIndex];

    if (!isDeleting && currentText.length < word.length) {
      // Still typing
      const t = setTimeout(() => {
        setCurrentText(word.slice(0, currentText.length + 1));
      }, 100);
      return () => clearTimeout(t);
    }

    if (!isDeleting && currentText.length === word.length) {
      // Finished typing — pause then start deleting
      const t = setTimeout(() => setIsDeleting(true), 1200);
      return () => clearTimeout(t);
    }

    if (isDeleting && currentText.length > 0) {
      // Deleting
      const t = setTimeout(() => {
        setCurrentText(word.slice(0, currentText.length - 1));
      }, 60);
      return () => clearTimeout(t);
    }

    if (isDeleting && currentText.length === 0) {
      // Move to next word
      setIsDeleting(false);
      setCurrentWordIndex(prev => (prev + 1) % words.length);
    }
  }, [started, currentText, isDeleting, currentWordIndex]);

  // Blinking dot
  React.useEffect(() => {
    const interval = setInterval(() => setShowDot(d => !d), 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center min-h-[200px]">
      <h2
        style={{
          fontFamily: "'Söhne', 'ui-sans-serif', 'system-ui', '-apple-system', sans-serif",
          fontWeight: 700,
          letterSpacing: '-0.02em',
        }}
        className="text-5xl md:text-8xl lg:text-9xl text-white"
      >
        {currentText}
        <span className={`${showDot ? 'opacity-100' : 'opacity-0'} text-white transition-opacity`}>|</span>
      </h2>
    </div>
  );
};
const Footer = () => {
    return (
        <footer className="relative py-24 md:py-32 bg-void-black border-t border-hud-cyan/5">
            <div className="container mx-auto px-6">
                {/* Massive Headline */}
                <div className="text-center mb-24">
                    <TypewriterWords />
                </div>

                <div className="grid md:grid-cols-3 gap-16 mb-24">
                    {/* Column 1: Brand */}
                    <div className="flex flex-col space-y-6">
                        <div className="flex items-center space-x-4">
                            <img src="/assets/gdg-logo.png" alt="GDG" className="h-8 w-auto" onError={(e) => { e.target.style.display = 'none'; }} />
                            <div className="w-[1px] h-6 bg-hud-cyan/20" />
                            <img src="/assets/bennett-logo.png.webp" alt="Bennett" className="h-6 w-auto grayscale invert" onError={(e) => { e.target.style.display = 'none'; }} />
                        </div>
                        <p className="font-mono text-xs text-titanium leading-relaxed max-w-xs">
                            Organized by Google Developer Groups at Bennett University.
                            Fostering innovation and career excellence through community and technology.
                        </p>
                        <div className="flex space-x-2">
                            <span className="w-2 h-2 rounded-full bg-gdg-blue" />
                            <span className="w-2 h-2 rounded-full bg-gdg-red" />
                            <span className="w-2 h-2 rounded-full bg-gdg-yellow" />
                            <span className="w-2 h-2 rounded-full bg-radar-green" />
                        </div>
                    </div>

                    {/* Column 2: Navigation */}
                    <div className="flex flex-col space-y-4">
                        <h4 className="font-orbitron text-xs tracking-widest text-white mb-2">QUICK LINKS</h4>
                        <div className="grid grid-cols-1 gap-2">
                            {['ABOUT', 'TIMELINE', 'COLLABORATE', 'CONTACT'].map(link => (
                                <a key={link} href={`#${link.toLowerCase()}`} className="font-rajdhani text-sm text-titanium hover:text-hud-cyan transition-colors tracking-[0.2em]">
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 3: Socials */}
                    <div className="flex flex-col space-y-4">
                        <h4 className="font-orbitron text-xs tracking-widest text-white mb-2">ENGAGE</h4>
                        <div className="flex flex-wrap gap-4">
                            {[
                                { Icon: ExternalLink, href: "#" },
                                { Icon: ExternalLink, href: "#" },
                                { Icon: ExternalLink, href: "#" },
                                { Icon: ExternalLink, href: "#" }
                            ].map(({ Icon, href }, i) => (
                                <motion.a
                                    key={i}
                                    href={href}
                                    whileHover={{ rotate: 15, scale: 1.1 }}
                                    className="w-10 h-10 border border-hud-cyan/20 flex items-center justify-center text-titanium hover:text-hud-cyan hover:border-hud-cyan/50 transition-all rounded-sm"
                                >
                                    <Icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-hud-cyan/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center">
                    <p className="font-mono text-[0.6rem] text-titanium tracking-widest uppercase">
                        ©️ 2025 GDG Bennett University. Career Con 2.0. All Rights Reserved.
                    </p>
                    <p className="font-mono text-[0.6rem] text-titanium tracking-widest uppercase">
                        BU-GDG-OPS // CLASSIFIED
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
