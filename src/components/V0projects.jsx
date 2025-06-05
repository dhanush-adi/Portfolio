import React from "react";
import V0projectCard from "./V0projectCard";


const V0projects = () => {
  return (
    <section className="max-w-2xl">
      <h1 className="text-white font-semibold text-xl  px-8 mt-8 mb-4">
        Projects
      </h1>
      <div className="flex justify-center">
        <div className="">
           <V0projectCard/>
        </div>

      </div>
    </section>
  );
};

export default V0projects;
