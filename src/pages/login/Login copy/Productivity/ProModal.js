import React, { Component } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  VStack,
  Box,
  // Flex,
} from "@chakra-ui/react";
import { withAuth0 } from "@auth0/auth0-react";
// import axios from "axios";
import { ModalButtons } from "./ModalButtons";
import SignUpForm from "./SignUpForm";
import DeleteUser from "./DeleteUser";
import { LogoutButton } from "./LogoutButton";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: {},
      isOpen: false,
      hasData: false,
      opacity: 1, // Set initial opacity to 1
    };
  }

  handleOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    // your code for submitting the form goes here
  };

  componentDidMount() {
    console.log("ProModal Online");
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPercent = scrollTop / (documentHeight - windowHeight);
    const newOpacity = 1 - scrollPercent * 2;
    this.setState({ opacity: newOpacity < 0 ? 0 : newOpacity });
  };

  render() {
    const { isOpen, opacity } = this.state;

    return (
      <>
        <Box
          className="glass-background"
          style={{
            opacity: opacity,
            transition: "opacity 0.5s ease-out",
          }}
        ></Box>
        <Box position="fixed" top="50%" left="50%" transform="translate(-50%, -50%)" zIndex="1">
          <Button onClick={this.handleOpen} className="open-login-btn">
            Open Login Modal
          </Button>
        </Box>

        <Modal isOpen={isOpen} onClose={this.handleClose} isCentered size="lg" zIndex={999}>
          <ModalOverlay />
          <ModalContent className="modal-business">
            <ModalHeader textAlign="center" fontWeight="bold" color="var(--primary-color)">Welcome to My Website</ModalHeader>
            <ModalCloseButton color="gray.700" />
            <ModalBody>
              <FormControl>
                <FormLabel>Do you want to continue?</FormLabel>
                <>
                  <VStack spacing={6}>
                    <SignUpForm />
                    <DeleteUser />
                  </VStack>
                  <Stack direction="row" spacing={4} mt={8} justifyContent="center">
                    <ModalButtons />
                    <LogoutButton />
                  </Stack>
                </>
              </FormControl>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  }
}

export default withAuth0(Login);
