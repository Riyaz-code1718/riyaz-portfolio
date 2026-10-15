import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkedAlt,
  FaPhone,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Contact
          <span className="text-green-400 text-center">Me</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Let's talk!
        </p>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12
        max-w-5xl mx-auto"
        >
          <div>
            <form className="space-y-6 ">
              {/* your name  */}
              <div>
                <label
                  htmlFor="name"
                  className="block 
                        text-gray-100 mb-2"
                >
                  Your Name{" "}
                </label>
                <input
                  className="w-full bg-dark-400 border border-dark-400
                        rounded-lg px-4 py-3 outline-none "
                  type="text"
                />
              </div>
              {/* email  */}
              <div>
                <label
                  htmlFor="email"
                  className="block 
                        text-gray-100 mb-2"
                >
                  Email Address{" "}
                </label>
                <input
                  className="w-full bg-dark-400 border border-dark-400
                        rounded-lg px-4 py-3 outline-none "
                  type="email"
                />
              </div>
              {/* massage  */}
              <div>
                <label
                  htmlFor="message"
                  className="block 
                        text-gray-100 mb-2"
                >
                  Message Me{" "}
                </label>
                <textarea
                  className="w-full h-40 bg-dark-400 border border-dark-400
                        rounded-lg px-4 py-12 outline-none "
                  type="text"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue/25 rounded-lg
              font-medium hover:bg-green-800 transition duration-300 cursor:pointer"
              >
                Send
              </button>
            </form>
          </div>
          {/* information */}
          <div className="space-y-8">
            {/* location  */}
            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4 ">
                <FaMapMarkedAlt />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 ">Location </h3>
                <p className="text-gray-400">Noida, Uttarpradesh</p>
              </div>
            </div>
            {/* email  */}
            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4 ">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 ">Email </h3>
                <p className="text-gray-400">ddinriyazu810@gmail.com</p>
              </div>
            </div>
            {/* phone number  */}
            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4 ">
                <FaPhone />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 ">Mobile Number </h3>
                <p className="text-gray-400">8224984611</p>
              </div>
            </div>
            {/* Follow me  */}
            <div className="pt-4">
              <h3 className="font-bold py-3">Follow Me </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-dark-300
                    flex items-center justify-center text-white
                    hover:bg-green-700 hover:text-white transition duration-300"
                >
                  <FaGithub />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-dark-300
                    flex items-center justify-center text-white
                    hover:bg-green-700 hover:text-white transition duration-300"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-dark-300
                    flex items-center justify-center text-white
                    hover:bg-green-700 hover:text-white transition duration-300"
                >
                  <FaYoutube />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-dark-300
                    flex items-center justify-center text-white
                    hover:bg-green-700 hover:text-white transition duration-300"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
