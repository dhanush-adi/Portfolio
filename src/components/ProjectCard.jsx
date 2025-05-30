import React from "react";

import ethlinkImg from "../assets/Images/image.png";
import orbitus from "../assets/Images/83262276-ed3d-4038-83e9-4798ff38811c.png";
import paste from "../assets/Images/paste.png";
import game from "../assets/Images/game.png";
import { motion } from "motion/react";

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

const ProjectCard = () => {
  return (
    <div className="mx-auto flex justify-center items-center min-h-screen max-w-6xl px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
        {projects.map((projects, idx) => (
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              duration: 0.3,
              delay: idx * 0.1,
              ease: "easeInOut",
            }}
            key={projects.id}
            className="mx-1"
          >
            <a href={projects.url}>
              <div className="hover:scale-[1.02] duration-200">
                <img
                  src={projects.image}
                  height={300}
                  width={300}
                  className="rounded-3xl h-54 w-full shadow-md hover:shadow-neutral-300 cursor-pointer object-cover"
                />
                <p className="font-medium text-neutral-800 tracking-tight pt-3">
                  {projects.title}
                </p>
                <p className="font-medium text-neutral-500 tracking-tight">
                  {projects.description}
                </p>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
