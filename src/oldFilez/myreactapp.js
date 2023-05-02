// client/src/components/HomescreenItem.js
import { Box } from "@chakra-ui/react";

const HomescreenItem = ({ item }) => {
  return (
    <Box
      bg={item.style.backgroundColor}dsf
      border={item.style.border}
      borderRadius="md"
      h="100%"
      w="100%"
      p={4}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        h="100%"
      >
        <Box>{item.content}</Box>
        <Box>{item.name}</Box>
      </Box>
    </Box>
  );
};

export default HomescreenItem;
