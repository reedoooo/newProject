import React, { Component } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Container } from "postcss";
import Experience from "../../oldFilez/Experience/Experience";


class ProjectsComponent extends Component {
  render() {
    return (
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
    );
  }
}

export default ProjectsComponent;
