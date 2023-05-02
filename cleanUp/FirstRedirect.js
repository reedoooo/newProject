import React, { Component } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { login, handleAuthentication } from './auth/auth0';

function Login() {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return null;
  }

  return (
    <button onClick={login}>Log in</button>
  );
}

function Logout() {
  const { isAuthenticated, logout } = useAuth0();

  if (!isAuthenticated) {
    return null;
  }

  return (
    <button onClick={() => logout()}>Log out</button>
  );
}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  async componentDidMount() {
    try {
      const authResult = await handleAuthentication();
      // Use the authResult to make authenticated API requests to your backend
      const response = await fetch('/api/data', {
        headers: {
          Authorization: `Bearer ${authResult.accessToken}`,
        },
      });
      const data = await response.json();
      this.setState({ data });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div>
        <h1>My Component</h1>
        <p>Data: {JSON.stringify(this.state.data)}</p>
        <Login />
        <Logout />
      </div>
    );
  }
}

export default MyComponent;