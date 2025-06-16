import { section } from "motion/react-client";
import React from "react";
import ethlinkImg from "../assets/Images/image.png";
import orbitus from "../assets/Images/83262276-ed3d-4038-83e9-4798ff38811c.png";
import paste from "../assets/Images/paste.png";
import game from "../assets/Images/game.png";
import V0projectCard from "../components/V0projectCard";

const projects = [
  {
    id: 1,
    name: "Paste Application",
    detail:
      "Paste Application - Save, edit, delete your notes, code and information",
    logo: paste,
    url: "https://paste-saving.vercel.app/",
    techStack: ["React", "Tailwind", "Redux"],
    githubUrl: "https://github.com/rachitdhaka/Paste-Application",
  },
  {
    id: 2,
    name: "Orbit Us",
    detail:
      "Decentralised Drop Servicing Platform - Finding Freelancing work and create Job for free lancer",
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

  {
    id: 1,
    name: "Paste Application",
    detail:
      "Paste Application - Save, edit, delete your notes, code and information",
    logo: paste,
    url: "https://paste-saving.vercel.app/",
    techStack: ["React", "Tailwind", "Redux"],
    githubUrl: "https://github.com/rachitdhaka/Paste-Application",
  },
  {
    id: 1,
    name: "Paste Application",
    detail:
      "Paste Application - Save, edit, delete your notes, code and information",
    logo: paste,
    url: "https://paste-saving.vercel.app/",
    techStack: ["React", "Tailwind", "Redux"],
    githubUrl: "https://github.com/rachitdhaka/Paste-Application",
  },
];

const V0ProjectPage = () => {
  return (
    <section className="bg-black min-h-screen w-full p-5 ">
      {/* Project section */}
      <section className="max-w-3xl mx-auto bg-neutral-900 p-5 rounded-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
          {projects.map((pr, index) => (
            <V0projectCard
              key={index}
              name={pr.name}
              logo={pr.logo}
              detail={pr.detail}
              url={pr.url}
              techStack={pr.techStack}
              githubUrl={pr.githubUrl}
            />
          ))}
        </div>
      </section>
    </section>
  );
};


export default V0ProjectPage;
