import React, { Component } from "react";
import { Box, Grid } from "@chakra-ui/react";
import TabObject from "./DefaultTabObject";

class CreateTab extends Component {
    render() {
      const { isAuthenticated, handleOpenModal, newTab = [] } = this.props;
      console.log(newTab)
      return (
        <Box
          className="gridBoxContainer"
          px={2}
          py={isAuthenticated ? 16 : 8}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            className="gridBox"
            templateColumns="repeat(3, 1fr)"
            gap={4}
            w={"100%"}
            h={"100vh"}

            zIndex={"100"}
          >
            {newTab.map((tab, index) => (
              <TabObject
                key={index}
                size={tab.size}
                title={tab.title}
                linkUrl={tab.linkUrl}
                imageUrl={tab.imageUrl}
                index={index}
                onClick={() => handleOpenModal(index)}
              />
            ))}
            {this.props.children}
          </Grid>
        </Box>
      );
    }
  }
  

export default CreateTab;
