import React, { useMemo } from 'react'
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { projects } from '../constants';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import { rightarrow, leftarrow } from '../assets';
import { DemoComputer } from './canvas';
import {github} from '../assets';
import CanvasLoader from "./Loader";
import { SectionWrapper } from '../hoc';


const projectCount = projects.length;


const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
  }, [selectedProjectIndex]);

  const currentProject = projects[selectedProjectIndex];

  const memoizedCanvas = useMemo(() => (
    <Canvas>
      <ambientLight intensity={Math.PI} />
      <directionalLight position={[10, 10, 5]} />
      <Center>
        <Suspense fallback={<CanvasLoader />}>
          <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
            <DemoComputer texture={currentProject.texture} />
          </group>
        </Suspense>
      </Center>
      <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
    </Canvas>
  ), []);

  return (
    <section>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>
      <div className='grid lg:grid-cols-2 grid-cols-1 mt-20 gap-5 w-full'>
        <div className='flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200'>
          <div className='absolute top-0 right-0'>
            <img
              src={projects[selectedProjectIndex].spotlight}
              alt='spotlight'
              className='w-full h-96 object-cover rounded-xl'
            />
          </div>
          <div className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg' style={currentProject.logoStyle}>
            {/* <img src={currentProject.logo} alt='logo' className='w-10 h-10 shadow-sm' /> */}
          </div>
          <div className='flex flex-col gap-5 text-white-600 my-5'>
            <p className='text-white text-2xl font-semibold animatedText'>{currentProject.title}</p>
            <p className='animatedText'>{currentProject.desc}</p>
            <p className='animatedText'>{currentProject.subdesc}</p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>

            <a
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer">
              <p>Github source</p>
              <img src={github} alt="arrow" className="w-3 h-3" />
            </a>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
              <img src={leftarrow} alt="left arrow" />
            </button>

            <button className="arrow-btn" onClick={() => handleNavigation('next')}>
              <img src={rightarrow} alt="right arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          {memoizedCanvas}
        </div>
      </div>
    </section>
  )
}

export default SectionWrapper(Projects, "work");