import React from "react";
import { Facebook, Github, Linkedin, Twitter, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <>
      {/* ================= FOOTER ================= */}
      <footer className="relative pt-32 pb-48 px-6 overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4 pb-16">

            {/* Left */}
            <div className="flex-1 order-2 md:order-1 text-center md:text-left">
              <p className="text-[12px] font-bold text-foreground/60 tracking-tight">
                ©2025 Tayyab Afridi Inc. All Rights Reserved
              </p>
            </div>

            {/* Center */}
            <div className="flex-1 order-1 md:order-2 flex flex-col items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-foreground rounded-full flex items-center justify-center">
                  <span className="text-white font-black text-xs">T</span>
                </div>
                <span className="text-2xl font-black lowercase tracking-tighter italic">
                  Tayyab
                </span>
              </div>

              <div className="flex items-center gap-3">
                {[
                  { Icon: Github, href: "https://github.com/tayyabafridi058" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/tayyabafridi/" },
                  { Icon: Twitter, href: "https://x.com/itstayyabafridi" },
                  { Icon: Facebook, href: "https://facebook.com" },
                ].map(({ Icon, href }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    whileHover={{ y: -3 }}
                    className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-foreground hover:bg-foreground hover:text-white transition-all shadow-sm"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="flex-1 order-3 text-center md:text-right">
              <nav className="flex items-center justify-center md:justify-end gap-4 text-[12px] font-black uppercase tracking-widest text-foreground/80">
                <a href="#about" className="hover:text-accent-start">About</a>
                <span className="opacity-30 text-[10px]">.</span>
                <a href="#portfolio" className="hover:text-accent-start">Work</a>
                <span className="opacity-30 text-[10px]">.</span>
                <a href="#services" className="hover:text-accent-start">Services</a>
              </nav>
            </div>
          </div>
        </div>

        {/* Background Text */}
        <div className="absolute bottom-[-18%] left-0 w-full z-0 pointer-events-none text-center">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 0.35, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-[22vw] font-black text-white uppercase tracking-tighter"
          >
            Tayyab
          </motion.h2>
        </div>
      </footer>

      {/* ================= FLOATING WHATSAPP GLASS TOGGLE ================= */}
      <motion.a
        href="https://wa.me/923359382096"
        target="_blank"
        aria-label="Chat on WhatsApp"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="
      fixed bottom-8 right-8 z-[9999]
      h-14 w-14 rounded-full
      flex items-center justify-center
      backdrop-blur-[24px]
      bg-white/20
      border border-white/30
      shadow-[0_20px_40px_rgba(0,0,0,0.35)]
  "
      >
        {/* shine layer */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-transparent opacity-40" />

        {/* ICON — NO text-transparent */}
        <MessageCircle
          size={25}
          className="relative z-10 text-foreground"
        />
      </motion.a>

    </>
  );
};

export default Footer;
