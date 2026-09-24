import dp from "../assets/Images/ProfilePic.jpg";
import ExperienceItem from "./ExperienceItem";
import ck from "../assets/Images/CK.jpeg";
import studio247 from "../assets/Images/247.png";
import SkillsDisplay from "./SkillsDisplay";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconCode,
} from "@tabler/icons-react";
import ProjectCardItem from "./ProjectCardItem";
import reclaim from "../assets/Images/reclaim.png";
import CreatorCoin from "../assets/Images/CreatorCoin.png";
import mediseal from "../assets/Images/Mediseal.jpg";
import hhgoa from "../assets/Images/HHG.png";
import zkSolvency from "../assets/Images/zk-solvency.png";
import sorosub from "../assets/Images/Sorosub.png";
import { motion } from "framer-motion";
import GithubContribution from "./GithubContribution";

const projects = [
  {
    id: 1,
    name: "Hacker House Goa",
    detail: "Landing page and registration platform for Hacker House Goa 2026.",
    logo: hhgoa,
    url: "https://hhgoa.com/",
    techStack: ["Next.js", "React", "Tailwind"],
    githubUrl: "https://github.com/dhanush-adi/hhgoa2026",
  },
  {
    id: 2,
    name: "Creator Coin",
    detail: "Launch your own token — create a custom digital asset for your community or brand.",
    logo: CreatorCoin,
    techStack: ["React", "Tailwind", "Avalanche"],
    githubUrl: "https://github.com/dhanush-adi/creator-coin",
  },
  {
    id: 3,
    name: "Reclaim",
    detail: "Find, Return, and Collect Your Bounty!",
    logo: reclaim,
    techStack: ["React", "Tailwind", "Solidity", "Web3"],
    githubUrl: "https://github.com/dhanush-adi/Reclaim",
  },
  {
    id: 4,
    name: "ZK-Solvency",
    detail: "Zero-knowledge solvency verification platform for centralized exchanges using zkTLS & zk-STARKs.",
    logo: zkSolvency,
    techStack: ["Next.js", "StarkNet", "Cairo", "zkTLS"],
    githubUrl: "https://github.com/dhanush-adi/zk-solvency",
  },
  {
    id: 5,
    name: "SoroSub",
    detail: "Decentralized recurring payment protocol with on-chain credit scoring and BNPL micro-loans on Stellar.",
    logo: sorosub,
    techStack: ["Next.js", "Soroban", "Stellar", "Rust"],
    githubUrl: "https://github.com/dhanush-adi/Sorosub",
  },
  {
    id: 6,
    name: "MediSeal",
    detail: "A blockchain-based pharmaceutical supply chain management system.",
    logo: mediseal,
    techStack: ["React", "Tailwind", "Solidity", "Web3"],
    githubUrl: "https://github.com/dhanush-adi/MediSeal",
  },
];

const experiences = [
  {
    id: 1,
    name: "HHG'26 | 2:47 PM Studio",
    position: "Tech Team Member",
    logo: studio247,
    startDate: "Mar 2026",
    endDate: "Present",
  },
  {
    id: 2,
    name: "Code Krafters",
    position: "Member → Lead → Head",
    logo: ck,
    startDate: "Nov 2023",
    endDate: "Aug 2026",
  },
];

const fadeUp = {
  initial: { opacity: 0, filter: "blur(10px)", y: 10 },
  whileInView: { opacity: 1, filter: "blur(0px)", y: 0 },
  transition: { duration: 0.3, ease: "easeInOut" },
};

const Home = () => {
  return (
    <div className="w-full min-h-screen relative">
      <div className="max-w-2xl mx-auto px-4 sm:px-8 relative">

        {/* Hero — name and intro */}
        <div className="flex flex-col sm:flex-row p-4 sm:p-8 items-center sm:items-start text-center sm:text-left">
          <motion.div
            className="w-full sm:w-[30%] flex justify-center items-center py-4 sm:py-2 mt-6 sm:mt-0"
            {...fadeUp}
          >
            <img
              src={dp}
              alt="Dhanush Adithyan"
              className="h-20 w-20 sm:h-27 sm:w-27 rounded-4xl aspect-square shadow-[0_4px_30px_rgba(255,255,255,0.25)]"
            />
          </motion.div>

          <div className="w-full sm:w-[70%] flex justify-center sm:justify-end items-center">
            <motion.div {...fadeUp} className="text-center sm:text-left">
              <p className="text-lg sm:text-xl font-medium text-white tracking-tighter">
                Hi, I'm
              </p>
              <h1 className="text-4xl sm:text-[3rem] font-bold text-white tracking-tighter">
                Dhanush Adithyan
              </h1>
              <p className="text-neutral-400 tracking-tight text-sm sm:text-base">
                Chennai / Bangalore — India · SRMIST · CSE
              </p>
            </motion.div>
          </div>
        </div>

        {/* About */}
        <motion.div className="px-4 sm:px-8 mt-4 sm:mt-0" {...fadeUp}>
          <h2 className="text-white font-semibold text-lg sm:text-xl mb-2">About</h2>
          <p className="text-neutral-400 tracking-tight text-sm sm:text-base">
            Computer Science & Engineering Student | Building Software, Full-Stack Apps & Web3 Projects | Exploring AI Tools & AI Agents
          </p>
        </motion.div>

        {/* Experience */}
        <motion.div className="max-w-2xl px-4 sm:px-8" {...fadeUp}>
          <h2 className="text-white font-semibold text-lg sm:text-xl mt-8 mb-4">Experience</h2>
          {experiences.map((experience) => (
            <ExperienceItem
              key={experience.id}
              name={experience.name}
              position={experience.position}
              logo={experience.logo}
              startDate={experience.startDate}
              endDate={experience.endDate}
            />
          ))}
        </motion.div>

        {/* GitHub Contribution Calendar */}
        <GithubContribution />

        {/* Skills */}
        <motion.div className="px-4 sm:px-8" {...fadeUp}>
          <SkillsDisplay />
        </motion.div>

        {/* Projects */}
        <motion.div className="px-4 sm:px-8" {...fadeUp}>
          <h2 className="text-white font-semibold text-lg sm:text-xl mt-8 mb-4">Projects</h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              {projects.map((project) => (
                <ProjectCardItem
                  key={project.id}
                  name={project.name}
                  logo={project.logo}
                  detail={project.detail}
                  url={project.url}
                  techStack={project.techStack}
                  githubUrl={project.githubUrl}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Get in Touch */}
        <motion.div
          {...fadeUp}
          className="flex justify-center items-center mt-10 flex-col px-4 sm:px-8 pb-10"
        >
          <h2 className="text-white text-3xl sm:text-4xl font-bold">Get in Touch</h2>
          <div className="flex gap-3 pt-8">
            <a
              href="https://x.com/Dhanush1785"
              className="hover:underline"
              aria-label="Twitter profile"
            >
              <IconBrandX stroke={1} color="white" size={24} />
            </a>
            <a
              href="https://github.com/dhanush-adi"
              className="hover:underline"
              aria-label="GitHub profile"
            >
              <IconBrandGithub stroke={1} color="white" size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/dhanush-adithyan/"
              className="hover:underline"
              aria-label="LinkedIn profile"
            >
              <IconBrandLinkedin stroke={1} color="white" size={24} />
            </a>
            <a
              href="https://codolio.com/profile/dhanush_adi"
              className="hover:underline"
              aria-label="Codolio profile"
            >
              <IconCode stroke={1} color="white" size={24} />
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Home;
