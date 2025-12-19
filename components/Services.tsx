import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const servicesData = [
  {
    id: 1,
    title: 'Web Development',
    description: 'I create fast, responsive, and user-friendly websites that convert visitors into customers. shopify, wordpress, custom builds.',
  },
  {
    id: 2,
    title: 'Digital Marketing',
    description: 'I help businesses grow online through data-driven strategies and targeted campaigns.',
  },
  {
    id: 3,
    title: 'Social Media Marketing',
    description: 'I manage and optimize social platforms to increase engagement, reach, and brand trust.',
  },
  {
    id: 4,
    title: 'E-Commerce Setup',
    description: 'I set up complete online stores with smooth checkout, product management, and payment integration.',
  },
   {
    id: 5,
    title: 'E-Commerce Setup',
    description: 'I set up complete online stores with smooth checkout, product management, and payment integration.',
  },
   {
    id: 6,
    title: 'E-Commerce Setup',
    description: 'I set up complete online stores with smooth checkout, product management, and payment integration.',
  }
];

const Services: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(2);

  return (
    <section id="services" className="relative w-full pt-28 md:pt-48 pb-12 bg-background overflow-hidden">
      {/* Background Title - Centered Alignment */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 0.35, y: -16 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute top-0 left-0 w-full z-0 pointer-events-none select-none leading-none text-center"
      >
        <h2 className="text-[22vw] md:text-[18vw] font-black text-white uppercase tracking-tighter inline-block">
          Service
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Label */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-end mb-4"
        >
            <div className="flex items-center gap-2">
                <span className="text-sm font-black uppercase tracking-widest text-foreground">Services</span>
                <span className="w-1.5 h-4 bg-accent-start block"></span>
            </div>
        </motion.div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {servicesData.map((service, index) => (
            <motion.div 
              key={service.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button 
                onClick={() => setOpenId(openId === service.id ? null : service.id)}
                className="w-full flex items-center justify-between p-8 md:p-12 text-left focus:outline-none group"
              >
                <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-foreground group-hover:text-black/80 transition-colors">
                  {service.title}
                </h3>
                
                {/* Custom Icon */}
                <div className="relative w-8 h-8 md:w-12 md:h-12 flex items-center justify-center">
                    {/* Horizontal Line */}
                    <span className="absolute w-full h-[2px] md:h-[3px] bg-foreground"></span>
                    {/* Vertical Line */}
                    <span 
                        className={`absolute w-full h-[2px] md:h-[3px] bg-foreground transition-transform duration-300 ${
                            openId === service.id ? 'rotate-90 scale-0' : 'rotate-90 scale-100'
                        }`}
                    ></span>
                </div>
              </button>
              
              <AnimatePresence>
                {openId === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 md:px-12 pb-12 pt-0">
                      <p className="text-lg md:text-2xl font-medium text-muted max-w-4xl leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;