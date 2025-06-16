import React from "react";
import { NavLink } from "react-router-dom";

const V0Navbar = () => {
  return (
    <section className="bg-black ">
      <section className="  text-white max-w-2xl h-12 mx-auto px-15 flex justify-between items-center pt-5">
        {/* main age pe return wala  */}
        <div>
          <div>
            <NavLink
              to="/"
              className="text-[12px] sm:text-[14px] font-medium font-saans"
            >
              rd
            </NavLink>
          </div>
        </div>
        {/* right side div  */}

        <div className="flex gap-2">
          <div className="hover:bg-neutral-700 px-2 py-0.5 rounded">
            <div>
              <NavLink
                to="/projects"
                className="text-[12px] sm:text-[14px] font-medium font-saans"
              >
                Projects
              </NavLink>
            </div>
          </div>
          <div className="hover:bg-neutral-700 px-2 py-0.5 rounded">
            <div>
              <a href="https://github.com/rachitdhaka" target="_blank">Github</a>
            </div>
          </div>

          <div className="hover:bg-neutral-700 px-2 py-0.5 rounded">
            <div>
              <a href="https://leetcode.com/u/rachitdhaka/" target="_blank">Leetcode</a>
            </div>
          </div>
          
        </div>
      </section>
    </section>
  );
};

export default V0Navbar;
