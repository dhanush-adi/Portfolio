import React from "react";

const ProjectCard = ({ image, title, description, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-xl shadow-md bg-neutral-200 hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 group p-4"
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl hover:rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300 font-maga">{title}</h4>
        <p className="text-gray-600 mb-4 font-saans">{description}</p>
       
      </div>
    </a>
  );
};

export default ProjectCard;