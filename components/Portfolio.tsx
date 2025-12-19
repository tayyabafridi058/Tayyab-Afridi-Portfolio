import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Brand',
    category: 'Marketing',
    image: './assests/ui1.webp',
    size: 'large'
  },
  {
    id: 2,
    title: 'Fitness Dashboard',
    category: 'Management App',
    image: './assests/ui4.webp',
    size: 'small'
  },
  {
    id: 3,
    title: 'E-commerce Setup',
    category: 'Product Design',
    image: './assests/Ecommer.webp',
    size: 'small'
  },
  {
    id: 4,
    title: 'Premium Portfolio',
    category: 'Web Development',
    image: './assests/ui3.webp',
    size: 'large'
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="relative w-full pt-20 md:pt-32 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Background Title */}
        {/* <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 0.4, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute top-0 left-0 w-full z-0 pointer-events-none select-none leading-none text-center"
        >
          <h2 className="text-[13vw] md:text-[14vw] font-black text-white uppercase tracking-tighter inline-block">
            Portfolio
          </h2>
        </motion.div> */}
        <motion.div 
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 0.35, y: -16 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2 }}
                      className="absolute top-0 left-0 w-full z-0 pointer-events-none select-none leading-none text-center padding-bottom-[10px]"
                    >
                      <h2 className="text-[22vw] md:text-[15vw] font-black text-white uppercase tracking-tighter inline-block">
                        Portfolio
                      </h2>
                    </motion.div>

        {/* Section Label + Action Link */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative z-10 flex justify-end items-start mb-12 md:mb-16"
        >
            <div className="flex flex-col items-end gap-2">
                <div className="flex items-center gap-2">
                    <span className="text-sm font-black uppercase tracking-widest text-foreground">Latest Work</span>
                    <span className="w-1.5 h-4 bg-accent-start block"></span>
                </div>
                <a href="#" className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest border-b border-foreground/20 pb-0.5 hover:text-accent-start hover:border-accent-start transition-colors group">
                  View All Projects <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
            </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`group relative rounded-[2rem] overflow-hidden cursor-pointer bg-white shadow-sm hover:shadow-xl transition-all duration-500 ${
                  index % 2 !== 0 ? 'md:mt-20' : ''
              }`}
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-10">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-4 py-1.5 bg-accent-start text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none mb-2">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Default visible info for mobile */}
              <div className="md:hidden p-6">
                 <h3 className="text-xl font-black uppercase tracking-tight">{project.title}</h3>
                 <p className="text-xs font-bold text-muted uppercase tracking-widest mt-1">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;