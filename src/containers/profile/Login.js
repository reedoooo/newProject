import React, { useState, useCallback } from 'react';
import { Box, Grid, useDisclosure } from '@chakra-ui/react';
// import ObjectDetailsInput from './ObjectDetailsInput';
// import RetrievalReward from '../Login/Productivity/OfficialFile/RetrievalReward';
import OpenNewTab from '../Login/Productivity/OfficialFile/OpenNewTab';
import EditBoxModal from '../../oldFilez/Login/Productivity/OfficialFile/EditBoxModal';
// RetrievalReward from './Productivity/OfficialFile/RetrievalReward';
import ObjectDetailsInput from './Productivity/OfficialFile/ObjectDetailsInput';

class ObjectArrayContainer extends React.Component {
RetreivalReward = ({
  isAuthenticated,
  handleOpenModal,
  createdTabs = [],
  index = 0,
  children,
  onTabsUpdate,
}) => {
  // Declare state variables
  const [tabs, setTabs] = useState(createdTabs);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Handle box click event
  const handleBoxClick = (index) => {
    setSelectedIndex(index);
    onOpen();
  };

  // Update box details
  const updateBox = (values) => {
    const newBoxes = [...boxes];
    newBoxes[selectedIndex] = values;
    setBoxes(newBoxes);
  };

  // Add a new tab
  const addTab = useCallback(
    (styles) => {
      const newTab = {
        ...styles,
        title: "New Tab",
        linkUrl: "https://example.com",
        imageUrl: "https://example.com/image.jpg",
      };

      // Update the tabs state and open the modal for the new tab
      setTabs((prevTabs) => {
        const updatedTabs = [...prevTabs, newTab];
        onTabsUpdate(updatedTabs);
        return updatedTabs;
      });
      handleOpenModal(tabs.length + 1);
    },
    [onTabsUpdate, handleOpenModal, tabs.length]
  );

  // Render the component
  return (
    <Box w="100%" h="100vh" p={5}>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={4}
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="center"
      >
        <ObjectDetailsInput />
        <OpenNewTab addTab={addTab} />
        {/* Map over the boxes state and render each box */}
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
      </Grid>
      {/* Render the EditBoxModal */}
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

// Export the component
export default ObjectArrayContainer;
