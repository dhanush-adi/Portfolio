import React from "react";
import Experience from "./Experience";
import gfg from '../assets/Images/gfglogo.png'
import vp from '../assets/Images/VARTAA.png'
import ck from '../assets/Images/download.jpeg'


const experience = [
  {
    id: 1,
    name: "GeeksForGeeks SRM RMP",
    position : "Core Member - Head of Operations",
    logo : gfg,
    sd : "Aug 2024",
    ed : "Apr 2025",
  },
  {
    id: 2,
    name: "Vartalaap Podcast",
    position : "Co-Founder & Host",
    logo : vp,
    sd : "Dec 2023",
    ed : "Mar 2024",
  },
  {
    id: 3,
    name: "Code Kraftors",
    position : "Web3 Domain Member",
    logo : ck ,
    sd : "Nov 2022",
    ed : "Jul 2024",
  },
];

const About = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className=" max-w-[40%] mx-auto">
        {/* heading */}
        <div className="font-maga text-4xl py-4 font-bold">Information</div>

        {/* line  */}
        <hr className="border-gray-200 my-1" />

        {/* Mera Intro */}
        <div className="mb-8">
          <p className="font-sans py-4" style={{ wordSpacing: "0.2rem" }}>
          Hey there, I'm Rachit Dhaka — a builder at heart with a passion for solving real-world problems through tech. I love creating things from the ground up, whether it’s developing my own products or collaborating with forward-thinking teams to bring impactful ideas to life.
          </p>

          <p className="font-sans py-4" style={{ wordSpacing: "0.2rem" }}>
          When I’m not building, you’ll find me deep into DSA problems — I genuinely enjoy the logic and structure it brings. I also love guiding peers and juniors through their own problem-solving journeys, whether it’s debugging code or helping them crack that tricky concept.
          </p>

          <p className="font-sans py-4" style={{ wordSpacing: "0.2rem" }}>
          Most recently, I’ve been exploring the Web3 space, participating in global hackathons like ETHIndia, ETHNewDelhi, and Unfold, and building decentralized platforms that aim to reshape how people connect, learn, and grow.
            
          </p>
          <p className="font-sans py-4" style={{ wordSpacing: "0.2rem" }}>
          Beyond tech, I’ve also ventured into content creation with my YouTube podcast, Vartalaap Podcast, where I have real and raw conversations with people doing interesting things — from tech to startups and everything in between.
            
          </p>
          <p className="font-sans py-4" style={{ wordSpacing: "0.2rem" }}>
          Alongside all this, I’ve led multiple tech events and hackathons at SRM, where I also co-founded the first official GeeksforGeeks Student Chapter. Whether it’s front-end dev, product thinking, or community building — my goal is always the same: create meaningful experiences that people genuinely enjoy using.
            
          </p>



          <p className="font-sans py-4" style={{ wordSpacing: "0.2rem" }}>
            If you'd like to connect or collaborate on something awesome, feel
            free to reach out:
          </p>
          <span className="font-bold font-saans underline ">
            <a href="">rachitdhaka29@gmail.com</a>
          </span>
        </div>

        {/* line  */}
        <hr className="border-gray-200 my-1" />

        {/* heading */}
        <div className="font-maga text-3xl py-4 font-bold">Experience</div>

        {/* experience wala section */}
        <div>
          {/* <Experience /> */}
          {experience.map((experience) => (
              <Experience
                key={experience.id}
                name={experience.name}
                position={experience.position}
                logo={experience.logo}
                sd={experience.sd}
                ed={experience.ed}
                
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default About;
