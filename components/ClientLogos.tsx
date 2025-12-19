import React from 'react';
import { Box, Triangle, Circle, Hexagon, Zap, Command } from 'lucide-react';

const ClientLogos: React.FC = () => {
  const logos = [
    { icon: <Box size={32} />, name: 'Dropbox' },
    { icon: <Triangle size={32} />, name: 'Vercel' },
    { icon: <Circle size={32} />, name: 'Circle' },
    { icon: <Hexagon size={32} />, name: 'Linear' },
    { icon: <Zap size={32} />, name: 'Raycast' },
    { icon: <Command size={32} />, name: 'Apple' },
  ];

  return (
    <section className="py-12 border-y border-white/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           {logos.map((logo, idx) => (
               <div key={idx} className="flex items-center gap-2 group">
                   <span className="group-hover:text-accent-start transition-colors">{logo.icon}</span>
                   <span className="font-bold text-xl hidden md:block">{logo.name}</span>
               </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;