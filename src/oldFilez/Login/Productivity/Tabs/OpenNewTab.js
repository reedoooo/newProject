import React, { Component } from "react";
import { Box, Heading } from "@chakra-ui/react";

class OpenNewTab extends Component {
  render(props) {
    const { index, onClick } = this.props;

    return (
      <Box
      tabIndex={ index}
        justifySelf={"center"}
        className="gridBoxItem"
        width={{
          base: "calc(90vw / 3)", // 0-48em
          md: "calc(90vw / 3)", // 48em-80em,
          xl: "calc(90vw / 3)", // 80em+
        }}
        height={{
          base: "calc(90vw / 3)", // 0-48em
          md: "calc(90vw / 3)", // 48em-80em,
          xl: "calc(90vw / 3)", // 80em+
        }}
        borderColor={"black"}
        background={"rgba(0, 0, 0, 0.5)"}
        bgSize={"cover"}
        bgPos={"center"}
        boxShadow={"sm"}
        zIndex={"999"}
        display={"relative"}
        justifyContent={'center'}
        alignItems={'center'}
        {...() => onClick()}
      >
        <Heading
          as="h3"
          size="m"
          top={"50%"}
          textAlign="center"
          position={'relative'}
          color="white"
          // mb={8}
          zIndex={"900"}
        >
          New Tab
        </Heading>
      </Box>
    );
  }
}

export default OpenNewTab;
