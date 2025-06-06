import React from "react";

const V0projectCard = ({
  logo,
  name,
  detail,
  url,
  techStack = [],
  githubUrl,
}) => {
  return (
    <section>
      <div className="border border-neutral-700 rounded-xl flex flex-col w-full max-w-xs sm:max-w-sm mx-auto overflow-hidden">
        <div className="p-2">
          <img
            src={logo}
            alt={`Preview of ${name}`}
            className="w-full h-32 sm:h-40 rounded-lg object-cover aspect-video"
          />
        </div>

        <div className="p-3">
          <p className="text-white font-bold text-base sm:text-[16px] mb-1">
            {name}
          </p>
          <p className="text-xs sm:text-[12px] text-neutral-300">
            {detail}
          </p>
        </div>

        <div className="px-3 pb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-white text-black rounded px-2 py-0.5 font-semibold text-[10px] sm:text-[11px]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-2 mt-2 sm:mt-0">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <button className="bg-neutral-700 text-neutral-200 rounded px-2 py-0.5 font-semibold text-[10px] sm:text-[11px] flex items-center justify-center cursor-pointer hover:bg-neutral-600 transition-colors">
                Live
              </button>
            </a>

            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <button className="bg-neutral-700 text-neutral-200 rounded px-2 py-0.5 font-semibold text-[10px] sm:text-[11px] flex items-center justify-center cursor-pointer hover:bg-neutral-600 transition-colors">
                GitHub
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default V0projectCard;