import React, { Component } from "react";
import { Box } from "@chakra-ui/react";

class TestTab extends Component {
  render(props) {
    const { index, onClick } = this.props;

    return (
      <Box
        justifySelf={"center"}
        className="gridBoxItem" width=
        {{
          base: "calc(90vw / 3)", // 0-48em
          md: "calc(90vw / 3)", // 48em-80em,
          xl: "calc(90vw / 3)", // 80em+
        }}
        height=
        {{
          base: "calc(90vw / 3)", // 0-48em
          md: "calc(90vw / 3)", // 48em-80em,
          xl: "calc(90vw / 3)", // 80em+
        }}
        borderColor={"black"}
        bgColor={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJClm6DOQHjdxZ8xTXAU99Dd6g93MEZq45ycV1OaHUxyEZNf5VKqnVzkIFUdJcwnPaNH0&usqp=CAU`}
        w={"100%"}
        h={"100%"}
        bgSize={"cover" }
        bgPos={"center" }
        boxShadow={"sm" }
        zIndex={'999'}
        // display={"block"}
        {...() => onClick(index)}>
      </Box>
    );
  }
}

export default TestTab;
