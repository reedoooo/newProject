// import React, { useCallback, useState } from "react";
// import { Box, Grid, useDisclosure } from "@chakra-ui/react";
// import DefaultTabObject from "./Tabs/DefaultTabObject";
// import OpenNewTab from "./Tabs/OpenNewTab";
// import SettingsTab from "./Tabs/SettingsTab";
// import TestTab from "./Tabs/TestTab";
// import ObjectDetailsModal from "./ObjectDetailsModal";

const ObjectArrayContainer = ({
  isAuthenticated,
  handleOpenModal,
  createdTabs = [],
  index = 0,
  children,
  onTabsUpdate,
}) => {
  const [tabs, setTabs] = useState(createdTabs);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [selectedIndex, setSelectedIndex] = useState(null);
  
  const updateBox = (values) => {
    const newBoxes = [...boxes];
    newBoxes[selectedIndex] = values;
    setBoxes(newBoxes);
  };

  const EditBoxModal = ({ isOpen, onClose, selectedBox, onBoxUpdate }) => {
    const [values, setValues] = useState(selectedBox);

    const handleChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
      onBoxUpdate(values);
      onClose();
    };

  const addTab = useCallback(
    (styles) => {
      const newTab = {
        ...styles,
        title: "New Tab",
        linkUrl: "https://example.com",
        imageUrl: "https://example.com/image.jpg",
      };

      setTabs((prevTabs) => {
        const updatedTabs = [...prevTabs, newTab];
        onTabsUpdate(updatedTabs);
        return updatedTabs;
      });
      handleOpenModal(tabs.length + 1); // Open the modal for the newly added tab
    },
    [onTabsUpdate, handleOpenModal, tabs.length]
  );

  //   const handleFormSubmit = (formData) => {
  //     setTabs((prevTabs) => {
  //       const updatedTabs = prevTabs.map((tab, i) =>
  //         i === formData.index
  //           ? {
  //               ...tab,
  //               size: formData.size,
  //               title: formData.title,
  //         //       return updatedTabs;
  //     });
  //   };

  return (
    <Box
      className="gridBoxContainer"
      px={2}
      py={isAuthenticated ? 16 : 8}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {/* <Grid
        className="gridBox"
        templateColumns="repeat(3, 1fr)"
        gap={4}
        w={"100vw"}
        zIndex={"100"}
      >
        {boxes.map((box, index) => (
          <Box
            key={index}
            w={box ? box.width : '100px'}
            h={box ? box.length : '100px'}
            bg={box ? box.color : 'white'}
            borderColor={box ? box.borderColor : 'black'}
            borderWidth="1px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            onClick={() => handleBoxClick(index)}
          >
            {!box && <span>Add Box</span>}
          </Box>
         ))}
      </Grid>         */}
        <OpenNewTab
          onClick={() => {
            const styles = {
              size: "medium",
              background: "rgba(0, 0, 0, 0.5)",
            };
            addTab(styles);
          }}
          className="addTabButton"
        />
        <DefaultTabObject
          key={0}
          size={"medium"}
          title={"title"}
          linkUrl={
            "https://www.instagram.com/p/ChMivTjOYrX/?utm_source=ig_web_copy_link"
          }
          imageUrl={
            "https://xyya.net/uploads/posts/2017-03/1490542631_jpg24.jpg"
          }
          index={0}
          onClick={() => handleOpenModal(0)}
          zIndex={"999"}
        />
        <SettingsTab />
        <TestTab />

        {tabs.map((tab, index) => (
          <DefaultTabObject
            key={index + 1}
            size={tab.size}
            title={tab.title}
            background={"rgba(0, 0, 0, 0.5)"}
            linkUrl={tab.linkUrl}
            zIndex={"999"}
            index={index + 1}
            onClick={() => handleOpenModal(index + 1)}
          />
        ))}
        {children}
        <EditBoxModal
        isOpen={isOpen}
        onClose={onClose}
        selectedBox={boxes[selectedIndex] || {}}
        onBoxUpdate={updateBox}
      />
    </Box>

  );
};
}

export default ObjectArrayContainer;

