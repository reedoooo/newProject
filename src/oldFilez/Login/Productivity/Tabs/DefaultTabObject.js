import React, { Component } from "react";
import { Box } from "@chakra-ui/react";

class DefaultTabObject extends Component {
  render(props) {
    const { index, onClick, imageUrl } = this.props;


    return (
      <Box
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
        bg={`url(${imageUrl})`}
        bgSize="cover"
        bgPos="center"
        boxShadow="sm"
        display="block"
        onClick={() => onClick(index)}
      ></Box>
    );
  }
}

export default DefaultTabObject;
