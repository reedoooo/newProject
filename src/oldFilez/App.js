// client/src/App.js
import React, { useState, useEffect } from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";
import HomescreenItem from "./components/HomescreenItem";
import AddButton from "./components/AddButton";

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch items from the server
    fetch("http://localhost:5000/homescreenItems")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const addItem = () => {
    // Add a new item to the grid
    const newItem = {
      name: "New Widget",
      content: "Customize me!",
      style: {
        border: "2px solid black",
        backgroundColor: "gray",
      },
      link: "",
    };

    fetch("http://localhost:5000/homescreenItems", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => setItems([...items, data]));
  };

  return (
    <Box h="100vh" w="100vw" p={4}>
      <SimpleGrid
        columns={[2, 3, 6]}
        spacing={4}
        minChildWidth="180px"
        maxHeight="80%"
        overflowY="auto"
      >
        {items.map((item) => (
          <HomescreenItem key={item._id} item={item} />
        ))}
      </SimpleGrid>
      <AddButton onClick={addItem} />
    </Box>
  );
};

export default App;
