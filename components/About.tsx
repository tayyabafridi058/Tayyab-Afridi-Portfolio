import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-foreground text-white rounded-[2.5rem] my-12 mx-4 md:mx-12 overflow-hidden relative">
      {/* Abstract Background Shapes */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-start/20 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"
      ></motion.div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row gap-16 items-center">
        
        {/* Left: Philosophy */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
            "Design is not just what it looks like and feels like. Design is how it works. I strive to create interfaces that are intuitive, accessible, and delightful."
          </h2>
          <div className="flex flex-col gap-1">
             <p className="font-signature text-3xl text-accent-start">Tayyab Afridi</p>
             <p className="text-sm uppercase tracking-widest text-muted">Web Dev & Marketing Expert</p>
          </div>
        </motion.div>

        {/* Right: Metrics & Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex-1 w-full"
        >
           <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Total Projects', val: '30+' },
                { label: 'Years Exp.', val: '03' },
                { label: 'Client Rating', val: '5.0', hasStar: true },
                { label: 'Intl Awards', val: '03' }
              ].map((m, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center"
                >
                   <div className="flex justify-center items-center gap-1 mb-1">
                      <h3 className="text-4xl md:text-5xl font-black">{m.val}</h3>
                      {m.hasStar && <Star className="text-accent-start fill-accent-start w-6 h-6" />}
                   </div>
                   <p className="text-sm text-gray-400 uppercase tracking-wider">{m.label}</p>
                </motion.div>
              ))}
           </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;