import React from "react";

const skills = [
  "aws",
  "c",
  "cpp",
  "java",
  "spring",
  "javascript",
  "html",
  "css",
  "docker",
  "express",
  "firebase",
  "git",
  "github",
  "linux",
  "mongodb",
  "mysql",
  "nodejs",
  "nextjs",
  "npm",
  "python",
  "solidity",
  "typescript",
  "vscode",
  "stackoverflow",
];

const SkillsDisplay = () => {
  return (
    <section className="max-w-2xl mx-auto">
      <h1 className="text-white font-semibold text-lg  sm:text-xl mt-8 mb-4">
            Skills
        </h1>

      <div className="flex justify-center">
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3 px-8">
          {skills.map((skill, index) => (
            <img
              key={index}
              src={`https://skillicons.dev/icons?i=${skill}`}
              alt={skill}
              className="w-10 h-10"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsDisplay;
