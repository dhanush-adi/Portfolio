import React from "react";
import FooterV0 from "./FooterV0";
import gfg from "../assets/Images/gfglogo.png";
import dp from "../assets/Images/Orginal.jpg";
import V0exp from "./V0exp";
import vp from "../assets/Images/VARTAA.png";
import ck from "../assets/Images/download.jpeg";
import V0skills from "./V0skills";

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
      <div className="max-w-2xl mx-auto   h-screen bg-black ">
        {/* naming and intro */}
        <div className="flex p-8">
          {/* left side  */}
          <div className="w-[70%]  flex  justify-start items-center">
            {/* content div  */}
            <div>
              <p className=" text-xl font-medium text-white tracking-tighter ">
                Hey there! I am
              </p>
              <h1 className="text-[3rem] font-bold text-white tracking-tighter">
                Rachit Dhaka
              </h1>
              <p className="text-white font-medium tracking-tighter">
                Web Developer | DSA{" "}
              </p>
            </div>
          </div>

          {/* right side  */}
          <div className="w-[30%]  flex justify-center items-center py-7">
            <img src={dp} alt="" className="h-36 rounded-full aspect-square" />
          </div>
        </div>

        {/* about section  */}

        <div className="px-8">
          <h1 className="text-white font-semibold text-xl">About</h1>
          <p className="  text-neutral-400">
            {" "}
            An Engineering B.Tech CSE student (4th Year) who is passionate about
            web development and design. Eager to learn, collaborate, and
            contribute to innovative projects in the field. I code with a
            designer's eye and design with a developer's mind.
          </p>
        </div>

        {/* Expoerience  */}
        <div className="max-w-2xl ">
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
        </div>

        <div>
          <V0skills/>
        </div>

      </div>

      
    </div>
  );
};

export default V0;
