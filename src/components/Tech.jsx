import React from "react";

import { MeshCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { languages } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";


const Tech = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionHeadText} text-center`}>
          Skills
        </p>
        <h2 className={`${styles.sectionSubText} text-center`}>
          Languages
        </h2>
      </motion.div>
      <div className='mt-20 flex flex-row flex-wrap justify-center gap-10'>
        {languages.map((language) => (
          <div className='w-28 h-28' key={language.name}>
            <MeshCanvas icon={language.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
