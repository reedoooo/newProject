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
    <Modal isOpen={isOpen} onClose={onClose} zIndex={999}>
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

const CustomGrid = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleBoxClick = (index) => {
    setSelectedIndex(index);
    onOpen();
  };

  const updateBox = (values) => {
    const newBoxes = [...boxes];
    newBoxes[selectedIndex] = values;
    setBoxes(newBoxes);
  };

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
        {boxes.map((box, index) => (
          <Box
            key={index}
            w={box?.width || '100px'}
            h={box?.length || '100px'}
            bg={box?.color || 'white'}
            borderColor={box?.borderColor || 'black'}
            borderWidth="1px"
            onClick={() => handleBoxClick(index)}
          />
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
