import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import vismaya from "../assets/vismaya.png"; // Line 8

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{ max: 45, scale: 1, speed: 450 }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img src={icon} alt='web-development' className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* This wrapper keeps your photo and text side-by-side on desktop */}
      <div className='mt-10 flex flex-col md:flex-row gap-10 items-center'>
        
        <motion.div 
          variants={fadeIn("right", "spring", 0.5, 0.75)}
          className='w-[250px] h-[250px] shrink-0'
        >
          <img 
            src={vismaya} // Changed from your_photo to vismaya
            alt='Vismaya' 
            className='w-full h-full rounded-2xl object-cover border-4 border-[#915EFF] shadow-card'
          />
        </motion.div>

        <motion.p
          variants={fadeIn("left", "spring", 0.5, 0.75)} // Updated for better entry
          className='text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          I am a Full-Stack Developer and 3rd-year Computer Science student with a focus 
  on building high-performance web applications. I specialize in the MERN Stack 
  and Django, blending academic theory with hands-on project experience. 
  Beyond development, I serve as a Computer Science tutor, teaching students 
  programming fundamentals and core logic. I’m passionate about 
  solving intricate problems and constantly expanding my toolkit to build 
  scalable, user-centric solutions.
        </motion.p>
      </div> {/* Added this closing div tag */}

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");