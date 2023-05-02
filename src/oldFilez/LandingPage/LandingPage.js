import React, { Component } from "react";
// import RetrievalReward from '../Login/Productivity/OfficialFile/RetrievalReward';

import { Box, Container, Divider, Flex, Heading, Text } from "@chakra-ui/react";

import Logo from "../../assets/logo.png";
import Techstack from "../../oldFilez/Profile/Skills/TechStack";
import Experience from "../../oldFilez/Profile/Experience/Experience";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }
  render() {

    console.log(this.props);
    return (
      <>
        <main display="flex" height="100%">
          {/* ---------         ---------              ---------       ---------*/}
          {/* --------------------------------------- Home section --------------------------------------- */}
          {/* ---------         ---------              ---------       ---------*/}
          <Flex flexDirection="column" w={"100vw"}>
            <Flex
              alignItems="center"
              justifyContent="center"
              h={`calc(100vh - 100px)`}
              w={"100vw"}
              flexDirection="column"
            >
              <Box textAlign="center" zIndex={60} w={"100vw"}>
                <Box
                  as="img"
                  src={Logo}
                  alt="My Logo"
                  boxSize="100px"
                  margin="-25px auto "
                />
                <br />
                <Text
                  as="h1"
                  mb={0}
                  fontFamily={
                    "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
                  }
                  fontSize={"300%"}
                  textAlign={"center"}
                  fontWeight="600 !important"
                  color={"white"}
                >
                  {/* {this.props.profileData.basic_info.name} */}
                </Text>
              </Box>
            </Flex>
            {/* ---------         ---------              ---------       ---------*/}
            {/* --------------------------------------- Profile section --------------------------------------- */}
            {/* ---------         ---------              ---------       ---------*/}
            <Flex
              alignItems="center"
              justifyContent="top"
              h={`calc(100vh - 100px)`}
              w="100vw"
              flexDirection="column"
            >
              <Box textAlign="center" zIndex={60} w={"100vw"} h={"100vh"}>
                <Container>
                  <Heading
                    as="h2"
                    size="xl"
                    color={"white"}
                    textAlign={"center"}
                    lineHeight={"10"}
                  >
                    Profile Section
                  </Heading>
                  <Divider borderColor={"red"} />
                  <Heading as="h3" size="md" color={"white"}>
                    {" "}
                    Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions
                    of Lorem Ipsum.{" "}
                  </Heading>
                </Container>
                <Techstack />
              </Box>
            </Flex>
            {/* ---------         ---------              ---------       ---------*/}
            {/* --------------------------------------- Projects Section --------------------------------------- */}
            {/* ---------         ---------              ---------       ---------*/}
            <Flex
              alignItems="center"
              justifyContent="top"
              h={`calc(100vh - 100px)`}
              w="100vw"
              flexDirection="column"
            >
              <Box textAlign="center" zIndex={60} w={"100vw"} h={"100vh"}>
              <Container>
                <Experience profileData={this.props.profileData} />
              </Container>
              </Box>
            </Flex>
          </Flex>
        </main>
      </>
    );
  }
}
