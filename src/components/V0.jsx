import gfg from "../assets/Images/gfglogo.png";
import dp from "../assets/Images/Orginal.jpg";
import V0exp from "./V0exp"; // Assuming V0exp handles its own responsiveness
import vp from "../assets/Images/VARTAA.png";
import ck from "../assets/Images/download.jpeg";
import V0skills from "./V0skills"; // Assuming V0skills handles its own responsiveness
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconCode,
} from "@tabler/icons-react";
import V0projectCard from "./V0projectCard"; // This component needs careful attention for responsiveness
import ethlinkImg from "../assets/Images/image.png";
import orbitus from "../assets/Images/83262276-ed3d-4038-83e9-4798ff38811c.png";
import paste from "../assets/Images/paste.png";
import game from "../assets/Images/game.png";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import V0Github from "./V0Github";
import weather from "../assets/Images/weather.png";
import GitHubCalendar from "react-github-calendar";
import HeikiBackground from "../components/HeikiBackground";

const projects = [
  {
    id: 1,
    name: "Web3 Gig Platform",
    detail:
      "A decentralized platform for freelance work powered by blockchain technology. Built with TypeScript and Web3 technologies.",
    logo: orbitus,
    url: "https://github.com/dhanush-adi/Web3-gig-platform",
    techStack: ["TypeScript", "Web3", "Blockchain", "Smart Contracts"],
    githubUrl: "https://github.com/dhanush-adi/Web3-gig-platform",
  },
  {
    id: 2,
    name: "Reclaim",
    detail:
      "A comprehensive TypeScript application with MIT license. Features modern development practices and clean architecture.",
    logo: paste,
    url: "https://github.com/dhanush-adi/Reclaim",
    techStack: ["TypeScript", "MIT License", "Clean Architecture"],
    githubUrl: "https://github.com/dhanush-adi/Reclaim",
  },
  {
    id: 3,
    name: "Blockchain Microinsurance",
    detail:
      "A blockchain-based microinsurance platform built with TypeScript. Provides decentralized insurance solutions.",
    logo: ethlinkImg,
    url: "https://github.com/dhanush-adi/Blochchain-Microinsurance",
    techStack: ["TypeScript", "Blockchain", "Insurance", "DeFi"],
    githubUrl: "https://github.com/dhanush-adi/Blochchain-Microinsurance",
  },
  
  {
      id: 4,
      name: "DeFy25 Petition Onchain",
      detail:
        "An on-chain petition system built for DeFy25. Enables transparent and immutable petition creation and voting.",
      logo: weather,
      url: "https://github.com/dhanush-adi/DeFy25-Petition_Onchain",
      techStack: ["JavaScript", "Blockchain", "Smart Contracts", "DeFi"],
      githubUrl: "https://github.com/dhanush-adi/DeFy25-Petition_Onchain",
    },
];

const exp = [
  {
    id: 1,
    name: "GeeksForGeeks SRM RMP",
    position: "Core Member - Head of Operations",
    logo: gfg,
    sd: "Aug 2024",
    ed: "Apr 2025",
  },
  {
    id: 2,
    name: "Vartalaap Podcast",
    position: "Host & Co-Founder",
    logo: vp,
    sd: "Dec 2023",
    ed: "Mar 2024",
  },
  {
    id: 3,
    name: "Code Kraftors",
    position: "Web3 Domain Member",
    logo: ck,
    sd: "Nov 2022",
    ed: "Jul 2024",
  },
];

const V0 = () => {
  return (
    <div className="w-full min-h-screen relative">
      {/* main section */}
      {/* Added responsive padding px-4 for smaller screens, p-8 for larger */}
      <div className="max-w-2xl mx-auto  px-4 sm:px-8 relative">
        {/* naming and intro */}
        {/* Changed flex direction to column on small screens, row on medium and up */}
        <div className="flex flex-col sm:flex-row p-4 sm:p-8 items-center sm:items-start text-center sm:text-left">
          {/* right side */}
          {/* Adjusted width for smaller screens, added margin-top for separation */}
          <motion.div
            className="w-full sm:w-[30%] flex justify-center sm:justify-center items-center py-4 sm:py-2 mt-6 sm:mt-0 "
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            <img
              src={dp}
              alt="Dhanush Adithyan"
              className="h-20 w-20 sm:h-27 sm:w-27 rounded-4xl aspect-square shadow-[0_4px_30px_rgba(255,255,255,0.25)]"
            />
          </motion.div>
          {/* left side */}
          {/* Adjusted width for smaller screens, text alignment */}
          <div className="w-full sm:w-[70%] flex justify-center sm:justify-end items-center">
            {/* content div */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="text-center sm:text-left"
            >
              <p className="text-lg sm:text-xl font-medium text-white tracking-tighter">
                Hi, I'm
              </p>
              {/* Adjusted font size for different screens */}
              <h1 className="text-4xl sm:text-[3rem] font-bold text-white tracking-tighter">
                Dhanush Adithyan
              </h1>
              <p className="text-neutral-400 tracking-tight text-sm sm:text-base">
                20, Chennai | Developer - Problem Solver
              </p>
            </motion.div>
          </div>
        </div>

        {/* about section */}
        {/* Adjusted padding */}
        <motion.div
          className="px-4 sm:px-8 mt-4 sm:mt-0"
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <h1 className="text-white font-semibold text-lg sm:text-xl mb-2">
            About
          </h1>
          <p className="text-neutral-400 tracking-tight text-sm sm:text-base">
            Hey there — I'm a Computer Science & Engineering junior who codes best under the influence of caffeine and late-night deadlines. I'm deep into Web3 and blockchain, and currently sharpening my skills in competitive programming and web development. Most of my ideas start with a whiteboard and end with a Git commit… sometimes at 3AM with a can of Mountain Dew in hand. I build fast, break things occasionally, and learn even faster.
          </p>
        </motion.div>

        {/* Experience */}
        <motion.div
          className="max-w-2xl px-4 sm:px-8" // Ensure consistent padding
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <h1 className="text-white font-semibold text-lg sm:text-xl mt-8 mb-4">
            Experiences
          </h1>

          {exp.map((e) => (
            <V0exp
              key={e.id}
              name={e.name}
              position={e.position}
              logo={e.logo}
              sd={e.sd}
              ed={e.ed}
            />
          ))}
        </motion.div>

        {/* guthub contribution calndar  */}
        <V0Github />

        {/* skills section */}
        <motion.div
          className="px-4 sm:px-8" // Ensure consistent padding
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <V0skills />
        </motion.div>

        {/* Project sections */}
        <motion.div
          className="px-4 sm:px-8"
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <h1 className="text-white font-semibold text-lg sm:text-xl mt-8 mb-4">
            Projects
          </h1>

          <div className="flex justify-center">
            {/* Adjusted grid for responsiveness: 1 column on small, 2 on medium and up */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              {projects.map((pr) => (
                <V0projectCard
                  key={pr.id}
                  name={pr.name}
                  logo={pr.logo}
                  detail={pr.detail}
                  url={pr.url}
                  techStack={pr.techStack}
                  githubUrl={pr.githubUrl}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <div>
          <div className="font-saans flex gap-3 justify-center pt-8 hover:scale-110 duration-300">
            <NavLink
              to="/projects"
              className="text-[12px] text-white sm:text-sm font-medium font-saans hover:bg-neutral-700 px-2 rounded"
            >
              View All Projects
            </NavLink>
          </div>
        </div>

        {/* Get in touch */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="flex justify-center items-center mt-10 flex-col px-4 sm:px-8 pb-10"
        >
          {/* Adjusted font size for responsiveness */}
          <h1 className="text-white text-3xl sm:text-4xl font-bold">
            Get in Touch
          </h1>

          <div className="flex gap-3 pt-8">
            <a
              href="https://x.com/Dhanush1785"
              className="hover:underline font-saans"
              aria-label="Link to Twitter profile"
            >
              <IconBrandX stroke={1} color="white" size={24} />{" "}
              {/* Added size for consistency */}
            </a>

            <a
              href="https://github.com/dhanush-adi"
              className="hover:underline font-saans"
              aria-label="Link to GitHub profile"
            >
              <IconBrandGithub stroke={1} color="white" size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/dhanush-adithyan/"
              className="hover:underline font-saans"
              aria-label="Link to LinkedIn profile"
            >
              <IconBrandLinkedin stroke={1} color="white" size={24} />
            </a>

            <a
              href="https://codolio.com/profile/dhanush_adi"
              className="hover:underline font-saans"
              aria-label="Link to Codolio profile"
            >
              <IconCode stroke={1} color="white" size={24} />
            </a>
          </div>
        </motion.div>

        <div className="text-[10px] text-white flex justify-center   underline font-bold pb-10">
          <NavLink to="/version1" className="duration-300">
            Version 1
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default V0;
