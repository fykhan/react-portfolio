import React, { useState, useMemo } from "react";

import { MeshCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { languages, technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";


const Tech = () => {
  const [showLanguages, setShowLanguages] = useState(true);

  const languageCanvases = useMemo(() => (
    languages.map((language) => (
      <div className='w-28 h-28' key={language.name}>
        <MeshCanvas icon={language.icon} />
      </div>
    ))
  ), []);

  const technologyCanvases = useMemo(() => (
    technologies.map((technology) => (
      <div className='w-20 h-20' key={technology.name}>
        <MeshCanvas icon={technology.icon} />
      </div>
    ))
  ), []);

  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionHeadText} text-center`}>
          Skills
        </p>
        <div className="flex justify-center gap-10 mt-10">
          <button 
            className={`${styles.button} ${showLanguages ? styles.activeButton : ""}`} 
            onClick={() => setShowLanguages(true)}
          >
            Languages
          </button>
          <button 
            className={`${styles.button} ${!showLanguages ? styles.activeButton : ""}`} 
            onClick={() => setShowLanguages(false)}
          >
            Tools
          </button>
        </div>
      </motion.div>
      {showLanguages ? (
        <>
          <motion.div variants={textVariant()}>
            <h2 className={`${styles.sectionSubText} text-center mt-20`}>
              Languages
            </h2>
          </motion.div>
          <div className='mt-20 flex flex-row flex-wrap justify-center gap-10'>
            {languageCanvases}
          </div>
        </>
      ) : (
        <>
          <motion.div variants={textVariant()}>
            <h2 className={`${styles.sectionSubText} text-center mt-20`}>
              Tools
            </h2>
          </motion.div>
          <div className='mt-20 flex flex-row flex-wrap justify-center gap-10'>
            {technologyCanvases}
          </div>
        </>
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "skills");
