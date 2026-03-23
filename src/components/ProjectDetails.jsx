import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ProjectDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allProjects = [
    {
      title: "AI-Powered Resume Analysis & ATS",
      status: "Backend Engine Complete | Integrating NLP Models",
      overview: "An intelligent recruitment tool that automates the screening process by scoring resumes against specific Job Descriptions using Natural Language Processing.",
      engineering: {
        database: "Relational PostgreSQL schema designed to store User Profiles, Parsed Resume Metadata, and Job Postings.",
        security: "Django's built-in authentication system enhanced with custom middleware.",
        logic: "Implemented TF-IDF vectorization and Cosine Similarity to calculate match percentages."
      },
      milestones: [
        "Automated Resume Parsing using PDFMiner",
        "NLP-driven Skill Gap Analysis",
        "RESTful API endpoints for Resume Upload"
      ],
    },
    {
      title: "ReadyUp — Startup Event Listing Platform",
      status: "Production Ready | Optimized for Event Discovery",
      tech: "PHP, JavaScript, HTML5, CSS3, MySQL",
      overview: "A collaborative web platform designed to categorize and display startup-related events, improving user accessibility through structured navigation and responsive design.",
      engineering: {
        database: "Relational MySQL schema optimized for event metadata, including time-sensitive indexing for upcoming startup sessions and workshops.",
        security: "Implemented server-side PHP validation for data entry and protected SQL queries against injection to ensure secure event management.",
        logic: "Dynamic Filtering System: Built a custom JavaScript engine to sort events by category and date without requiring a full page reload."
      },
      milestones: [
        "Fully responsive frontend with intuitive event categorization",
        "Robust PHP backend workflows for accurate data storage and delivery",
        "Dynamic interaction elements for enhanced user browsing engagement",
        "Optimized server-side performance for consistent data presentation"
      ],
    },
    {
      title: "SmartCollab — Enterprise Workspace",
      status: "Core API Development | WebSocket Integration Phase",
      tech: "MongoDB Atlas, Express.js, React, Node.js, Socket.io",
      overview: "A scalable team collaboration platform inspired by Jira, focusing on project hierarchies, task automation, and real-time activity tracking.",
      engineering: {
        database: "NoSQL 'Referential' Modeling: Projects contain Task ObjectIDs. Tasks use Mongoose 'Populate'.",
        security: "Stateless JWT authentication with HTTP-Only cookies. Implemented RBAC.",
        logic: "Event-driven architecture: Every task update triggers an 'ActivityLog' entry."
      },
      milestones: [
        "Modular MVC Backend Structure",
        "CRUD Operations for Projects and Tasks",
        "Middleware-based Authorization"
      ],
    }
  ];

  return (
    <div className='mt-12 flex flex-col gap-10'>
      <Link to="/" className='text-secondary hover:text-[#915EFF] transition-all font-medium flex items-center gap-2 w-fit'>
        <span>←</span> Back to Portfolio
      </Link>

      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Technical Case Studies.</h2>
        <p className='text-secondary mt-4 max-w-3xl leading-[30px]'>
          A comprehensive breakdown of the backend logic, database architecture, and security protocols across my major full-stack applications.
        </p>
      </motion.div>

      <div className='mt-10 flex flex-col gap-24'>
        {allProjects.map((project, index) => (
          <motion.div 
            key={index} 
            variants={fadeIn("up", "tween", 0.1, 1)}
            className="border-t border-white/10 pt-16 flex flex-col gap-8"
          >
            <div>
              <h3 className='text-white text-[32px] font-bold'>{project.title}</h3>
              <p className='text-[#915EFF] font-bold mt-2 text-[18px] uppercase tracking-wider'>{project.status}</p>
              <p className='text-secondary mt-6 text-[17px] max-w-4xl leading-[28px]'>{project.overview}</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
              <div className='bg-tertiary p-8 rounded-2xl border border-white/5 shadow-2xl'>
                <h4 className='text-white text-[22px] font-bold mb-6'>Technical Architecture</h4>
                <div className='flex flex-col gap-6'>
                  <div>
                    <span className='text-[#915EFF] font-bold text-[14px] uppercase'>Database Modeling</span>
                    <p className='text-secondary text-[16px] mt-2'>{project.engineering.database}</p>
                  </div>
                  <div>
                    <span className='text-[#915EFF] font-bold text-[14px] uppercase'>Security & Logic</span>
                    <p className='text-secondary text-[16px] mt-2'>{project.engineering.security}</p>
                  </div>
                  <div>
                     <span className='text-[#915EFF] font-bold text-[14px] uppercase'>Core Logic</span>
                     <p className='text-secondary text-[16px] mt-2'>{project.engineering.logic}</p>
                  </div>
                </div>
              </div>

              <div className='bg-tertiary p-8 rounded-2xl border border-white/5 shadow-2xl'>
                <h4 className='text-white text-[22px] font-bold mb-6'>Core Milestones</h4>
                <ul className='list-none flex flex-col gap-5'>
                  {project.milestones.map((item, i) => (
                    <li key={i} className='flex items-start gap-3'>
                      <div className='w-2 h-2 rounded-full bg-[#915EFF] mt-2' />
                      <span className='text-secondary text-[16px]'>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(ProjectDetails, "");