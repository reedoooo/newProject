


import React from 'react';
import { Flex, Grid, GridItem } from '@chakra-ui/react';

const GridExample = () => {
  const createGridItems = () => {
    const items = [];
    for (let i = 0; i < 24; i++) {
      items.push(
        <GridItem
          key={i}
          border="1px solid"
          borderColor="gray.200"
          p={4}
          minH="100px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          Box {i + 1}
        </GridItem>
      );
    }
    return items;
  };

  return (
    <Flex
      width="100%"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bg="gray.100"
    >
      <Grid
        templateRows="repeat(4, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={4}
        w="100%"
        maxW="1200px"
        p={6}
      >
        {createGridItems()}
      </Grid>
    </Flex>
  );
};

export default GridExample;
