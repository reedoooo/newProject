import React, { Component } from "react";
import { Flex } from "@chakra-ui/react";
import Header from "../../components/header/Header";
import HomeComponent from "./HomeComponent";
import ProfileComponent from "./ProfileComponent";
import ProjectsComponent from "./ProjectsComponent";
import NavBar from "../../components/headings/navbar/Navigation";

class Home extends Component {
  render() {
    return (
        <main display="flex" height="100%">
          <Flex flexDirection="column" w={"100vw"}>
            {/* ---------         ---------              ---------       ---------*/}
            {/* --------------------------------------- Header --------------------------------------- */}
            {/* ---------         ---------              ---------       ---------*/}
            <Header />
            {/* ---------         ---------              ---------       ---------*/}
            {/* --------------------------------------- Navbar --------------------------------------- */}
            {/* ---------         ---------              ---------       ---------*/}
            <NavBar
              // profileData={profileData.basic_info}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "200%",
                alignContent: "center", 
                top: "0",
              }}
            />
            {/* ---------         ---------              ---------       ---------*/}
            {/* --------------------------------------- Home section --------------------------------------- */}
            {/* ---------         ---------              ---------       ---------*/}
            <HomeComponent />
            {/* ---------         ---------              ---------       ---------*/}
            {/* --------------------------------------- Profile section --------------------------------------- */}
            {/* ---------         ---------              ---------       ---------*/}
            <ProfileComponent />
            {/* ---------         ---------              ---------       ---------*/}
            {/* --------------------------------------- Projects Section --------------------------------------- */}
            {/* ---------         ---------              ---------       ---------*/}
            <ProjectsComponent />
          </Flex>
        </main>
    );
  }
}

export default Home;
