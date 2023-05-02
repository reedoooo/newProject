import React from "react";
import {
  Box,
  Center,
  Heading,
  Image,
  Text,
  VStack,
  Button,
  Stack,
  // Input,
  Textarea,
  Divider,
  Badge,
} from "@chakra-ui/react";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
    };
  }

  componentDidMount() {
    const { userId } = this.props;
    if (userId) {
      this.fetchData();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      this.fetchData();
    }
  }

  fetchData = async () => {
    const { userId } = this.props;
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/users/${userId}`
      );
      const data = await response.json();
      this.setState({ userData: data });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { userData } = this.state;

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
            <Image
              src={userData.picture}
              alt={userData.name}
              borderRadius="full"
              boxSize="150px"
              objectFit="cover"
            />
            <Heading as="h1" size="xl" mt="3">
              {userData.name}
            </Heading>
            <Text fontSize="lg" fontWeight="bold" mt="1">
              {userData.email}
            </Text>
            <Text fontSize="md" color="gray.600">
              {userData.nickname}
            </Text>
          </Box>
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
}

export default UserProfile;