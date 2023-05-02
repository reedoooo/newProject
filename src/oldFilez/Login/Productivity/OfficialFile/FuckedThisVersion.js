import React, { useState, useEffect, useCallback } from "react";
import { Box, Divider, Heading } from "@chakra-ui/react";
import ObjectDetailsModal from "./ObjectDetailsModal";
import ObjectDetailsInput from "./ObjectDetailsInput";
import ObjectArrayContainer from "./ObjectArrayContainer";
import axios from "axios";

const ProductivityTab = () => {
  const [state, setState] = useState({
    opacity: 1,
    projectStorage: [],
    objectEditModalOpen: true,
    clickedBoxIndex: "",
    objectProperties: [],
    createdTabs: [],
    profileData: {},
  });

  const getMalkova = useCallback(async () => {
    const config = {
      method: "get",
      baseURL: process.env.REACT_APP_SERVER,
      url: "/api",
    };

    const malkovaResponse = await axios(config);
    console.log(malkovaResponse);

    setState((prevState) => ({
      ...prevState,
      photos: malkovaResponse.data,
    }));
  }, []);

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
    const newTabObject = {
      index: formData.index,
      size: formData.size,
      title: formData.title,
      linkUrl: formData.linkUrl,
      imageUrl: formData.imageUrl,
    };

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    getMalkova();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, getMalkova]);

  return (
    <>
      <Heading as="h1" size="2xl" textAlign="center" mb={5}>
        Productivity Tab
      </Heading>
      <Box w="100%" h="100vh" p={5} opacity={opacity}>
        <Divider mb={5} />
        <ObjectDetailsInput onSubmit={handleFormSubmit} />
        <ObjectArrayContainer
          handleOpenModal={handleOpenModal}
          createdTabs={state.createdTabs}
        />
      </Box>
      <ObjectDetailsModal
        isOpen={objectEditModalOpen}
        onClose={handleCloseModal}
        selectedBox={state.objectProperties[clickedBoxIndex] || {}}
        onFormSubmit={handleFormSubmit}
      />
    </>
  );
};

export default ProductivityTab;
