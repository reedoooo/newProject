import React, { Component } from "react";
import { Box, Container, Divider, Flex, Heading } from "@chakra-ui/react";
import Techstack from "../../oldFilez/Skills/TechStack";

class ProfileComponent extends Component {
  render() {
    return (
      <div>
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
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.{" "}
              </Heading>
            </Container>
            <Techstack />
          </Box>
        </Flex>
      </div>
    );
  }
}

export default ProfileComponent;
