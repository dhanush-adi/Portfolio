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
      <div className="border border-neutral-400 rounded-xl flex flex-col w-80">
        {/* image div */}
        <div className="p-2">
          <img
            src={logo}
            alt=""
            width="400"
            height="full"
            className="h-40 rounded-xl"
          />
        </div>

        {/* content of */}
        <div className="p-3">
          <p className="text-white font-bold text-[16px]">{name}</p>
          <p className="text-[12px]  text-neutral-300">{detail}</p>
        </div>

        {/* tech stack used and github */}
        <div className="px-3 pb-3 flex flex-wrap gap-2 flex-col ">
          <div className=" flex gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-white text-black rounded px-1 py-0.5 font-semibold text-[11px] "
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex  gap-2">
            

            <a href={url}>
              <button className="bg-neutral-700 text-neutral-200 rounded px-1 py-0.5 font-semibold text-[11px] flex items-center cursor-pointer">
                Live 
              </button>
            </a>

            <a href={githubUrl}>
                <button className="bg-neutral-700 text-neutral-200 rounded px-1 py-0.5 font-semibold text-[11px] flex items-center cursor-pointer"> 
                    Github
                </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default V0projectCard;
