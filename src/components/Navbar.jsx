import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full mx-auto py-4 sm:py-6 lg:py-8 bg-slate-50">
      <header className="flex justify-between items-center w-full px-4 sm:px-6 md:max-w-[80%] lg:max-w-[60%] xl:max-w-[40%] mx-auto">
        <div>
          <NavLink to="/" className="text-[12px] sm:text-[14px] font-medium font-saans">
            rd
          </NavLink>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-[12px] sm:text-[14px]">
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
                className="hover:underline font-saans"
              >
                Coding
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Mobile navigation - slide down menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-2 bg-slate-50 border-t border-gray-200 animate-fadeIn">
          <nav>
            <ul className="flex flex-col space-y-3 text-[14px]">
              <li>
                <a
                  href="https://github.com/rachitdhaka"
                  className="block py-2 hover:underline font-saans"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/rachitdhaka_"
                  className="block py-2 hover:underline font-saans"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/rachitdhaka/"
                  className="block py-2 hover:underline font-saans"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://codolio.com/profile/rachitdhaka"
                  className="block py-2 hover:underline font-saans"
                >
                  Coding
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;