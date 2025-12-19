import React from 'react';
import { ArrowDownRight, Award, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[95vh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-background">
      
      {/* Background Big Text */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none select-none"
      >
        <h1 className="text-[18vw] leading-none font-black text-white tracking-tighter">
          DEVELOPER
        </h1>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="order-2 md:order-1 flex flex-col gap-8 md:pr-12"
        >
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wide text-muted">Available for work</span>
            </motion.div>
            <h2 className="text-5xl md:text-8xl font-extrabold tracking-tight uppercase leading-[0.85]">
              WEB DEV,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-start to-accent-end">MARKETING</span>,<br />
              AI AGENTS.
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-muted max-w-md leading-relaxed">
            Creative web developer & digital marketer focused on results. Crafting engaging websites & AI solutions that drive growth and elevate brands.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-4 rounded-2xl shadow-sm border border-border flex items-center gap-4"
            >
               <div className="p-2 bg-background rounded-full text-foreground">
                 <Award size={20} />
               </div>
               <div>
                 <p className="text-[10px] text-muted uppercase font-black tracking-widest leading-none mb-1">Experience</p>
                 <p className="font-bold text-foreground">3+ Years</p>
               </div>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-4 rounded-2xl shadow-sm border border-border flex items-center gap-4"
            >
               <div className="p-2 bg-background rounded-full text-foreground">
                 <MapPin size={20} />
               </div>
               <div>
                 <p className="text-[10px] text-muted uppercase font-black tracking-widest leading-none mb-1">Location</p>
                 <p className="font-bold text-foreground">Pakistan</p>
               </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image Container */}
        <div className="order-1 md:order-2 relative flex justify-center items-center">
            {/* Animated Glow */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-tr from-accent-start to-accent-end rounded-full blur-[100px] scale-75"
            ></motion.div>
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0, rotate: 5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[320px] h-[320px] md:w-[480px] md:h-[480px] rounded-full overflow-hidden border-[10px] border-white shadow-2xl z-10"
            >
              <img 
                src="./assests/profile.png" 
                alt="Portrait" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-0 md:right-10 bg-foreground text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-xl rotate-12 z-20"
            >
              DEVELOPER
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-16 left-0 bg-white text-foreground px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-xl -rotate-6 border border-border z-20"
            >
              MARKETER
            </motion.div>

            {/* Signature Overlay */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
              className="absolute -bottom-6 -right-4 md:right-0 pointer-events-none z-30"
            >
              <span className="font-signature text-6xl md:text-9xl text-highlight block drop-shadow-md">
                Tayyab.
              </span>
            </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator - Smooth Clickable Jump */}
      <motion.a 
        href="#services"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 group cursor-pointer"
      >
        <div className="flex flex-col items-center gap-2">
           <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted group-hover:text-foreground transition-colors">Explore</span>
           <motion.div 
             animate={{ y: [0, 8, 0] }}
             transition={{ duration: 2, repeat: Infinity }}
             className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center shadow-md group-hover:bg-foreground group-hover:text-white transition-all duration-300"
           >
             <ArrowDownRight size={18} />
           </motion.div>
        </div>
      </motion.a>
    </section>
  );
};

export default Hero;