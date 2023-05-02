import React, { useState, useEffect } from "react";
import { Box, Divider } from "@chakra-ui/react";
import ObjectDetailsModal from "./ObjectDetailsModal";
import ObjectDetailsInput from "./ObjectDetailsInput";
import ObjectArrayContainer from "./ObjectArrayContainer";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import TabObject from "./TabObject";
import { useCallback } from "react";
import CreateTab from "./CreateTab";

const ProductivityTab = () => {
  const [state, setState] = useState({
    opacity: 1,
    projectStorage: [],
    objectEditModalOpen: false,
    clickedBoxIndex: "",
    objectProperties: [], // Set this to an empty array
    newTab: {},
  });

  const [createdTabs, setCreatedTabs] = useState([]);
  const { isAuthenticated, getIdTokenClaims } = useAuth0();

  // postTab sends a POST request to create a new tab with the given inputData.

  const postTab = async (inputData) => {
    if (isAuthenticated) {
      console.log("Its this one, authorized!");
      const res = await getIdTokenClaims();
      const jwt = res.__raw;

      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
      };

      try {
        let newTab = await axios.post(
          `${process.env.REACT_APP_SERVER}/tabs`,
          inputData,
          config
        );
        setState((prevState) => ({
          createdTabs: [...prevState.createdTabs, newTab],
        }));
        getTabs();
      } catch (err) {
        console.error(err);
      }
    }
  };

  // getTabs sends a GET request to fetch all tabs for the authenticated user.

  const getTabs = useCallback(async () => {
    if (isAuthenticated) {
      const res = await getIdTokenClaims();
      const jwt = res.__raw;

      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        method: "get",
        baseURL: process.env.REACT_APP_SERVER,
        url: "/tabs",
      };

      const tabsResponse = await axios(config);
      console.log("tabsResponse:", tabsResponse);
      if (tabsResponse.status === 200) {
        setCreatedTabs(tabsResponse.data);
        console.log("Updated createdTabs state:", tabsResponse.data);
      }
    }
  }, [isAuthenticated, getIdTokenClaims]);

  // updateTabTitle sends a PUT request to update the title of an existing tab.

  const updateTabTitle = async (id, newTitle) => {
    try {
      const res = await getIdTokenClaims();
      const jwt = res.__raw;

      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        method: "put",
        baseURL: process.env.REACT_APP_SERVER,
        url: `/tabs/${id}`,
        data: { title: newTitle },
      };

      await axios(config);
      getTabs();
    } catch (err) {
      console.error(err);
    }
  };

  // deleteTab sends a DELETE request to delete a tab with the given id.

  const deleteTab = async (id) => {
    const res = await getIdTokenClaims();
    const jwt = res.__raw;

    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
      method: "delete",
      baseURL: process.env.REACT_APP_SERVER,
      url: `/tabs/${id}`,
    };

    try {
      await axios(config);
      getTabs();
    } catch (err) {
      console.error(err);
    }
  };

  // This useEffect hook manages the event listeners for scrolling and fetches tabs when the user is authenticated.

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (isAuthenticated) {
      getTabs();
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isAuthenticated, getTabs]);

  // handleOpenModal sets the clickedBoxIndex and opens the objectEditModal.

  const handleOpenModal = (index) => {
    const clickedBoxIndex = index.toString();
    console.log("Box #" + clickedBoxIndex + " has been selected.");

    // const malkovaData = this.props.malkovaData;
    // console.log(malkovaData);

    setState({
      objectEditModalOpen: true,
      clickedBoxIndex: clickedBoxIndex,
    });
  };

  // handleCloseModal closes the objectEditModal.

  const handleCloseModal = () => {
    setState({ objectEditModalOpen: false });
  };

  // handleFormSubmit updates the objectProperties state with formData and logs the updated state.

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

      return {
        ...prevState,
        objectProperties: updatedObjectProperties,
      };
    });

    // Process the form data here or pass it to other components
  };

  // handleScroll adjusts the opacity of the glass-background based on the scroll position.

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPercent = scrollTop / (documentHeight - windowHeight);
    const newOpacity = 1 - scrollPercent * 2;
    setState({ opacity: newOpacity < 0 ? 0 : newOpacity });
  };

  const { opacity, objectEditModalOpen, clickedBoxIndex } = state;
  console.log(state);
  // console.log(malkovaData[4]);
  console.log(state.objectProperties);
  return (
    <>
      <Box
        style={{ height: "100vh" }}
        py={8}
        minHeight="100vh"
        position="relative"
      >
        <Divider />
        {isAuthenticated && (
          <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            h="100vh"
            w={"100vw"}
            bg="blue.500"
            color="white"
            fontWeight="bold"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            Welcome, {state.profileData.basic_info.name}!
          </Box>
        )}
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

        <ObjectArrayContainer
          isAuthenticated={isAuthenticated}
          createdTabs={createdTabs}
          deleteBook={deleteTab}
          updateBookTitle={updateTabTitle}
          handleOpenModal={handleOpenModal}
        >
          {createdTabs.map((tabObject, index) => (
            <TabObject
              key={index}
              size={tabObject.size}
              title={tabObject.title}
              linkUrl={tabObject.linkUrl}
              imageUrl={tabObject.imageUrl}
              index={index}
              onClick={handleOpenModal}
            />
          ))}
          <CreateTab newTab={state.objectProperties} />
        </ObjectArrayContainer>

        <ObjectDetailsModal
          className="ObjectDetailsModal"
          isOpen={objectEditModalOpen}
          onClose={handleCloseModal}
          objectIndex={clickedBoxIndex}
        >
          <ObjectDetailsInput onSubmit={handleFormSubmit} postTab={postTab} />
        </ObjectDetailsModal>
      </Box>
    </>
  );
};

export default ProductivityTab;
