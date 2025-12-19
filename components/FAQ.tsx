import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "What services do you offer?", a: "I provide web development, digital marketing, social media marketing, and complete e-commerce setup services." },
    { q: "How long does a project usually take?", a: "Project timelines vary, but most websites and marketing setups are completed within 1–3 weeks." },
    { q: "Do you provide support after project completion?", a: "Yes, I offer post-launch support to ensure everything runs smoothly and stays updated." },
    { q: "How can I get started or request a quote?", a: "You can contact me through the website or message me directly to discuss your project requirements." },
  ];

  return (
    <section className="py-24 max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold uppercase mb-4">Questions & Answers</h2>
        <p className="text-muted">Everything you need to know about working with me.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl overflow-hidden border border-transparent hover:border-border transition-colors">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
              <span className="text-lg font-bold text-foreground">{item.q}</span>
              <span className="text-muted">
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </span>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  <div className="px-6 pb-6 pt-0 text-muted leading-relaxed">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;