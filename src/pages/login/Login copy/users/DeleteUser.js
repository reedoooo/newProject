import React, { Component } from "react";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";

class DeleteUser extends Component {
  state = {
    userId: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { userId } = this.state;
    const { getAccessTokenSilently } = this.props.auth0;

    try {
      const token = await getAccessTokenSilently();
      await axios.delete(`/api/users/${userId}`, {
        headers: { Authorization: `Bearer ${token} `},
    });
    
    alert("User deleted successfully");
    } catch (error) {
    alert("Error deleting user");
    }
};
render() {
    const { userId } = this.state;
    return (
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="userId"
            value={userId}
            onChange={this.handleChange}
            placeholder="User ID"
            required
          />
          <button type="submit">Delete user</button>
        </form>
      );
    }
}

export default withAuth0(DeleteUser);      