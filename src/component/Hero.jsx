import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { FormIcon } from "lucide-react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkedAlt,
  FaPhone,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="hero"
      className="relative isolate min-h-screen overflow-hidden flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
      // className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#111111] to-[#1a1a1a]"
    >
      {/* Background glow  */}

      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-20 -z-0 h-72 w-72 max-w-full rounded-full bg-green-400/10 blur-[100px]" />

      <div className="pointer-events-none absolute right-0 bottom-10 -z-0 h-72 w-72 max-w-full rounded-full bg-emerald-400/10 blur-[100px]" />

      {/* <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-green-400/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-emerald-400/10 blur-[100px]" /> */}

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb:10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-1 ml-6">
            Hi, i'm <span className="text-green-400">Riyaz</span>
          </h1>
          {/* left side text  */}

          <h2 className="text-2xl md:text-3xl font-semibold mb-4 ml-6">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1000,
                "Software Engineer",
                1000,
              ]}
              wrapper="span"
              speed={30}
              typingDelay={300}
              deletionSpeed={50}
              repeat={Infinity}
            ></TypeAnimation>
          </h2>

          <p className="text-lg text-gray-300 mt:0 ml-6">
            I create stuning web experience with moden technologies and
            innovative design
          </p>

          <div className="flex flex-row gap-4 mt-4 ml-6">
            <a
              href="/Riyaz_ATS.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-green-800 text-white font-semibold hover:bg-green-600 transition"
            >
              Download CV
            </a>

            {/* <a
              href="#view"
              className="px-5 py-3 border border-purple rounded-lg
            font-bold hover:bg-purple/25 transition duration-300"
            >
              Download CV
            </a> */}

            <a
              href="#contact"
              className="px-5 py-3 border border-green-700 rounded-lg
            font-bold hover:bg-green-800 transition duration-300 "
            >
              Contact Me
            </a>
          </div>
          {/* new section  */}

          {/* Follow section */}
          <div className="pt-4 mt-2 ml-6">
            <h3 className="font-bold py-3 text-white">Follow Me</h3>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-white hover:bg-green-700 transition"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-white hover:bg-green-700 transition"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-white hover:bg-green-700 transition"
              >
                <FaYoutube size={20} />
              </a>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-white hover:bg-green-700 transition"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
          {/* new section close  */}
        </div>
        {/* Follow section  */}

        {/* profile section  */}
        <div className="md:w-1/3 flex justify-center items-center">
          <motion.img
            src="/riyazportfolio.jpeg"
            alt="riyaz img"
            className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover
            border-4 border-green-400"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
