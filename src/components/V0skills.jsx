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
    <section className="max-w-2xl mx-auto">
      <h1 className="text-white font-semibold text-2xl px-4 mt-8 mb-4">
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

export default V0skills;
