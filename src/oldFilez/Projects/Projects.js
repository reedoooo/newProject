import React, { Component } from "react";
import ProjectDetailsModal from "../utils/ProjectDetailsModal";
// import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import {
  Container,
  // VStack,
  Box,
  Grid,
  GridItem,
  Input,
  Select,
  InputGroup,
  InputLeftAddon,
  Divider,
} from "@chakra-ui/react";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      value: "All",
      deps: {},
      detailsModalShow: false,
      filteredProjects: [],
      projectArray: [],
      section_name:
        (this.props.profileData &&
          this.props.profileData.section_name &&
          this.props.profileData.section_name.projects) ||
        "",
    };
  }

  componentDidMount() {
    this.getProjArray();
    this.filterProjects(this.state.searchInput);
  }

  detailsModalShowHandler = (data) => {
    this.setState({ detailsModalShow: true, deps: data });
  };

  detailsModalCloseHandler = () => {
    this.setState({ detailsModalShow: false });
  };

  getProjArray = () => {
    const { profileData } = this.props;
    let response = profileData.projects || [];
    this.setState({ projectArray: response });
  };

  filterProjects = (query) => {
    const projectArray = this.state.projectArray;
    const { value } = this.state;
    let filtered = [];

    if (query.trim() === "") {
      filtered = projectArray;
    } else {
      filtered = projectArray.filter((project) =>
        project.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (value !== "All") {
      filtered.sort((a, b) => b[value] - a[value]);
    }

    this.setState({ filteredProjects: filtered });
  };

  //-------------------------------------SEARCH BAR-------------------------------------------
  handleChange = (e) => {
    const query = e.target.value;
    this.setState({ searchInput: query });
    this.filterProjects(query);
  };

  handleSelectChange = (e) => {
    const value = e.target.value;
    this.setState({ value }, () => {
      this.filterProjects(this.state.searchInput);
    });
  };

  render() {
    console.log("Projects Working");
    console.log(this.state);

    const { searchInput, value, detailsModalShow, deps } = this.state;

    const sectionName = this.state.section_name || "";
    console.log(sectionName);

    return (
<>
<span style={{ display: "block", minHeight: "100vh" }}></span>

        <Box
          style={{ height: "100vh" }}
          py={8}
          minHeight="100vh"
          position="relative"
        >
          <Divider />
   
          <Container id="projects">
            {/* <VStack> */}
            <Box className="background">
              <Box className="transparentbox">
                <section id="portfolio">
                  <InputGroup>
                    <Input
                      type="search"
                      onChange={this.handleChange}
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon1"
                      value={searchInput}
                    />
                    <InputLeftAddon children="Filter by:" />
                    <Select onChange={this.handleSelectChange} value={value}>
                      <option value="All">All</option>
                      <option value="name">Name</option>
                      <option value="popularity">Popularity</option>
                      <option value="recent">Recent</option>
                      <option value="size">Size</option>
                    </Select>
                  </InputGroup>
                </section>
              </Box>
            </Box>
            {/* </VStack> */}
  
            <Box className="background">
              <Box className="transparentbox">
                <section id="portfolio">
                  <GridItem>
                    <h1 className="section-title" style={{ color: "black" }}>
                      <span>{sectionName}</span>
                    </h1>
                    <Grid
                      templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
                      gap={4}
                    >
                      {this.state.filteredProjects.length ? (
                        <div>{this.renderProjects()}</div>
                      ) : null}
                    </Grid>
                    <ProjectDetailsModal
                      show={detailsModalShow}
                      onHide={this.detailsModalCloseHandler}
                      data={deps}
                    />
                  </GridItem>
                </section>
              </Box>
            </Box>
          </Container>
        </Box>
</>
    );
  }

  renderProjects = () => {
    const { filteredProjects } = this.state;
    const { profileData } = this.props;
    const projects = filteredProjects.length ? filteredProjects : profileData;

    console.log("DynamicProjects Online");
    return projects.map(
      (
        project,
        index // add index as the second argument
      ) => (
        <motion.div
          key={project.title}
          variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        >
          {/* <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
          > */}
            <div className="relative w-full h-[230px]">
              <div className="div-main">
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
                    {/* <img
                      src={github}
                      alt="source code"
                      className="w-1/2 h-1/2 object-contain"
                    /> */}
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">
                  {project.title}
                </h3>
                <p className="mt-2 text-secondary text-[14px]">
                  {project.description}
                </p>
                <span className="project-date">{project.startDate}</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <p>Not sure what this is yet</p>
                {/* {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))} */}
              </div>
            </div>
          {/* </Tilt> */}
        </motion.div>
      )
    );
  };
}

export default Projects;
