import React from "react";

const skills = [
  "html",
  "css",
  "javascript",
  "react",
  "tailwind",
  "redux",
  "typescript",
  "python",
  "cpp",
  "git",
  "github",
  "vscode",
  "c",
  "vite",
  "vercel",
  "mysql",



  
];

const Skills = () => {
  return (
    <section className="pt-8 sm:pt-12 w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] mx-auto mb-10 px-4">
        <hr className="border-gray-200 my-1 mb-8" />
      <h2 className="text-2xl sm:text-3xl font-bold mb-2 font-maga mb-8">
        Skills  
      </h2>

      <div className="flex justify-center ">
        <div className="grid grid-cols-4 gap-5">
          {skills.map((skill, index) => (
            <img
              key={index}
              src={`https://skillicons.dev/icons?i=${skill}`}
              alt={skill}
              className="w-13 h-13"
              loading="lazy"

              
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
