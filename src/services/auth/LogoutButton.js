import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LogoutButton() {

  const {
    isAuthenticated,
    logout
  } = useAuth0();

  function handleLogout() {
    logout({ returnTo: process.env.REACT_APP_AUTH_REDIRECT_URI });
  }

  return isAuthenticated &&
      <button onClick={handleLogout}>Log out</button>
    ;
}

export default LogoutButton;

// import { useAuth0 } from '@auth0/auth0-react';

// function Logout() {

//   const {
//     isAuthenticated,
//     logout,
//   } = useAuth0();

//   const handleLogout = () => {
//     logout({ returnTo: process.env.REACT_APP_AUTH_REDIRECT_URI });
//   }

//   return isAuthenticated &&
//     handleLogout()
// }

// export default Logout;