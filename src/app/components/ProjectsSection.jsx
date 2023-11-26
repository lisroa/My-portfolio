"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Breweries App",
    description: "Look for breweries in the city. Filter by city, name, or type and find your favorite.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lisroa/Breweries-App",
    previewUrl: "https://thebreweriesapp.netlify.app/",
  },
  {
    id: 2,
    title: "Pokemon Guesser",
    description: "It shows the image of an incognito pokemon on the screen and you must try to recognize who it is. If you got it right, you'll score a point, if not, you'll score a loss :)",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lisroa/Pokemon-Game",
    previewUrl: "https://pokeguesser.netlify.app/",
  },
  // {
  //   id: 3,
  //   title: "E-commerce Application",
  //   description: "Project 3 description",
  //   image: "/images/projects/3.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  {
    id: 4,
    title: "Geo Quizz",
    description: "A mini-quiz but with fewer categories :) This game will ask you different questions about geography and at the end it will show you your results",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/lisroa/Geo-quiz",
    previewUrl: "https://geoquizz.netlify.app/",
  },
  // {
  //   id: 5,
  //   title: "React Firebase Template",
  //   description: "Authentication and CRUD operations",
  //   image: "/images/projects/5.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
