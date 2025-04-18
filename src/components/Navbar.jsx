import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="max-w-[100%] mx-auto  py-8 bg-slate-50">
      <header className="flex justify-between items-center  max-w-[40%] mx-auto px-6" >
        <div>
          
          <NavLink to="/"  className="text-[12px] font-medium font-saans">
            rd
          </NavLink>
        </div>


        <nav>
          <ul className="flex space-x-6 text-[12px]">
            <li>
              <a
                href="https://github.com/rachitdhaka"
                className="hover:underline font-saans"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://x.com/rachitdhaka_"
                className="hover:underline font-saans"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/rachitdhaka/"
                className="hover:underline font-saans"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://codolio.com/profile/rachitdhaka"
                className="hover:underline"
              >
                Coding
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
