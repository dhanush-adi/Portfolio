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

const V0skills = () => {
  return (
    <section className=" max-w-2xl">
      <h1 className="text-white font-semibold text-xl  px-8 mt-8 mb-4">
        Skills
      </h1>

      <div className="flex justify-center">
        <div className="grid grid-cols-8 px-8 gap-2">
          {skills.map((skills,index)=>(
            <img
                src={`https://skillicons.dev/icons?i=${skills}`}
                alt={skills}
                className="w-10 h-10"
                
              />
          ))}
        </div>
      </div>
    </section>
  );
};

export default V0skills;
