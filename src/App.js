import "./assets/styles/reset.css";
import "./assets/styles/App.scss";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { useData } from './useData'; // import the custom hook
import Main from "./containers/Main";

function App() {
  const { profileData } = useData(); // use the custom hook

  return (
    <ChakraProvider>
      <Main profileData={profileData} />
    </ChakraProvider>
  );
}

export default App;
