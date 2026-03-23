import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certifications } from "../constants";

const CertificationCard = ({ index, name, issuer, date, description, icon, link }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className='bg-tertiary p-8 rounded-3xl sm:w-[360px] w-full border border-white/10 shadow-card hover:bg-black-100 transition-all'
  >
    <div className='flex justify-between items-start gap-2'>
      <img src={icon} alt={issuer} className='w-12 h-12 object-contain' />
      <p className='text-[#915EFF] font-bold text-[12px] uppercase'>{date}</p>
    </div>

    <div className='mt-5'>
      <h3 className='text-white font-bold text-[20px]'>{name}</h3>
      <p className='text-secondary font-semibold text-[14px] mt-1'>{issuer}</p>
    </div>

    <p className='mt-4 text-secondary text-[14px] leading-[22px] min-h-[66px]'>
      {description}
    </p>

    <div className='mt-6 pt-4 border-t border-white/5'>
      <button
        onClick={() => window.open(link, "_blank")}
        className='text-white text-[14px] font-medium py-2 px-4 rounded-lg bg-black-200 hover:bg-[#915EFF] transition-colors w-full border border-white/10'
      >
        View Certificate
      </button>
    </div>
  </motion.div>
);

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Verified Credentials</p>
        <h2 className={styles.sectionHeadText}>Certifications.</h2>
      </motion.div>

      <div className='mt-12 flex flex-wrap gap-8 justify-center lg:justify-start'>
        {certifications.map((cert, index) => (
          <CertificationCard key={`cert-${index}`} index={index} {...cert} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");