import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import ThreeSpinner from "./ThreeSpinner";

const AuthCallback = () => {
  const { isLoading, error, isAuthenticated, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    const redirect = async () => {
      if (isAuthenticated) {
        navigate("/ProductivityTab.js"); // Replace '/dashboard' with the URL of the page you want to redirect to
      } else if (error) {
        // handle error
      } else {
        await loginWithRedirect();
      }
    };

    redirect();
  }, [isLoading, error, isAuthenticated, loginWithRedirect, navigate]);

  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <ThreeSpinner />
    </div>
  );
};

export default AuthCallback;
