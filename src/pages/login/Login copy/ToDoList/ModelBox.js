import React, { useState } from 'react';
import {
  Box,
  Grid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';

const CustomGrid = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [selectedIndex, setSelectedIndex] = useState(null);

//handles box click + initiates updateBox function with state
  const handleBoxClick = (index) => {
    setSelectedIndex(index);
    onOpen();
  };
//updates box new index, 
  const updateBox = (values) => {
    const newBoxes = [...boxes];
    newBoxes[selectedIndex] = values; 
    setBoxes(newBoxes);
  };
//sets states for usecases and modal status 
  const EditBoxModal = ({ isOpen, onClose, selectedBox, onBoxUpdate }) => {
    const [values, setValues] = useState(selectedBox);

    const handleChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
      onBoxUpdate(values);
      onClose();
    };

    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Box</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="length">
              <FormLabel>Length</FormLabel>
              <Input
                name="length"
                value={values.length}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="width">
              <FormLabel>Width</FormLabel>
              <Input
                name="width"
                value={values.width}
                onChange={handleChange}
              />
            </FormControl>
            {/* Add more form controls for other properties */}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Submit
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };

  return (
    <Box w="100%" h="100vh" p={5}         zIndex={'999 !important'}
    > 
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={4}
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="center"
        zIndex={'999 !important'}
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
      </Grid>
      <EditBoxModal
        isOpen={isOpen}
        onClose={onClose}
        selectedBox={boxes[selectedIndex] || {}}
        onBoxUpdate={updateBox}
      />
    </Box>
  );
};

export default CustomGrid;
