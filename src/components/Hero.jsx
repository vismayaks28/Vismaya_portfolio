import React, { useState } from "react"; // Added useState
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { resume } from "../constants"; 

const Hero = () => {
  const [showToast, setShowToast] = useState(false);

  const handleDownload = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#915EFF] opacity-20 blur-[120px] rounded-full z-0" />
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Vismaya K S </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Full-Stack Developer specializing in Django, MERN Stack, <br className='sm:block hidden' />
            Java and high-performance web applications.
          </p>
          
          <div className='mt-8 flex gap-5 z-10 relative'> 
            {/* Added z-10 and relative to ensure buttons are clickable over the 3D canvas */}
            <a
              href={resume}
              download="vismaya_Resume.pdf"
              onClick={handleDownload} // Added trigger for toast
              className='bg-[#915EFF] p-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-white hover:text-[#915EFF] transition-all'
            >
              Download CV
            </a>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className='border border-[#915EFF] p-3 px-8 rounded-xl outline-none w-fit text-white font-bold hover:bg-[#915EFF]/10 transition-all'
            >
              Hire Me
            </button>
          </div>

          {/* LOCAL TOAST FOR HERO SECTION */}
          {showToast && (
            <div className='mt-4 bg-[#915EFF] text-white px-4 py-2 rounded-lg shadow-lg w-fit animate-pulse'>
              ✅ Download Started!
            </div>
          )}
        </div>
      </div>

      <div className='absolute inset-0 z-0 sm:left-[10%] left-0'>
   <ComputersCanvas />
</div>

      {/* SCROLL INDICATOR */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;