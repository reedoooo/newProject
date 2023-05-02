import { Box, Container, Divider, Heading } from "@chakra-ui/react";
import React, { Component } from "react";
import Github from "./Experience/Github";
import AboutCard from "./About/AboutCard";
import Skills from "./Skills/Skills";
// import Experience from "./Experience";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: this.props.profileData.basic_info,
    };
  }

  render() {
    console.log(this.state);

    return (
      <>
        <span style={{ display: "block", minHeight: "100vh" }}></span>
        <Box id="profile" py={8} minHeight="100vh" position="relative">
          <Container maxW="container.xl">
            <Heading as="h2" size="lg" color={"white"} textAlign={"center"}>
              Profile Section
            </Heading>
            <Divider borderColor={"red"} />
            <Heading as="h3" size="md" color={"white"}>
              {" "}
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum{" "}
            </Heading>
            <AboutCard />
            <Divider orientation="horizontal" />
            <Skills />
            <Divider orientation="horizontal" />
            {/* <Experience /> */}
            {/* <Divider orientation="horizontal" /> */}
            <Github />
          </Container>
        </Box>
      </>
    );
  }
}
