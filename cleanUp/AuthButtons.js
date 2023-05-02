import React from "react";
import Nav from "react-bootstrap/Nav";
// import { Link } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";
import { AiOutlineDashboard } from "react-icons/ai";

const LoginButton = (props) => {
  const { loginWithRedirect } = useAuth0();

  // return <button onClick={() => loginWithRedirect()}>Log In</button>;
  return (
      <Nav.Link
        // as={Link}
        // to="/mystuff"
        // eventKey="mystuff"
        onClick={() => loginWithRedirect()}
      >
        <AiOutlineDashboard style={{ marginBottom: "2px" }} /> MyStuff
      </Nav.Link>
  );
};

export default LoginButton;
