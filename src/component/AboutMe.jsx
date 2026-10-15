import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Rocket,
  Target,
  ArrowUpRight,
} from "lucide-react";

const journeyCards = [
  {
    icon: GraduationCap,
    title: "My Education",
    subtitle: "B.Tech / B.E. • 2026",
    description:
      "Completed my journey in Computer Science and Engineering, building a foundation in programming, software development, and problem-solving.",
  },
  {
    icon: Code2,
    title: "Technical Growth",
    subtitle: "Learning by Building",
    description:
      "Developing practical skills in JavaScript, React.js, Tailwind CSS, Node.js, and databases by creating interactive web projects.",
  },
  {
    icon: Rocket,
    title: "My Vision",
    subtitle: "Aspiring Software Engineer",
    description:
      "My goal is to build meaningful digital experiences, write clean code, and grow by working on real-world software solutions.",
  },
];

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#111111] px-6 py-24 text-white md:px-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-green-400/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-emerald-400/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
            Discover My Story
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            My <span className="text-green-400">Journey</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-green-400" />

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-gray-400">
            Every line of code is a step forward. Here is my journey of
            learning, building, and growing as a Software Engineer.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* <span className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-sm text-green-300">
              <Code2 size={16} />
              A Developer in Progress
            </span> */}

            <h3 className="text-2xl font-bold leading-snug md:text-3xl">
              Turning curiosity into
              <span className="text-green-400"> real-world solutions.</span>
            </h3>

            <p className="leading-8 text-gray-300">
              My journey into technology is driven by curiosity, continuous
              learning, and a passion for solving problems through code. As a
              Computer Science and Engineering graduate, I am working towards
              becoming a skilled Software Engineer.
            </p>

            <p className="leading-8 text-gray-400">
              I enjoy creating responsive interfaces, exploring modern web
              technologies, and turning ideas into functional projects. Every
              challenge helps me improve my coding, logical thinking, and
              problem-solving skills.
            </p>

            <p className="leading-8 text-gray-400">
              I believe consistency and practical experience are the keys to
              growth. I am eager to learn from experienced developers,
              collaborate with a team, and contribute to software that makes a
              difference.
            </p>

            <a
              href="#project"
              className="group inline-flex items-center gap-2 rounded-lg bg-green-400 px-6 py-3 font-semibold text-black transition hover:bg-green-300"
            >
              Explore My Projects
              <ArrowUpRight
                size={19}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>

          {/* Journey cards */}
          <div className="space-y-5">
            {journeyCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-green-400/50 hover:bg-green-400/[0.04]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-400/10 text-green-400 transition group-hover:bg-green-400 group-hover:text-black">
                      <Icon size={24} />
                    </div>

                    <div className="flex-1">
                      <h4 className="text-xl font-bold">{item.title}</h4>

                      <p className="mt-1 text-sm font-medium text-green-400">
                        {item.subtitle}
                      </p>

                      <p className="mt-3 text-sm leading-7 text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Career goal banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col gap-4 rounded-2xl border border-green-400/20 bg-gradient-to-r from-green-400/10 to-transparent p-6 md:flex-row md:items-center md:p-8"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-400/15 text-green-400">
            <Target size={26} />
          </div>

          <div>
            <h3 className="text-xl font-bold">My Career Goal</h3>
            <p className="mt-2 leading-7 text-gray-400">
              To become a strong Software Engineer, contribute to meaningful
              projects, and keep growing through learning, collaboration, and
              hands-on development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
