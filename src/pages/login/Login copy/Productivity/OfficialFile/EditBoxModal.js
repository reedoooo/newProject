import React from 'react';
import { Box, Container, Grid } from '@chakra-ui/react';

const EditBoxModal = () => {
  return (
    <Container maxW="container.xl">
    <Box width="100vw" height="100vh" overflow="hidden">
      <Grid
        width="100%"
        height="100%"
        templateColumns="repeat(3, 1fr)"
        templateRows="repeat(8, 1fr)"
        gap={0} <Grid.item+>
      >
    </Box>
  );
};

export default EditBoxModal;

