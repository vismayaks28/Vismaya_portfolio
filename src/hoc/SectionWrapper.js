import { motion } from "framer-motion";
import { styles } from "../styles";
import { staging } from "../utils/motion"; // Ensure this matches your motion.js exports

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.5 } } }}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}> &nbsp; </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;