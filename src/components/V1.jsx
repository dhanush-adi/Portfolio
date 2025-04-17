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
    <div className="container-section">
      <header className="header-container">
        <div>
          <a
            href="#"
            className="text-[12px] font-medium font-saans"
          >
            rd
          </a>
        </div>
        <nav>
          <ul className="navigation">
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
        <section className="intro-section">
          <h1 className="main-heading font-maga font-bold">
            Hello, I'm Rachit.
          </h1>
          <p className="subtitle font-saans text-gray-500">
            Developer - Dsa - Designer
          </p>

          <p className="description font-Saans text-gray-700 leading-relaxed">
            3rd Year CSE Undergrad at SRM University | Web Developer | Problem
            Solver | Core Member - <a href=" https://gfgsrmrmp.vercel.app/ " className="font-bold font-maga hover:text-2xl duration-300 underline"> GeeksForGeeks SRM RMP  </a> | Building
             <a href=" https://vartalaappodcast.vercel.app/ " className="font-bold font-maga hover:text-2xl duration-300 underline"> Vartalaap  </a>
            
            - A Podcast Platform for Voices That Matter
          </p>

          <button className="bg-black text-white px-4 py-2 mt-4 rounded-4xl">
            <p>More Information</p>
          </button>
        </section>

        <hr className="border-gray-200 my-1" />
      </main>
    </div>

    <section className="projects-section">
      <div className="projects-container">
        <h2 className="projects-heading font-maga">Personal Projects</h2>
        <p className="projects-subheading font-saans">
          Below is a selection of recent projects that I've worked on.
        </p>

        <div className="projects-grid">
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
    
    <style jsx>{`
      /* Base styles (mobile first) */
      .container-section {
        width: 100%;
        margin: 0 auto;
        padding: 1rem;
      }
      
      .header-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
      }
      
      .navigation {
        display: flex;
        font-size: 10px;
      }
      
      .navigation li {
        margin-left: 0.75rem;
      }
      
      .intro-section {
        margin-bottom: 2rem;
      }
      
      .main-heading {
        font-size: 1.875rem;
        margin-bottom: 0.5rem;
      }
      
      .subtitle {
        font-size: 1.125rem;
        margin-bottom: 1.5rem;
      }
      
      .description {
        font-size: 0.9375rem;
        margin-bottom: 0.75rem;
      }
      
      .projects-section {
        padding-top: 2rem;
        width: 100%;
        margin: 0 auto;
        margin-bottom: 2rem;
      }
      
      .projects-container {
        width: 100%;
        margin: 0 auto;
        padding: 0 1rem;
      }
      
      .projects-heading {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
      }
      
      .projects-subheading {
        font-size: 0.875rem;
        margin-bottom: 1.5rem;
      }
      
      .projects-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
      
      /* Tablet (sm) */
      @media (min-width: 640px) {
        .container-section {
          padding: 1.5rem;
        }
        
        .header-container {
          margin-bottom: 5rem;
        }
        
        .navigation {
          font-size: 12px;
        }
        
        .navigation li {
          margin-left: 1.5rem;
        }
        
        .intro-section {
          margin-bottom: 4rem;
        }
        
        .main-heading {
          font-size: 2.25rem;
        }
        
        .subtitle {
          font-size: 1.25rem;
          margin-bottom: 2rem;
        }
        
        .description {
          font-size: 1rem;
        }
        
        .projects-section {
          padding-top: 3rem;
          margin-bottom: 2.5rem;
        }
        
        .projects-container {
          padding: 0 1.5rem;
        }
        
        .projects-heading {
          font-size: 1.875rem;
          margin-left: 1rem;
        }
        
        .projects-subheading {
          font-size: 1rem;
          margin-bottom: 2.5rem;
          margin-left: 1rem;
        }
        
        .projects-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
      }
      
      /* Medium (md) */
      @media (min-width: 768px) {
        .container-section {
          max-width: 80%;
        }
        
        .projects-section {
          max-width: 80%;
        }
        
        .projects-heading {
          margin-left: 2.5rem;
        }
        
        .projects-subheading {
          margin-left: 2.5rem;
        }
      }
      
      /* Large (lg) */
      @media (min-width: 1024px) {
        .container-section {
          max-width: 60%;
        }
        
        .projects-section {
          max-width: 60%;
        }
        
        .projects-heading {
          margin-left: 3.75rem;
        }
        
        .projects-subheading {
          margin-left: 3.75rem;
        }
      }
      
      /* Extra Large (xl) */
      @media (min-width: 1280px) {
        .container-section {
          max-width: 40%;
        }
      }
    `}</style>
  </div>
  )
}

export default V1