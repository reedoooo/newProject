import React, { Component } from "react";
import { Center, Grid, GridItem, Heading } from "@chakra-ui/react";
import Techstack from "./TechStack";
import Toolstack from "./ToolStack";

class Skills extends Component {
  render() {
    return (
      <>
        <Center>
          <Heading as="h2" size="lg" color={"white"}>
            Tech Skills
          </Heading>
        </Center>
        <Grid>
          <GridItem>
            <Techstack />
          </GridItem>
          <GridItem>
            <Toolstack />
          </GridItem>
        </Grid>
      </>
    );
  }
}

export default Skills;
