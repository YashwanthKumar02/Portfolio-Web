import React from "react";
import Proficiency from "./Proficiency";
import Technology from "../Technology";
import techStack from "../../static/techStack";
import Experience from "./Experience";
import Project from "./Project";
import projects from "../../static/projects";
import { motion } from "framer-motion";

function Details() {
  return (
    <div className="relative md:w-2/4 w-full mx-auto bg-white min-h-screen shadow-black shadow-md p-4">
      <div className="mt-28">
        <Proficiency />
      </div>
      <hr className="border-t-2 border-gray-500 my-4" />
      <div className="font-sans text-sm p-2 font-semibold">
        Hi! I'm Yashwanth, a curious student with a passion for Full Stack
        Development and Machine Learning. I love diving into code, experimenting
        with new ideas, and uncovering hidden insights from data. Whether it's
        building dynamic web applications or crafting intelligent systems, I'm
        excited to innovate and create something extraordinary. Let's make
        technology magic together!
      </div>
      <div className="flex flex-wrap p-2 text-sm font-semibold gap-2">
        My personal favourite technologies I've worked with are
        {techStack &&
          techStack.map((tech) => <Technology key={tech.techName} {...tech} />)}
      </div>
      <div className="px-2 pt-1 font-sans text-sm font-semibold">
        You'll find many more really cool technologies I've used in my projects!
      </div>
      <hr className="border-t-2 border-gray-500 my-2" />
      <div className="px-2 pt-1 font-sans text-sm font-semibold">
        Let me share my experience with you!
      </div>
      <div className="flex mt-4">
        <div className="w-2 h-2 bg-slate-800 rounded-full mt-6" />
        <Experience />
      </div>
      <hr className="border-t-2 border-gray-500 my-2" />
      <div className="px-2 pt-1 font-sans text-sm font-semibold">
        Now, take a look at my projects!
      </div>
      {projects &&
        projects.map((project) => (
          <div className="flex mt-6">
            <motion.div className="w-2 h-2 bg-slate-800 rounded-full mt-8" 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.75}}
            />
            <Project key={project.title} {...project} />
          </div>
        ))}
    </div>
  );
}

export default Details;
