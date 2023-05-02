import React, { Component } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

import ObjectDetailsInput from "./ObjectDetailsInput";

class ObjectDetailsModal extends Component {
  render() {
    const { handleFormSubmit } = this.props;

    return (
      <Modal isOpen={this.props.isOpen} onClose={this.props.onClose}>
        <ModalOverlay />
        <ModalContent p={"10"}>
          <ModalHeader textAlign="center" fontWeight="bold" color="black">
            {`Object #${this.props.clickedBoxIndex} Settings`}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ObjectDetailsInput onSubmit={handleFormSubmit} />
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.props.onClose} className="addTabButton">
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }
}

export default ObjectDetailsModal;
