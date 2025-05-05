import React from "react";
import { NavLink } from "react-router-dom";

const FooterV0 = () => {
  return (
    <div>
      <div className="text-[16px] font-medium text-[#9b9b9b] flex justify-center gap-7 ">
        <a
          href="https://x.com/rachitdhaka_"
          className="relative hover:text-white transition-colors duration-300 group"
        >
          Twitter
          <span className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-20 bg-blue-500 blur-md rounded-md group-hover:scale-125 transition-all duration-300"></span>
        </a>

        <a
          href="https://www.linkedin.com/in/rachitdhaka/"
          className="relative hover:text-white transition-colors duration-300 group"
        >
          LinkedIn
          <span className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-20 bg-blue-500 blur-md rounded-md group-hover:scale-125 transition-all duration-300"></span>
        </a>

        <a
          href="https://github.com/rachitdhaka"
          className="relative hover:text-white transition-colors duration-300 group"
        >
          Github
          <span className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-20 bg-blue-500 blur-md rounded-md group-hover:scale-125 transition-all duration-300"></span>
        </a>

        <a
          href="https://codolio.com/profile/rachitdhaka"
          className="relative hover:text-white transition-colors duration-300 group"
        >
          Coding
          <span className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-20 bg-blue-500 blur-md rounded-md group-hover:scale-125 transition-all duration-300"></span>
        </a>
      </div>

      <div className="text-[10px] text-[#9b9b9b] font-bold underline flex justify-center mt-4">
        <NavLink to="/">
            v1
        </NavLink>
      </div>

      <div className="text-[10px] text-[#9b9b9b] flex justify-center mt-1">
      Made with ❤️ by Rachit Dhaka
      </div>
    </div>
  );
};

export default FooterV0;
