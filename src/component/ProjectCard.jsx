import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, image, tech }) => {
  return (
    <div
      className="bg-dark-300 rounded-2xl overflow-hidden
     p-6 transition-transform duration-300 hover:-translate-y-2
    cursor-pointer"
    >
      <img src={image} alt={title} className="w-full h-60 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-4 py-1 bg-dark-400 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex flex-row gap-2">
          <a
            href="#view"
            className="px-4 py-2 border border-green-300 rounded-lg
            font-bold hover:bg-blue transition duration-300"
          >
            View Work
          </a>

          <a
            href="#contact"
            className="px-4 py-2 border border-green-300 rounded-lg
            font-bold hover:bg-blue transition duration-300 "
          >
            Contact Me
          </a>
        </div>
        {/* <div className="flex gap-2">
          <a
            href="#"
            className="flex text-center px-8 py-3
            bg-purple rounded-lg font-medium hover:bg-purple-700
            transition duration-300"
          >
            View Work
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectCard;
