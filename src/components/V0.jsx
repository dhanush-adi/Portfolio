import React from "react";
import FooterV0 from "./FooterV0";
import gfg from "../assets/Images/gfglogo.png";
import dp from "../assets/Images/Orginal.jpg";
import V0exp from "./V0exp";
import vp from "../assets/Images/VARTAA.png";
import ck from "../assets/Images/download.jpeg";
import V0skills from "./V0skills";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconCode,
} from "@tabler/icons-react";
import V0projectCard from "./V0projectCard";
import ethlinkImg from "../assets/Images/image.png";
import orbitus from "../assets/Images/83262276-ed3d-4038-83e9-4798ff38811c.png";
import paste from "../assets/Images/paste.png";
import game from "../assets/Images/game.png";
import { motion } from "framer-motion";
const projects = [
  {
    id: 1,
    name: "Paste Application",
    detail:
      "Paste Application  - Save , edit , delete  your notes , code and information ",
    logo: paste,
    url: "https://paste-saving.vercel.app/",
    techStack: ["React", "Tailwind", "Redux"],
    githubUrl: "https://github.com/rachitdhaka/Paste-Application",
  },
  {
    id: 2,
    name: "Orbit Us",
    detail:
      "Decentralised Drop Servicing Platform - Finding Freelancing work and create Job for free lancer ",
    logo: orbitus,
    url: "https://orbitus.vercel.app/",
    techStack: ["React", "Tailwind", "Solidity", "Web3"],
    githubUrl: "https://github.com/rachitdhaka/Drop-Service---Orbit-Us",
  },
  {
    id: 3,
    name: "Eth Link",
    detail:
      "Decentralised Job Seacrhing Portal - ETHLink leverages Web3 to offer a secure, trust-based job search platform with verified companies and candidates.",
    logo: ethlinkImg,
    url: "https://eth-link-vcpn.vercel.app/",
    techStack: ["React", "Tailwind", "Solidity", "Web3"],
    githubUrl: "https://github.com/rachitdhaka/EthLink",
  },
  {
    id: 4,
    name: "Tic Tac Toe",
    detail: "Simple Game",
    logo: game,
    url: "https://tictactoe-rachit.vercel.app/",
    techStack: ["React", "Tailwind"],
    githubUrl: "https://github.com/rachitdhaka/Tic-Tac-Toe",
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
    <div className="w-full bg-black min-h-screen">
      {/* main section   compact div pe kaam karna hai */}
      <div className="max-w-2xl mx-auto  bg-black ">
        {/* naming and intro */}
        <div className="flex p-8">
          {/* left side  */}
          <div className="w-[70%]  flex  justify-start items-center">
            {/* content div  */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              <p className=" text-xl font-medium text-white tracking-tighter ">
                Hey there ! I am
              </p>
              <h1 className="text-[3rem] font-bold text-white tracking-tighter">
                Rachit Dhaka
              </h1>
              <p className="text-white font-medium tracking-tighter">
                Web Developer | DSA{" "}
              </p>
            </motion.div>
          </div>

          {/* right side  */}
          <div className="w-[30%]  flex justify-end items-center py-7">
            <img src={dp} alt="" className="h-36 rounded-full aspect-square" />
          </div>
        </div>

        {/* about section  */}

        <motion.div
          className="px-8"
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <h1 className="text-white font-semibold text-xl">About</h1>
          <p className="  text-neutral-400 tracking-tight">
            {" "}
            A final-year B.Tech Computer Science Engineering student with a
            strong passion for web development and problem-solving through DSA.
            I bring a unique blend of creativity and logic , designing with a
            developer’s precision and coding with a designer’s vision.
            Constantly exploring new technologies, I enjoy building intuitive
            user experiences, solving complex problems, and contributing to
            impactful projects. Eager to collaborate, learn, and innovate in
            fast-paced tech environments.
          </p>
        </motion.div>

        {/* Expoerience  */}
        <motion.div
          className="max-w-2xl "
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <h1 className="text-white font-semibold text-xl  px-8 mt-8 mb-4">
            Expriences
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

        {/* skillls section */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <V0skills />
        </motion.div>

        {/* Project sections  */}

        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <h1 className="text-white font-semibold text-xl  px-8 mt-8 mb-4">
            Projects
          </h1>

          <div className="flex justify-center">
            <div className=" grid grid-cols-2 gap-3">
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

        {/* Get in touch  */}

        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="flex justify-center items-center mt-10 flex-col"
        >
          <h1 className="text-white text-4xl font-bold">Get in Touch</h1>

          <div className="flex gap-3 py-8 ">
            <a
              href="https://x.com/rachitdhaka_"
              className="hover:underline font-saans"
            >
              <IconBrandX stroke={1} color="white" />
            </a>

            <a
              href="https://github.com/rachitdhaka"
              className="hover:underline font-saans "
            >
              <IconBrandGithub stroke={1} color="white" />
            </a>

            <a
              href="https://www.linkedin.com/in/rachitdhaka/"
              className="hover:underline font-saans"
            >
              <IconBrandLinkedin stroke={1} color="white" />
            </a>

            <a
              href="https://codolio.com/profile/rachitdhaka"
              className="hover:underline font-saans"
            >
              <IconCode stroke={1} color="white" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default V0;
