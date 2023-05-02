import React, { useState, useEffect } from "react";
import { Box, Center, Heading, Image, Text, VStack } from "@chakra-ui/react";

const UserProfile = ({ userId }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_SERVER}/users/${userId}`
        );
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);

  if (!userData) {
    return <Center>Loading...</Center>;
  }

  return (
    <Center
      w="60%"
      h="75%"
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
    >
      <VStack
        spacing={4}
        alignItems="center"
        w="100%"
        p={6}
        boxShadow="lg"
        borderRadius="md"
        bg="white"
      >
        <Box>
          <Heading as="h1" size="xl">
            {userData.name}
          </Heading>
          <Image
            src={userData.picture}
            alt={userData.name}
            borderRadius="full"
            boxSize="150px"
            objectFit="cover"
          />
          <Text>Email: {userData.email}</Text>
          <Text>Nickname: {userData.nickname}</Text>
        </Box>
      </VStack>
    </Center>
  );
};

export default UserProfile;
