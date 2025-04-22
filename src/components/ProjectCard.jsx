import React from "react";

const ProjectCard = ({ image, title, description, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-xl shadow-md bg-neutral-100 hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 group p-2 sm:p-4 border border-transparent hover:border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
      aria-label={`View project: ${title}`}
    >
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={image}
          alt={`${title} project screenshot`}
          className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* View project overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-black/70 text-white px-3 py-2 rounded-lg text-sm font-medium tracking-wide">
            View Project
          </span>
        </div>
      </div>
      
      <div className="p-3 sm:p-6">
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 font-maga">
            {title}
          </h4>
          <svg 
            className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
        
        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 font-saans">
          {description}
        </p>
        

      </div>
    </a>
  );
};

export default ProjectCard;