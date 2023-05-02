import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


renderProjects = () => { 

    const { filteredProjects } = this.state;
    const { basic_info } = this.props;
    const projects = filteredProjects.length ? filteredProjects : basic_info;

    console.log("DynamicProjects Online");
    return projects.map((project) => (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >

  <div className="relative w-full h-[230px]">
    <div className="div-main" key={project.title}>

          <img
            src={project.images[0]}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => this.detailsModalShowHandler(project)}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{project.title}</h3>
          <p className="mt-2 text-secondary text-[14px]">
            {project.description}
          </p>
          <span className="project-date">{project.startDate}</span>

        </div>

        <div className="mt-4 flex flex-wrap gap-2"><p>Not sure what this is yet</p>
          {/* {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))} */}
        </div>
        {/* <Grid
          id="profile"
          className={``}
          style={{ position: "relative" }}
          templateRows="repeat(4, 1fr)"
          gap={4}
        >
          {console.log("Profile Online")} */}
{/*
          <GridItem rowStart={4}>
            <div className="div-main" key={project.title}>
              <Col
                xs={4}
                className="wrapper2"
                style={{ cursor: "pointer" }}
                onClick={() => this.detailsModalShowHandler(project)}
              >
                <span className="portfolio-item d-block">
                  <div className="foto">
                    <div>
                      <img
                        src={project.images[0]}
                        alt="projectImages"
                        height="230"
                        width="368"
                        style={{
                          marginBottom: 0,
                          paddingBottom: 0,
                          position: "relative",
                        }}
                      />
                      <span className="project-date">{project.startDate}</span>
                      <br />
                      <p className="project-title-settings mt-3">
                        {project.title}
                      </p>
                    </div>
                  </div>
                </span>
              </Col>
            </div>
          </GridItem>
        </Grid> */}
        </div>

      </Tilt>
    </motion.div>
    ));
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
