import React, {useState} from 'react';
import { motion } from 'framer-motion';
import Button  from './Button';
import Globe from 'react-globe.gl';
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from '../hoc';

import grid1 from '../assets/grid1.png';
import grid2 from '../assets/grid2.png';
import grid3 from '../assets/grid3.png';
import grid4 from '../assets/grid4.png';
import copy from '../assets/copy.svg';
import tick from '../assets/tick.svg';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  var index = 0;
  const handleCopy = () => {
    navigator.clipboard.writeText('fykhan2002@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className='col-span-1 xl:row-span-3'>
          <div className='w-full'>
            <motion.div
              variants={fadeIn("right", "spring", ++index*0.5, 0.75)}
              initial="initial"
              animate="animate"
              className='grid-container p-4 sm:p-6'
            >
              <img src={grid1} alt='grid-1' className='w-full sm:h-[276px] h-fit object-contain' />
              <div>
                <p className='grid-headtext'>About me</p>
                <p className='grid-subtext'>
                  Currently I'm a Computer Science Student at the University of Hong Kong. With 5+ years of coding experience, I'm passionate about anything tech.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className='col-span-1 xl:row-span-3'>
          <div className='w-full'>
            <motion.div
              variants={fadeIn("right", "spring", ++index, 0.75)}
              initial="initial"
              animate="animate"
              className='grid-container'
            >
              <img src={grid2} alt='grid-2' className='w-full sm:h-[276px] h-fit object-contain' />
              <div>
                <p className='grid-headtext'>Tech Stack</p>
                <p className='grid-subtext'>
                  I am passionate about Machine Learning, Web Development, Data Analysis, Database Management and more. Aside from these, I'm always willing to learn new technologies. Look below to see the technologies I am proficient in.
                </p>                  
              </div>
            </motion.div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className='w-full'>
            <motion.div
              variants={fadeIn("right", "spring", ++index*0.5, 0.75)}
              initial="initial"
              animate="animate"
              className='grid-container'
            >
              <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                <Globe
                  height={326}
                  width={326}
                  backgroundColor="rgba(0, 0, 0, 0)"
                  backgroundImageOpacity={0.5}
                  showAtmosphere
                  showGraticules
                  globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                  bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                  labelsData={[{ lat: 22.3193, lng: 114.1694, text: 'Hong Kong', color: 'white', size: 150 }, { lat: 23.685, lng: 90.3563, text: 'Bangladesh', color: 'white', size: 150 }]}
                  initialCoordinates={[22.3193, 114.1694]} 
                />
              </div>
              <div>
                <p className="grid-subtext">I’m born in Bangladesh and based in Hong Kong </p>
                <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className='w-full'>
            <motion.div
              variants={fadeIn("right", "spring", ++index*0.5, 0.75)}
              initial="initial"
              animate="animate"
              className='grid-container'
            >
              <img src={grid3} alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
              <div>
                <p className="grid-headtext">My Passion for Coding</p>
                <p className="grid-subtext">
                  I love solving problems and building things through code. Programming isn&apos;t just my
                  profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className='w-full'>
            <motion.div
              variants={fadeIn("right", "spring", ++index*0.5, 0.75)}
              initial="initial"
              animate="animate"
              className='grid-container'
            >
              <img
                src={grid4}
                alt="grid-4"
                className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
              />
              <div className="space-y-2">
                <p className="grid-subtext text-center">Contact me</p>
                <div className="copy-container" onClick={handleCopy}>
                  <img src={hasCopied ? tick : copy} alt="copy" />
                  <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white">fykhan2002@gmail.com</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(About, 'about');