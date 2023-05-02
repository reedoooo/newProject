import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Grid,
  Box,
  IconButton,
  VStack,
  Image,
  Link,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import axios from 'axios';

function App() {
  const [widgets, setWidgets] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/widgets').then((response) => {
      setWidgets(response.data);
    });
  }, []);

  const addWidget = () => {
    const newWidget = {
      bgColor: 'gray.200',
      borderColor: 'black',
      imageUrl: '',
      linkUrl: '',
      widgetName: 'New Widget',
    };

    axios.post('http://localhost:5000/api/widgets', newWidget).then((response) => {
      setWidgets([...widgets, response.data]);
    });
  };

  return (
    <ChakraProvider>
      <Box>
        <IconButton
          icon={<AddIcon />}
          position="fixed"
          top="1rem"
          right="1rem"
          onClick={addWidget}
        />
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={4}
          maxWidth="100vw"
          maxHeight="100vh"
          p={4}
        >
          {widgets.map((widget) => (
            <Box
              key={widget._id}
              bg={widget.bgColor}
              borderWidth="2px"
              borderColor={widget.borderColor}
              borderRadius="lg"
              overflow="hidden"
              width="100%"
              height="100%"
            >
              <Link href={widget.linkUrl} isExternal>
                {widget.imageUrl && (
                  <Image src={widget.imageUrl} width="100%" height="66%" />
                )}
              </Link>
              <VStack
                alignItems="center"
                justifyContent="center"
                bg="rgba(0, 0, 0, 0.2)"
                height="34%"
              >
                <Box fontSize="lg" fontWeight="bold">
                  {widget.widgetName}
                </Box>
              </VStack>
            </Box>
          ))}
        </Grid>
        </Box>
import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Grid,
  Box,
  IconButton,
  VStack,
  Image,
  Link,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import axios from 'axios';

function App() {
  const [widgets, setWidgets] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/widgets').then((response) => {
      setWidgets(response.data);
    });
  }, []);

  const addWidget = () => {
    const newWidget = {
      bgColor: 'gray.200',
      borderColor: 'black',
      imageUrl: '',
      linkUrl: '',
      widgetName: 'New Widget',
    };

    axios.post('http://localhost:5000/api/widgets', newWidget).then((response) => {
      setWidgets([...widgets, response.data]);
    });
  };

  return (
    <ChakraProvider>
      <Box>
        <IconButton
          icon={<AddIcon />}
          position="fixed"
          top="1rem"
          right="1rem"
          onClick={addWidget}
        />
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={4}
          maxWidth="100vw"
          maxHeight="100vh"
          p={4}
        >
          {widgets.map((widget) => (
            <Box
              key={widget._id}
              bg={widget.bgColor}
              borderWidth="2px"
              borderColor={widget.borderColor}
              borderRadius="lg"
              overflow="hidden"
              width="100%"
              height="100%"
            >
              <Link href={widget.linkUrl} isExternal>
                {widget.imageUrl && (
                  <Image src={widget.imageUrl} width="100%" height="66%" />
                )}
              </Link>
              <VStack
                alignItems="center"
                justifyContent="center"
                bg="rgba(0, 0, 0, 0.2)"
                height="34%"
              >
                <Box fontSize="lg" fontWeight="bold">
                  {widget.widgetName}
                </Box>
              </VStack>
            </Box>
          ))}
        </Grid>      
        </Box>
      </ChakraProvider>
    );
  }
  
  export default App;
  