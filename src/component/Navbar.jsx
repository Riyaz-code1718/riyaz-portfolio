import React, { use, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav
      className="fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm 
    py-4 px-8 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="#" className="text-2xl font-bold text-white/80">
            Riyaz
            <span className="text-green-300 hover:text-gray-500">
              Portfolio
            </span>
          </a>
        </div>
        <div className="hidden md:flex space-x-10">
          {/* first */}
          <a
            href="#hero"
            className="relative text-white 
                transition duration-200 hover:text-green-400"
            group
          >
            <span>Home </span>
            {/* 
                    <span className='absolute left-0 bottom-1 w-0 h-5 
                    bg-green-400 transition-all duration-300 group-hover:w-full'></span> */}
          </a>

          {/* second */}
          <a
            href="#about"
            className="relative text-white 
                transition duration-200 hover:text-green-400"
            group
          >
            <span>About </span>
            {/* 
                    <span className='absolute left-0 bottom-1 w-0 h-5 
                    bg-green-400 transition-all duration-300 group-hover:w-full'></span> */}
          </a>
          {/* third */}
          <a
            href="#skill"
            className="relative text-white 
                transition duration-200 hover:text-green-400"
            group
          >
            <span>Skill </span>
            {/* 
                    <span className='absolute left-0 bottom-1 w-0 h-5 
                    bg-green-400 transition-all duration-300 group-hover:w-full'></span> */}
          </a>
          {/* fourth */}
          <a
            href="#project"
            className="relative text-white 
                transition duration-200 hover:text-green-400"
            group
          >
            <span>Project </span>
            {/* 
                    <span className='absolute left-0 bottom-1 w-0 h-5 
                    bg-green-400 transition-all duration-300 group-hover:w-full'></span> */}
          </a>
          {/* fifth */}
          <a
            href="#Experience"
            className="relative text-white 
                transition duration-200 hover:text-green-400"
            group
          >
            <span>Experience </span>
            {/* 
                    <span className='absolute left-0 bottom-1 w-0 h-5 
                    bg-green-400 transition-all duration-300 group-hover:w-full'></span> */}
          </a>
          {/* sixth */}
          <a
            href="#contact"
            className="relative text-white 
                transition duration-200 hover:text-green-400"
            group
          >
            <span>Contact </span>
            {/* 
                    <span className='absolute left-0 bottom-1 w-0 h-5 
                    bg-green-400 transition-all duration-300 group-hover:w-full'></span> */}
          </a>
        </div>

        {/* mobile section */}
        <div className="md:hidden">
          {showMenu ? (
            <FaBars
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer"
            />
          ) : (
            <FaXmark
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer"
            />
          )}
        </div>
      </div>
      {/* mobile menu  */}
      {showMenu && (
        <div
          className="md:hidden mt-4 bg-dark-300 h-screen rounded-lg 
        p-4 flex flex-col space-y-4 text-center justify-center"
        >
          {/* first */}
          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#home"
            className="relative text-white 
                transition duration-200 hover:text-green-400"
            group
          >
            <span>Home </span>
            {/*              
                    <span className='absolute left-0 bottom-1 w-0 h-5 
                    bg-green-400 transition-all duration-300 group-hover:w-full'></span>
          */}
          </a>

          {/* second */}
          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#About"
            className="relative text-white 
                transition duration-200 hover:text-green-400"
            group
          >
            <span>About </span>
            {/* 
                    <span className='absolute left-0 bottom-1 w-0 h-5 
                    bg-green-400 transition-all duration-300 group-hover:w-full'></span> */}
          </a>
          {/* third */}
          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#Skill"
            className="relative text-white 
                transition duration-200 hover:text-green-400"
            group
          >
            <span>Skill </span>
            {/* 
                    <span className='absolute left-0 bottom-1 w-0 h-5 
                    bg-green-400 transition-all duration-300 group-hover:w-full'></span> */}
          </a>
          {/* fourth */}
          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#Project"
            className="relative text-white 
                transition duration-200 hover:text-green-400"
            group
          >
            <span>Project </span>
            {/* 
                    <span className='absolute left-0 bottom-1 w-0 h-5 
                    bg-green-400 transition-all duration-300 group-hover:w-full'></span> */}
          </a>
          {/* fifth */}
          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#Experience"
            className="relative text-white 
                transition duration-200 hover:text-green-400"
            group
          >
            <span>Experience </span>
            {/* 
                    <span className='absolute left-0 bottom-1 w-0 h-5 
                    bg-green-400 transition-all duration-300 group-hover:w-full'></span> */}
          </a>
          {/* sixth */}
          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#contact"
            className="relative text-white 
                transition duration-200 hover:text-green-400"
            group
          >
            <span>Contact </span>
            {/* 
                    <span className='absolute left-0 bottom-1 w-0 h-5 
                    bg-green-400 transition-all duration-300 group-hover:w-full'></span> */}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
