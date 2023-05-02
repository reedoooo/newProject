// client/src/components/AddButton.js
import { IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const AddButton = ({ onClick }) => {
  return (
    <IconButton
      position="fixed"
      top="1rem"
      right="1rem"
      aria-label="Add widget"
      icon={<AddIcon />}
      onClick={onClick}
    />
  );
};

export default AddButton;
