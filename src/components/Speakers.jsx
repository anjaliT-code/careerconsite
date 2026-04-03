import React from 'react';
import { motion } from 'framer-motion';
import shraddha from '../assets/speakers/shraddha.jpg';
import ankur from '../assets/speakers/ankur.jpg';
import tanay from '../assets/speakers/tanay.jpg';
import neeraj from '../assets/speakers/neeraj.jpg';

const speakers = [
  {
    name: 'Shraddha Khapra',
    role: 'Co-founder, Apna College',
    img: shraddha,
    color: 'border-gdg-blue',
    desc: 'DSA & Web Dev educator with 4M+ subscribers. Making coding accessible for every student in India.',
  },
  {
    name: 'Ankur Warikoo',
    role: 'Entrepreneur & Author',
    img: ankur,
    color: 'border-gdg-red',
    desc: 'Serial entrepreneur, bestselling author of "Do Epic Shit". Talks about money, career & life decisions.',
  },
  {
    name: 'Tanay Pratap',
    role: 'Founder, neogcamp',
    img: tanay,
    color: 'border-gdg-yellow',
    desc: 'Ex-Microsoft engineer turned educator. Helping students land top tech jobs through neogcamp.',
  },
  {
    name: 'Neeraj Walia',
    role: 'ezsnippet',
    img: neeraj,
    color: 'border-gdg-purple',
    desc: 'Developer content creator sharing practical coding tips and career advice for aspiring developers.',
  },
];

const Speakers = () => {
  return (
    <section id="speakers" className="relative bg-void-black py-24 px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-rajdhani text-hud-cyan tracking-[0.5em] text-xs uppercase"
        >
          Confirmed Lineup
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-orbitron text-white text-3xl md:text-5xl font-bold mt-3 tracking-widest"
        >
          SPEAKERS
        </motion.h2>
        <div className="w-16 h-[2px] bg-hud-cyan mx-auto mt-4" />
      </div>

      {/* Speaker Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl mx-auto">
        {speakers.map((speaker, i) => (
            <motion.div
                key={speaker.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center text-center"
            >
                <div className={`w-36 h-36 md:w-48 md:h-48 rounded-full border-4 ${speaker.color} overflow-hidden mb-4`}>
                    <img
                        src={speaker.img}
                        alt={speaker.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <h3 className="font-orbitron text-white text-xs md:text-sm font-bold tracking-wide">
                    {speaker.name}
                </h3>
                <p className="font-rajdhani text-hud-cyan text-[0.6rem] md:text-xs tracking-widest mt-1 opacity-80">
                    {speaker.role}
                </p>
                <p className="font-rajdhani text-titanium text-[0.6rem] md:text-xs mt-2 max-w-[160px] leading-relaxed opacity-70">
                    {speaker.desc}
                </p>
            </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Speakers;