import React, { Component } from "react";
import Logo from "../../assets/logo.png";
import { Box, Flex, Text } from "@chakra-ui/react";


class HomeComponent extends Component {
  render() {
    return (
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
    );
  }
}

export default HomeComponent;
