import React, { Component } from "react";
import { Box } from "@chakra-ui/react";
import $ from "jquery";

class DefaultTabObject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "https://fuckjpg.com/201907/19/2141735093.jpg",
      width: "calc(90vw / 3)",
      height: "calc(90vw / 3)",
      borderWidth: "1px",
      modifiedBox: {},
      changes: [],
    };
  }

  handleWidthChange = () => {
    const newWidth = $("#width-input").val();
    if (newWidth) {
      const modifiedBox = { ...this.state.modifiedBox, width: newWidth };
      const changes = [...this.state.changes, `Width: ${newWidth}`];
      this.setState({ width: newWidth, modifiedBox, changes });
    }
  };

  handleHeightChange = () => {
    const newHeight = $("#height-input").val();
    if (newHeight) {
      const modifiedBox = { ...this.state.modifiedBox, height: newHeight };
      const changes = [...this.state.changes, `Height: ${newHeight}`];
      this.setState({ height: newHeight, modifiedBox, changes });
    }
  };

  handleBorderWidthChange = () => {
    const newBorderWidth = $("#border-width-input").val();
    if (newBorderWidth) {
      const modifiedBox = {
        ...this.state.modifiedBox,
        borderWidth: `${newBorderWidth}px`,
      };
      const changes = [
        ...this.state.changes,
        `Border Width: ${newBorderWidth}px`,
      ];
      this.setState({
        borderWidth: `${newBorderWidth}px`,
        modifiedBox,
        changes,
      });
    }
  };

  handleImageUrlChange = () => {
    const newImageUrl = $("#image-url-input").val();
    if (newImageUrl) {
      const modifiedBox = { ...this.state.modifiedBox, imageUrl: newImageUrl };
      const changes = [...this.state.changes, `Image URL: ${newImageUrl}`];
      this.setState({ imageUrl: newImageUrl, modifiedBox, changes });
    }
  };

  handleBackgroundSizeChange = () => {
    const newBackgroundSize = $("#background-size-input").val();
    if (newBackgroundSize) {
      const modifiedBox = {
        ...this.state.modifiedBox,
        backgroundSize: newBackgroundSize,
      };
      const changes = [
        ...this.state.changes,
        `Background Size: ${newBackgroundSize}`,
      ];
      this.setState({ modifiedBox, changes });
    }
  };

  handleBackgroundPositionChange = () => {
    const newBackgroundPosition = $("#background-position-input").val();
    if (newBackgroundPosition) {
      const modifiedBox = {
        ...this.state.modifiedBox,
        backgroundPosition: newBackgroundPosition,
      };
      const changes = [
        ...this.state.changes,
        `Background Position: ${newBackgroundPosition}`,
      ];
      this.setState({ modifiedBox, changes });
    }
  };

  handleBoxShadowChange = () => {
    const newBoxShadow = $("#box-shadow-input").val();
    if (newBoxShadow) {
      const modifiedBox = {
        ...this.state.modifiedBox,
        boxShadow: newBoxShadow,
      };
      const changes = [
        ...this.state.changes,
        `Box Shadow: ${newBoxShadow}`,
      ];
      this.setState({    modifiedBox,
        changes,
      });
    }
  };

  handleClick = () => {
  const { index, onClick } = this.props;
  onClick(index, this.state.modifiedBox);
  };
  
  render() {
  const {
  width,
  height,
  borderWidth,
  imageUrl,
  changes,
  } = this.state;
  const { index } = this.props;
  
  return (
    <Box
      justifySelf={"center"}
      className="gridBoxItem"
      width={width}
      height={height}
      borderColor={"black"}
      borderWidth={borderWidth}
      bg={`url(${imageUrl})`}
      bgSize="cover"
      bgPos="center"
      boxShadow="sm"
      display="block"
      onClick={this.handleClick}
    >
      <div className="input-container">
        <label htmlFor="width-input">Width: </label>
        <input type="text" id="width-input" />
        <button onClick={this.handleWidthChange}>Update</button>
      </div>
      <div className="input-container">
        <label htmlFor="height-input">Height: </label>
        <input type="text" id="height-input" />
        <button onClick={this.handleHeightChange}>Update</button>
      </div>
      <div className="input-container">
        <label htmlFor="border-width-input">Border Width: </label>
        <input type="text" id="border-width-input" />
        <button onClick={this.handleBorderWidthChange}>Update</button>
      </div>
      <div className="input-container">
        <label htmlFor="image-url-input">Image URL: </label>
        <input type="text" id="image-url-input" />
        <button onClick={this.handleImageUrlChange}>Update</button>
      </div>
      <div className="input-container">
        <label htmlFor="background-size-input">Background Size: </label>
        <input type="text" id="background-size-input" />
        <button onClick={this.handleBackgroundSizeChange}>Update</button>
      </div>
      <div className="input-container">
        <label htmlFor="background-position-input">
          Background Position:{" "}
        </label>
        <input type="text" id="background-position-input" />
        <button onClick={this.handleBackgroundPositionChange}>
          Update
        </button>
      </div>
      <div className="input-container">
        <label htmlFor="box-shadow-input">Box Shadow: </label>
        <input type="text" id="box-shadow-input" />
        <button onClick={this.handleBoxShadowChange}>Update</button>
      </div>
      <div>
        <h4>Changes:</h4>
        <ul>
          {changes.map((change, index) => (
            <li key={index}>{change}</li>
          ))}
        </ul>
      </div>
    </Box>
  );
}
}

export default DefaultTabObject;  
