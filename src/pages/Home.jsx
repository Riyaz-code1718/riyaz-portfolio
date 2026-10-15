import React from "react";
import Hero from "../component/Hero.jsx";
import AboutMe from "../component/AboutMe.jsx";
// import Projects from "../component/Projects.jsx";
// import ProjectCard from "../component/ProjectCard.jsx";
import Skill from "../component/Skill.jsx";
import Experience from "../component/Experience.jsx";
import Contact from "../component/Contact.jsx";
import Footer from "../component/Footer.jsx";
const Home = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Skill />
      <Projects />
      <ProjectCard />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
