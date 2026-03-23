import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { navLinks } from "../constants";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-primary pt-16 pb-8 border-t border-white/5">
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-0 w-full h-[1px] violet-gradient opacity-20" />

      <div className={`${styles.paddingX} max-w-7xl mx-auto`}>
        <div className="flex flex-wrap justify-between gap-12 md:gap-24">
          
          {/* Column 1: Identity */}
          <div className="flex-1 min-w-[200px]">
            <h2 className="text-white text-[24px] font-bold tracking-wider">
              VISMAYA <span className="text-[#915EFF]">K S</span>
            </h2>
            <p className="mt-4 text-secondary text-[15px] leading-[24px]">
              3rd-year CS Student & Full-Stack Developer. <br />
              Building digital experiences with MERN & Django.
            </p>
          </div>

          {/* Column 2: Navigation */}
<div className="flex-1 min-w-[120px]">
  <h3 className="text-white text-[18px] font-semibold mb-6">Explore</h3>
  <ul className="list-none flex flex-col gap-3">
    {navLinks
      .filter((link) => link.id !== "skills") // This removes only the Skills link
      .map((link) => (
        <li key={link.id}>
          <a 
            href={`#${link.id}`} 
            className="text-secondary hover:text-[#915EFF] transition-colors text-[14px]"
          >
            {link.title}
          </a>
        </li>
      ))}
  </ul>
</div>

          {/* Column 3: Social Presence */}
          <div className="flex-1 min-w-[150px]">
            <h3 className="text-white text-[18px] font-semibold mb-6">Connect</h3>
            <div className="flex flex-col gap-4">
              <a 
                href="https://github.com/vismayaks28" 
                target="_blank" 
                rel="noreferrer"
                className="text-secondary hover:text-white flex items-center gap-2 text-[14px] transition-all"
              >
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/vismaya-ks-03937b291" 
                target="_blank" 
                rel="noreferrer"
                className="text-secondary hover:text-white flex items-center gap-2 text-[14px] transition-all"
              >
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-secondary text-[12px]">
            © 2026 Vismaya K S. Built with React & Three.js.
          </p>
          <p className="text-secondary text-[12px] italic opacity-60">
            Available for Internships
          </p>
        </div>
      </div>

      {/* Floating Back to Top */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 w-12 h-12 bg-[#915EFF] rounded-full shadow-[0_0_20px_rgba(145,94,255,0.4)] flex items-center justify-center text-white z-50 hover:bg-white hover:text-[#915EFF] transition-all cursor-pointer"
          >
            <span className="text-xl font-bold">↑</span>
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;