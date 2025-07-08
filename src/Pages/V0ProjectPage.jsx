import { div, section } from "motion/react-client";
import React from "react";
import ethlinkImg from "../assets/Images/image.png";
import orbitus from "../assets/Images/83262276-ed3d-4038-83e9-4798ff38811c.png";
import paste from "../assets/Images/paste.png";
import game from "../assets/Images/game.png";
import V0projectCard from "../components/V0projectCard";
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
    detail: "An on-chain petition system built for DeFy25. Enables transparent and immutable petition creation and voting.",
    logo: game,
    url: "https://github.com/dhanush-adi/DeFy25-Petition_Onchain",
    techStack: ["JavaScript", "Blockchain", "Smart Contracts", "DeFi"],
    githubUrl: "https://github.com/dhanush-adi/DeFy25-Petition_Onchain",
  },

  {
    id: 5,
    name: "Build-IT-Series",
    detail:
      "A series to engage developers around GitHub Copilot. Build a portfolio for yourself with the help of GitHub Copilot.",
    logo: paste,
    url: "https://github.com/dhanush-adi/Build-IT-Series",
    techStack: ["HTML", "GitHub Copilot", "Portfolio"],
    githubUrl: "https://github.com/dhanush-adi/Build-IT-Series",
  },
  
];

const V0ProjectPage = () => {
  return (
    
      
      <section className="bg-black min-h-screen w-full p-5 relative">
        <HeikiBackground
        primaryColor="#ededed"
        backgroundColor = "#0a0a0a"
        
        pattern="grid"
        density="dense"
        opacity={0.2}
      />
        {/* Project section */}
        <section className="max-w-3xl mx-auto bg-neutral-950 p-5 rounded-4xl relative">
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
