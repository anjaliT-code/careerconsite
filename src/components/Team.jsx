import React from 'react';
import { motion } from 'framer-motion';
import saransh from '../assets/team/saransh.jpg';
import anousha from '../assets/team/anousha.jpg';
import ansh from '../assets/team/ansh.jpg';
import akshat from '../assets/team/akshat.jpg';

const team = [
  { name: 'Saransh Jain', role: 'Organizer', handle: '@saranshjain', img: saransh, accent: '#4285F4' },
  { name: 'Anousha Singh', role: 'Co-Organizer', handle: '@anoushasingh', img: anousha, accent: '#34A853' },
  { name: 'Ansh Singhal', role: 'Co-Organizer', handle: '@anshsinghal', img: ansh, accent: '#EA4335' },
  { name: 'Akshat Saini', role: 'Co-Organizer', handle: '@akshatsaini', img: akshat, accent: '#FBBC05' },
];

const Team = () => {
  return (
    <section id="team" className="relative bg-void-black py-24 px-6">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-rajdhani text-hud-cyan tracking-[0.5em] text-xs uppercase"
        >
          The People Behind It
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-orbitron text-white text-3xl md:text-5xl font-bold mt-3 tracking-widest"
        >
          MEET THE TEAM
        </motion.h2>
        <div className="w-16 h-[2px] bg-hud-cyan mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -6 }}
            className="flex flex-col overflow-hidden rounded-lg group"
            style={{ border: `2px solid ${member.accent}33` }}
          >
            {/* Square Photo */}
            <div className="relative w-full aspect-square overflow-hidden">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Color overlay at bottom */}
              <div
                className="absolute bottom-0 left-0 w-full h-1"
                style={{ background: member.accent }}
              />
            </div>

            {/* Info Box */}
            <div
              className="p-4 flex flex-col items-center text-center"
              style={{ background: `${member.accent}15` }}
            >
              <h3 className="font-orbitron text-white text-xs font-bold tracking-wide">
                {member.name}
              </h3>
              <p className="font-rajdhani text-[0.6rem] tracking-widest mt-1 uppercase"
                style={{ color: member.accent }}>
                {member.role}
              </p>
              <p className="font-rajdhani text-titanium text-[0.55rem] mt-1 opacity-60">
                {member.handle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;