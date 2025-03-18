import React, { useState } from "react";
import { motion } from "framer-motion";
import Globe from "react-globe.gl";
import Lottie from "react-lottie";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { grid1, grid3, grid4, linkedin, github, techstack, contact } from "../assets";
import copy from "../assets/copy.svg";
import tick from "../assets/tick.svg";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  var index = 0;

  const handleCopy = () => {
    navigator.clipboard.writeText("fykhan2002@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: techstack,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: contact,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* GRID SYSTEM */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 h-full px-6 py-10">

        {/* About Me */}
        <div className="col-span-1 md:col-span-2 xl:col-span-2 row-span-2">
          <motion.div className="grid-container h-full flex flex-col justify-between">
            <div className="w-full flex justify-center">
              <img 
                src={grid4} 
                alt="About Me" 
                className="w-auto max-h-[280px] object-contain mx-auto rounded-lg"
              />
            </div>
            <div>
              <p className="grid-headtext">About Me</p>
              <p className="grid-subtext">
                I am a Computer Science Student at the University of Hong Kong with 5+ years of coding experience.
                Passionate about anything tech, always exploring new ideas.
              </p>
            </div>
          </motion.div>
        </div>

        {/* More Facts */}
        <div className="col-span-1 md:col-span-2 xl:col-span-3 xl:row-span-2">
          <motion.div className="grid-container h-full">
            <img src={grid3} alt="More Facts" className="w-full sm:h-[280px] h-full object-contain rounded-lg" />
            <div>
              <p className="grid-headtext">Some Fun Facts</p>
              <ul className="grid-subtext list-disc list-inside space-y-2">
                <li>As a Manchester United Fan, I've been through a lot.</li>
                <li>I've rewatched The Office an unhealthy number of times</li>
                <li>
                  A mantra I try to live by: "Be kind, be forgiving, but don't be a pushover", Inspired by&nbsp;
                  <a 
                    href="https://www.youtube.com/watch?v=mScpHTIi-kM" 
                    className="underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Game Theory
                  </a>
                </li>              
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Globe Section */}
        <div className="col-span-1 md:col-span-1 xl:col-span-1 row-span-1 flex items-center justify-center">
          <motion.div className="grid-container h-full flex flex-col items-center justify-center">
            <div className="w-full flex justify-center">
              <Globe
                height={200}
                width={200}
                backgroundColor="rgba(0, 0, 0, 0)"
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                showAtmosphere
                showGraticules
              />
            </div>
            <p className="grid-subtext text-center">
              I was born in Bangladesh and currently based in Hong Kong.
            </p>
          </motion.div>
        </div>

        {/* Tech Stack - Lottie Animation */}
        <div className="col-span-1 md:col-span-1 xl:col-span-2 row-span-1">
          <motion.div className="grid-container h-full flex flex-col items-center justify-center">
            <Lottie options={defaultOptions1} height={200} width={200} className="w-full max-w-[200px] mx-auto" />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I'm currently working on projects related to Machine Learning, Web Development, and Data Analysis.
                Always eager to learn new technologies.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Contact Me - Fixed */}
        <div className="col-span-1 md:col-span-2 xl:col-span-2 flex items-center">
          <motion.div className="grid-container w-full flex flex-col items-center justify-center space-y-4">
            <Lottie options={defaultOptions2} height={150} width={150} className="w-full max-w-[150px] mx-auto" />
            <p className="grid-headtext text-center">Get in touch</p>
            <div className="copy-container w-full max-w-xs px-4 py-2 bg-black-500 rounded-lg flex items-center justify-center cursor-pointer" onClick={handleCopy}>
              <img src={hasCopied ? tick : copy} alt="copy" className="mr-2" />
              <p className="lg:text-lg md:text-md font-medium text-gray_gradient text-white truncate">
                fykhan2002@gmail.com
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4">
              <div className="flex gap-1">
                <a href="https://github.com/fykhan" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <img src={github} alt="github" className="w-1/2 h-1/2" />
                </a>
                <a href="https://linkedin.com/in/farhan-yusuf-khan" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <img src={linkedin} alt="linkedin" className="w-1/2 h-1/2" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
