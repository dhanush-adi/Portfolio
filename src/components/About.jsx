import React from "react";
import Experience from "./Experience";
import gfg from "../assets/Images/gfglogo.png";
import vp from "../assets/Images/VARTAA.png";
import ck from "../assets/Images/download.jpeg";
import FooterV1 from "./FooterV1";
import { motion } from "motion/react";

const experience = [
  {
    id: 1,
    name: "GeeksForGeeks SRM RMP",
    position: "Core Member - Head of Operations",
    logo: gfg,
    sd: "Aug 2024",
    ed: "Apr 2025",
    time: "9 Months"
  },
  {
    id: 2,
    name: "Vartalaap Podcast",
    position: "Co-Founder & Host",
    logo: vp,
    sd: "Dec 2023",
    ed: "Mar 2024",
    time: "3 Months"
  },
  {
    id: 3,
    name: "Code Kraftors",
    position: "Web3 Domain Member",
    logo: ck,
    sd: "Nov 2022",
    ed: "Jul 2024",
    time: "1 Year 9 Months"
  },
];

const About = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Changed from fixed width to responsive width */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        {/* heading */}
        <div className="font-maga text-3xl sm:text-4xl py-4 font-bold">Information</div>

        {/* line  */}
        <hr className="border-gray-200 my-1" />

        {/* Mera Intro */}
        <div className="mb-8">
          <p className="font-sans py-3 sm:py-4" style={{ wordSpacing: "0.2rem" }}>
            Hey there — I'm a Computer Science & Engineering junior who codes best under the influence of caffeine and late-night deadlines. I'm deep into Web3 and blockchain, and currently sharpening my skills in competitive programming and web development. Most of my ideas start with a whiteboard and end with a Git commit… sometimes at 3AM with a can of Mountain Dew in hand. I build fast, break things occasionally, and learn even faster.
          </p>
        </div>

        {/* line  */}
        <hr className="border-gray-200 my-1" />

        {/* heading */}
        <div className="font-maga text-2xl sm:text-3xl py-4 font-bold">Experience</div>

        {/* experience wala section */}
        <motion.div initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}>
          {/* <Experience /> */}
          {experience.map((experience) => (
            <Experience
              key={experience.id}
              name={experience.name}
              position={experience.position}
              logo={experience.logo}
              sd={experience.sd}
              ed={experience.ed}
              time={experience.time}
            />
          ))}
        </motion.div>

        {/* resume section */}
        <div className="p-4 font-maga text-neutral-500">
          <a
            href="https://bit.ly/dhanushadithyan-resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>

        {/* line  */}
        <hr className="border-gray-200 my-1 mb-6" />

        <FooterV1 />
      </div>
    </div>
  );
};

export default About;