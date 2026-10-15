import React from "react";
import { Route, Routes } from "react-router";
// import Home from "./pages/home";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import AboutMe from "./component/AboutMe";
import Skill from "./component/Skill";
import Projects from "./component/Projects";
import Experience from "./component/Experience";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
// import ProjectCard from "./component/ProjectCard";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <aboutInfo />
      <Skill />
      <Projects />
      <Experience />
      <Contact />
      {/* <ProjectCard /> */}
      <Routes>
        <Route path="/" element={<home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
