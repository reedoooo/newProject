import React, { Component } from "react";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";

class SignupForm extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const { getAccessTokenSilently } = this.props.auth0;

    try {
      const token = await getAccessTokenSilently();
      await axios.post(
        "/api/users",
        { email, password },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("User created successfully");
    } catch (error) {
      alert("Error creating user");
    }
  };

  render() {
    const { email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
          placeholder="Password"
          minLength="8"
          required
        />
        <button type="submit">Sign up</button>
      </form>
    );
  }
}

export default withAuth0(SignupForm);
