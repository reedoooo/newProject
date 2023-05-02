import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  Center,
  Heading,
  Image,
  Text,
  VStack,
  Button,
  Stack,
  Input,
  Textarea,
  Divider,
  Badge,
  Flex,
  Grid,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

function UserProfile({ userId }) {
  const [userData, setUserData] = useState(null);
  const [image, setImage] = useState(null);
  const toast = useToast();

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER}/users/${userId}`
      );
      setUserData(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [userId]);

  useEffect(() => {
    if (userId) {
      fetchData();
    }
  }, [userId, fetchData]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const uploadImage = async () => {
    if (!image) {
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      await axios.post(
        `${process.env.REACT_APP_SERVER}/upload/${userId}`,
        formData
      );
      toast({
        title: "Image uploaded successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      fetchData();
    } catch (error) {
      console.error(error);
      toast({
        title: "Image upload failed.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

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
        <Grid templateColumns="repeat(2, 1fr)" gap={4} w="100%">
          <Box>
            <Image
              src={userData.picture}
              alt={userData.name}
              borderRadius="full"
              boxSize="150px"
              objectFit="cover"
            />
            <Input type="file" onChange={handleImageChange} />
            <Button colorScheme="purple" onClick={uploadImage} mt="2">
              Upload Image
            </Button>
          </Box>
          <Flex flexDirection="column" justifyContent="center">
            <Heading as="h1" size="xl" mt="3">
              {userData.name}
            </Heading>
            <Text fontSize="lg" fontWeight="bold" mt="1">
              {userData.email}
            </Text>
            <Text fontSize="md" color="gray.600">
              {userData.nickname}
            </Text>
          </Flex>
        </Grid>
        <Box w="100%" mt="6">
          <Stack direction="row" spacing="4" align="center">
            <Badge colorScheme="purple" px="2" py="1">
              Friends
            </Badge>
            <Badge colorScheme="purple" px="2" py="1">
              Photos
            </Badge>
            <Badge colorScheme="purple" px="2" py="1">
              Posts
            </Badge>
            <Badge colorScheme="purple" px="2" py="1">
              About
            </Badge>
          </Stack>
          <Divider my="6" />
          <Text fontSize="xl" fontWeight="bold" mb="4">
            About
          </Text>
          <Textarea placeholder="Write something about yourself..." />
          <Button colorScheme="purple" mt="4">
            Save Changes
          </Button>
        </Box>
      </VStack>
    </Center>
  );
}

export default UserProfile;
