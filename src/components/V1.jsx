import React from "react";
import ProjectCard from "./ProjectCard";
import ethlinkImg from "../assets/Images/image.png";
import orbitus from "../assets/Images/83262276-ed3d-4038-83e9-4798ff38811c.png";
import paste from "../assets/Images/paste.png";
import game from "../assets/Images/game.png";

import FooterV1 from "./FooterV1";
import { NavLink } from "react-router-dom";
import Skills from "./Skills";
import GithubCalendar from "./GithubCalendar";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Eth Link",
    description: "Decentralised Job Searching Platform",
    image: ethlinkImg,
    url: "https://eth-link-vcpn.vercel.app/",
  },
  {
    id: 2,
    title: "OrbitUs",
    description: "Decentralised Drop Servicing Platform.",
    image: orbitus,
    url: "https://orbitus.vercel.app/",
  },
  {
    id: 3,
    title: "Paste Application",
    description: "Save your notes , code , Information .",
    image: paste,
    url: "https://paste-saving.vercel.app",
  },
  {
    id: 4,
    title: "Tic Tac Toe",
    description: "Simple Game.",
    image: game,
    url: "https://tictactoe-rachit.vercel.app/",
  },
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const V1 = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero section */}
      <div className="w-full lg:max-w-[60%] md:max-w-[60%] sm:max-w-[80%] px-4 sm:px-6 py-8 mx-auto">
        <motion.main variants={container} initial="hidden" animate="show">
          <motion.section variants={item} className="mb-12">
            <motion.h1 variants={item} className="font-maga text-3xl sm:text-4xl font-bold mb-2">
              Hello, I'm{" "}
              <span className="hover:text-amber-600 ease-in duration-300">
                Rachit
              </span>
            </motion.h1>

            <motion.p variants={item} className="text-lg sm:text-xl font-saans text-gray-500 mb-6 sm:mb-2">
              Developer - Dsa - Designer
            </motion.p>

            <motion.p variants={item} className="text-[16px] font-saans text-gray-500 mb-8 sm:mb-8 italic">
              "Where there’s{" "}
              <span className="text-amber-600">Chai</span> and a{" "}
              <span className="text-blue-600">Keyboard</span>, you’ll find me
              building something."
            </motion.p>

            <motion.p variants={item} className="font-Saans text-[15px] sm:text-[16px] text-gray-700 mb-3 leading-relaxed">
              <span className="font-bold font-maga text-xl">
                Web Developer{" "}
                <span className="font-saans font-extralight">&</span> Problem
                Solver
              </span>{" "}
              <br />
              Mentor -{" "}
              <a
                href="https://gfgsrmrmp.vercel.app/"
                className="font-bold font-maga hover:text-2xl duration-300 underline hover:text-green-500"
              >
                GeeksForGeeks SRM RMP
              </a>{" "}
              | Building{" "}
              <a
                href="https://vartalaappodcast.vercel.app/"
                className="font-bold font-maga hover:text-2xl duration-300 underline hover:text-red-500"
              >
                Vartalaap
              </a>{" "}
              - A Podcast Platform for Voices That Matter
            </motion.p>

            <NavLink to="/about">
              <motion.button
                variants={item}
                className="bg-neutral-700 text-white px-4 py-2 mt-4 rounded-4xl hover:scale-110 duration-300 flex items-center gap-2 cursor-pointer hover:bg-neutral-950"
              >
                More Information
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.button>
            </NavLink>
          </motion.section>
        </motion.main>
        <hr className="border-gray-200 my-1" />
      </div>

      {/* Github calendar */}
      <GithubCalendar />

      {/* Projects section */}
      <motion.section
        className="pt-8 sm:pt-12 w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] mx-auto mb-10 px-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <motion.h2 variants={item} className="text-2xl sm:text-3xl font-bold mb-2 font-maga">
            Personal Projects
          </motion.h2>

          <motion.p variants={item} className="mb-6 sm:mb-10 font-saans">
            Below is a selection of recent projects that I've worked on.
          </motion.p>

          <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {projects.map((project) => (
              <motion.div key={project.id} variants={item}>
                <ProjectCard
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  url={project.url}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Skills section */}
      <Skills />

      {/* Footer */}
      <FooterV1 />
    </div>
  );
};

export default V1;
