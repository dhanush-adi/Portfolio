import React from "react";
import gfg from "../assets/Images/gfglogo.png";


const V0exp = ({logo,name , position, sd ,ed }) => {
  return (
    <section className="max-w-2xl px-8 flex flex-col">
      

      <div className=" flex justify-between items-center gap-4 mt-4 ">
        {/* left side logo of the company*/}
        <div className="flex justify-center items-center w-[10%]">
          <img src={logo} alt="gfg" className="h-15 rounded-full " />
        </div>

        {/* center information*/}
        <div className="w-[60%]">
          <p className="text-white font-bold">{name}</p>
          <p className="text-white/80 text-[12px]">{position}</p>
        </div>

        {/* right side , expereince */}
        <div className="flex gap-2">
          <div className="text-neutral-400 tracking-tighter">{sd}</div>
          <span className="text-neutral-400">-</span>
          <div className="text-neutral-400 tracking-tighter">{ed}</div>
        </div>
      </div>
    </section>
  );
};

export default V0exp;
