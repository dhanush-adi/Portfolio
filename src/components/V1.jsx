import React from 'react'
import ProjectCard from "./ProjectCard";
import ethlinkImg from "../assets/Images/image.png";
import orbitus from "../assets/Images/83262276-ed3d-4038-83e9-4798ff38811c.png";

import FooterV1 from "./FooterV1";

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
      url: "https://devfolio.co/projects/orbitus-d287",
    },
  ];


const V1 = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
    <div className="max-w-[40%] mx-auto  px-6 py-8">
      <header className="flex justify-between items-center mb-20">
        <div>
          <a
            href="rachitdhaka.vercel.app"
            className="text-[12px] font-medium font-saans"
          >
            rd
          </a>
        </div>
        <nav>
          <ul className="flex space-x-6 text-[12px]">
            <li>
              <a
                href="https://github.com/rachitdhaka"
                className="hover:underline font-saans"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/rachitdhaka/"
                className="hover:underline font-saans"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://codolio.com/profile/rachitdhaka"
                className="hover:underline"
              >
                Coding
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="mb-16">
          <h1 className="font-maga text-4xl font-bold mb-2">
            Hello, I'm Rachit.
          </h1>
          <p className="text-xl font-saans text-gray-500 mb-8">
            Developer - Dsa - Designer
          </p>

          <p className=" font-Saans text-[16px]  text-gray-700 mb-3 leading-relaxed">
            3rd Year CSE Undergrad at SRM University | Web Developer | Problem
            Solver | Core Member - <a href=" https://gfgsrmrmp.vercel.app/ " className="font-bold font-maga  hover:text-2xl duration-300 underline"> GeeksForGeeks SRM RMP  </a> | Building
             <a href=" https://vartalaappodcast.vercel.app/ " className="font-bold font-maga  hover:text-2xl duration-300 underline"> Vartalaap  </a>
            
            - A Podcast Platform for Voices That Matter
          </p>

          <button className="bg-black text-white px-4 py-2 mt-4 rounded-4xl  ">
            <p>More Information</p>
          </button>
        </section>

        <hr className="border-gray-200 my-1" />
      </main>
    </div>

    <section className="pt-12 max-w-[60%] mx-auto  mb-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold  mb-2 ml-15 font-maga">Personal Projects</h2>
        <p className=" mb-10 ml-15 font-saans">
          Below is a selection of recent projects that I've worked on.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              url={project.url}
            />
          ))}
        </div>
      </div>
    </section>

  

    <FooterV1 />
  </div>
  )
}

export default V1