import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const SkillCard = ({ index, name, icon, level, category }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.75)}
    className='bg-tertiary p-6 rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-4 shadow-card hover:bg-black-100 transition-all cursor-default group'
  >
    {/* Icon Placeholder - Replace with your logic if you have specific icons */}
    <div className='w-12 h-12 flex items-center justify-center bg-black-200 rounded-full group-hover:bg-[#915EFF] transition-colors duration-300'>
      <span className='text-white font-bold text-xl'>{name.charAt(0)}</span>
    </div>

    <div className='text-center'>
      <h3 className='text-white text-[18px] font-bold'>{name}</h3>
      <p className='text-secondary text-[12px] uppercase tracking-wider'>{category}</p>
    </div>
    
    <div className='w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden'>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: level }} 
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className='bg-[#915EFF] h-full rounded-full'
      />
    </div>
  </motion.div>
);

const SkillsPage = () => {
  const technicalSkills = [
    { name: "Java", level: "90%", category: "Language" },
    { name: "PHP", level: "82%", category: "Backend" },
    { name: "C / C++", level: "85%", category: "Language" },
    { name: "Django", level: "80%", category: "Backend" },
    { name: "MERN Stack", level: "90%", category: "Full Stack" },
    { name: "MySQL", level: "85%", category: "Database" },
    { name: "DSA", level: "88%", category: "Logic" },
    { name: "MongoDB", level: "85%", category: "Database" },
    { name: "Node.js", level: "82%", category: "Backend" },
  ];

  const softSkills = [
    { name: "Problem Solving", level: "95%", category: "Soft Skill" },
    { name: "Teamwork", level: "90%", category: "Soft Skill" },
    { name: "Adaptability", level: "85%", category: "Soft Skill" },
    { name: "Communication", level: "88%", category: "Soft Skill" },
  ];

  return (
    <div className='flex flex-col gap-10'>
      {/* Back Button */}
      <motion.div variants={textVariant()}>
        <Link 
          to="/" 
          className='text-secondary hover:text-[#915EFF] transition-all flex items-center gap-2 mb-10 w-fit'
        >
          <span>←</span> Back to Home
        </Link>
        
        <p className={styles.sectionSubText}>My Technical Arsenal & Personal Qualities</p>
        <h2 className={styles.sectionHeadText}>Skills & Expertise.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        My expertise spans across high-performance languages like **Java** and **C**, modern web frameworks like the **MERN Stack** and **Django**, and a deep focus on **Data Structures & Algorithms (DSA)** to ensure code efficiency and scalability.
      </motion.p>

      {/* Technical Skills Grid */}
      <div className='mt-10'>
        <h3 className='text-white text-[24px] font-bold mb-8 flex items-center gap-4'>
          <div className='h-[2px] w-12 bg-[#915EFF]' /> Technical Skills
        </h3>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-7'>
          {technicalSkills.map((tech, index) => (
            <SkillCard key={tech.name} index={index} {...tech} />
          ))}
        </div>
      </div>

      {/* Soft Skills Grid */}
      <div className='mt-16'>
        <h3 className='text-white text-[24px] font-bold mb-8 flex items-center gap-4'>
          <div className='h-[2px] w-12 bg-[#915EFF]' /> Soft Skills
        </h3>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-7'>
          {softSkills.map((skill, index) => (
            <SkillCard key={skill.name} index={index + technicalSkills.length} {...skill} />
          ))}
        </div>
      </div>

      {/* Bottom Technical Briefing */}
      <motion.div 
        variants={fadeIn("up", "tween", 0.5, 1)}
        className='mt-20 p-10 bg-black-100 rounded-3xl border-l-8 border-[#915EFF]'
      >
        <h3 className='text-white font-bold text-[24px] mb-6'>Core Competencies</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <h4 className='text-[#915EFF] font-bold mb-2'>Logic & Algorithms</h4>
            <p className='text-secondary text-[15px]'>
              Expertise in **DSA** and **Java OOPs** for solving complex computational problems efficiently.
            </p>
          </div>
          <div>
            <h4 className='text-[#915EFF] font-bold mb-2'>Full-Stack Development</h4>
            <p className='text-secondary text-[15px]'>
              Building end-to-end applications using the **MERN Stack** and **Django**, focusing on RESTful architecture.
            </p>
          </div>
          <div>
            <h4 className='text-[#915EFF] font-bold mb-2'>Data Management</h4>
            <p className='text-secondary text-[15px]'>
              Architecting secure and optimized databases using **MySQL** (Relational) and **MongoDB** (NoSQL).
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(SkillsPage, "");