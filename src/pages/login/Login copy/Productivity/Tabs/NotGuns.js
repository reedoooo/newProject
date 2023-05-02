import React, { useState, useEffect, useCallback } from "react";
import { Box, Divider, Heading } from "@chakra-ui/react";
import ObjectDetailsModal from "./ObjectDetailsModal";
import ObjectDetailsInput from "./ObjectDetailsInput";
import ObjectArrayContainer from "./ObjectArrayContainer";
import axios from "axios";
// import OpenNewTab from "./Tabs/OpenNewTab";
// import TabObjectData from "./TabObjectData";
import { useAuth } from "./AuthContext";
const ProductivityTab = () => {
  // const { isAuthenticated } = useAuth();
  const { getAccessTokenSilently } = useAuth0();

const ProductivityTab = () => {
  const [state, setState] = useState({
    opacity: 1,
    projectStorage: [],
    objectEditModalOpen: true,
    clickedBoxIndex: "",
    objectProperties: [],
    createdTabs: [],
    newTab: {},
    profileData: {}, // Add this line
  });
  // const token = getAccessTokenSilently();

// const token = "your_jwt_token_here";
  // const email = "user@example.com";
  // const password = "user_password";

  // fetch("/api/login", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ email, password }),
  // })
  //   .then((response) => {
  //     if (response.ok) {
  //       return response.json();
  //     } else {
  //       throw new Error("Authentication Bearer");
  //     }
  //   })
  //   .then((data) => {
  //     const token = data.token; // The property name depends on your server's response
  //     console.log("Received JWT token:", token);

  //     // Store the token (e.g., in localStorage or memory) for later use in authenticated requests
  //     localStorage.setItem("jwt_token", token);
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });

  fetch("/api/data", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Not Authorized");
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  const loadTabData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER}/profile`
      );

      if (response.status === 200) {
        setState({
          ...response.data[0],
          hasData: true,
          profileData: response.data.profileData,
        }); // Add profileData here
      } else {
        setState({ hasData: false });
      }

      console.log(response.data);

      console.log(response.data[3]);
    } catch (error) {
      alert(error.message);
      return;
    }
  };
  useEffect(() => {
    loadTabData();
  }, []);
  const inputData = {
    // Data to be sent in the POST request
  };

  const headers = {
    Authorization: `Bearer ${process.env.REACT_APP_JWT}`, // Replace `token` with your actual JWT
  };

  axios
    .post(`${process.env.REACT_APP_SERVER}/api`, inputData, { headers })
    .then((response) => {
      console.log(response.data);
      // Handle the response data here
    })
    .catch((error) => {
      console.error(error);
      // Handle the error here
    });

  const postTab = async (inputData) => {
    if (isAuthenticated) {
      try {
        let newTab = await axios.post(
          `${process.env.REACT_APP_SERVER}/api`,
          inputData
        );
        console.log(newTab);
        console.log("newTab:", newTab);
        setState((prevState) => ({
          ...prevState,
          createdTabs: [...prevState.createdTabs, newTab],
        }));
        getTabs();
      } catch (err) {
        console.error(err);
      }
    }
  };

  const getMalkova = useCallback(async () => {
    const config = {
      method: "get",
      baseURL: process.env.REACT_APP_SERVER,
      url: "/api",
    };

    const malkovaResponse = await axios(config);
    console.log(malkovaResponse);

    // Assuming malkovaResponse.data contains the array of photos
    setState((prevState) => ({
      ...prevState,
      photos: malkovaResponse.data,
    }));
  }, []);

  const getTabs = useCallback(async () => {
    const config = {
      method: "get",
      baseURL: process.env.REACT_APP_SERVER,
      url: "/api",
    };

    const tabsResponse = await axios(config);
    console.log(tabsResponse);

    if (tabsResponse.status === 200) {
      setState((prevState) => ({
        ...prevState,
        createdTabs: tabsResponse.data,
      }));
    }
  }, []);

  const updateTabTitle = async (id, newTitle) => {
    try {
      const config = {
        method: "put",
        baseURL: process.env.REACT_APP_SERVER,
        url: `/api/tabs/${id}`,
        data: { title: newTitle },
      };

      await axios(config);
      getTabs();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTab = async (id) => {
    const config = {
      method: "delete",
      baseURL: process.env.REACT_APP_SERVER,
      url: `/api/tabs/${id}`,
    };

    try {
      await axios(config);
      getTabs();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (isAuthenticated) {
      getTabs();
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [getTabs, isAuthenticated]);

  const handleOpenModal = (index) => {
    const clickedBoxIndex = index.toString();
    console.log("Box #" + clickedBoxIndex + " has been selected.");

    setState((prevState) => ({
      ...prevState,
      objectEditModalOpen: true,
      clickedBoxIndex: clickedBoxIndex,
    }));
  };

  const handleCloseModal = () => {
    setState((prevState) => ({ ...prevState, objectEditModalOpen: false }));
  };

  const handleFormSubmit = (formData) => {
    console.log(formData);
    setState((prevState) => {
      const updatedObjectProperties = prevState.objectProperties
        ? [...prevState.objectProperties]
        : [];
      updatedObjectProperties.push({
        index: formData.index,
        size: formData.size,
        title: formData.title,
        linkUrl: formData.linkUrl,
        imageUrl: formData.imageUrl,
      });
      // Create a new tab object
      const newTabObject = {
        index: formData.index,
        size: formData.size,
        title: formData.title,
        linkUrl: formData.linkUrl,
        imageUrl: formData.imageUrl,
      };

      // Save the new tab object to the JSON file
      // TabObjectData.push(newTabObject);

      setState((prevState) => {
        const updatedObjectProperties = prevState.objectProperties
          ? [...prevState.objectProperties]
          : [];
        updatedObjectProperties.push(newTabObject);

        return {
          ...prevState,
          objectProperties: updatedObjectProperties,
          objectEditModalOpen:
            updatedObjectProperties.length > 0 ? false : true,
        };
      });
    });

    // Process the form data here or pass it to other components
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPercent = scrollTop / (documentHeight - windowHeight);
    const newOpacity = 1 - scrollPercent * 2;

    setState((prevState) => ({
      ...prevState,
      opacity: newOpacity < 0 ? 0 : newOpacity,
    }));
  };

  const { opacity, objectEditModalOpen, clickedBoxIndex } = state;
  //ojectProperties: [],
  return (
    <>
      {" "}
      <Box
        style={{ height: "100vh" }}
        py={8}
        minHeight="100vh"
        position="relative"
      >
        {" "}
        <Divider />{" "}
        <Box
          className="glass-background"
          style={{
            opacity: opacity,
            transition: "opacity 0.5s ease-out",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bg: "rgba(255, 255, 255, 0.5)",
          }}
        ></Box>
        <Heading
          as="h1"
          size="2xl"
          textAlign="center"
          position={"relative"}
          alignItems={"bottom"}
          color="black"
          mb={8}
          zIndex={"900"}
        >
          Productivity Tab
        </Heading>
        <ObjectArrayContainer
          isAuthenticated={isAuthenticated}
          tabs={state.createdTabs}
          profileData={state.profileData} // Pass profileData here
          deleteTab={deleteTab}
          malkovaRises={getMalkova}
          updateTabTitle={updateTabTitle}
          handleOpenModal={handleOpenModal}
          handleSubmit={handleFormSubmit}
          photos={state.photos} // Pass the photos array here
        />
        <ObjectDetailsModal
          className="ObjectDetailsModal"
          isOpen={objectEditModalOpen}
          onClose={handleCloseModal}
          objectIndex={clickedBoxIndex}
          handleOpenModal={handleOpenModal}
        >
          <ObjectDetailsInput
            onSubmit={handleFormSubmit}
            postTab={postTab}
            profileData={state.profileData}
          />
          {/* <OpenNewTab handleOpenModal={handleOpenModal} /> */}
        </ObjectDetailsModal>
      </Box>
    </>
  );
};
}
export default ProductivityTab;
