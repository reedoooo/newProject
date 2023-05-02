import React, { Component } from "react";
import { Link } from "react-router-dom";
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
} from "@chakra-ui/react";
import { Circle } from "@chakra-ui/react";
import { withAuth0 } from '@auth0/auth0-react';

class SecretModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    // your code for submitting the form goes here
  };

  render() {
    const { user, isAuthenticated } = this.props.auth0;

    const { isOpen } = this.state;
    return (
      <>
        <Button onClick={this.handleOpen} bg="purple.500" color="white" mr={4}>
          Open Login Modal
        </Button>

        <Modal
          isOpen={isOpen}
          onClose={this.handleClose}
          isCentered={true}
          size="lg"
          zIndex={999}
        >
          <ModalOverlay />
          <ModalContent bg="gray.100" h="70vh" w="45vh" borderRadius="10px">
            <ModalHeader textAlign="center" fontWeight="bold">
              Welcome to My Website
            </ModalHeader>
            <ModalCloseButton color="gray.700" />
            <ModalBody>
              <FormControl>
                <FormLabel>Do you want to continue?</FormLabel>
                {isAuthenticated ? (
                  <>
                    {' '}
                    <Button
                      as={Link}
                      to='/logout'
                      p={2}
                      fontSize='sm'
                      fontWeight={400}
                      variant='link'
                    >
                      Sign Out
                    </Button>
                    <Circle size='40px'>

                      <img
                        src={user.picture}
                        alt='user'
                        style={{ borderRadius: '20px' }}></img>

                    </Circle>
                  </>
                ) : (
                  <Button
                    as={Link}
                    to='/login'
                    p={2}
                    fontSize='sm'
                    fontWeight={400}
                    variant='link'
                  >
                    Sign In
                  </Button>
                )}
              </FormControl>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  }
}

export default withAuth0(SecretModal);
