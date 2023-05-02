import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Route } from "react-router-dom";
import React from "react";
import { PageLoader } from "./page-loader";

export const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    component={withAuthenticationRequired(Component, {
      onRedirecting: () => (
        <div className="page-layout">
          <PageLoader />
        </div>
      ),
    })}
    {...rest}
  />
);

// import { withAuthenticationRequired } from "@auth0/auth0-react";
// import React from "react";
// import { Route } from "react-router-dom";
// import { PageLoader } from "./page-loader";

// export const ProtectedRoute = ({ component, ...args }) => (
//   <Route
//     component={withAuthenticationRequired(component, {
//       onRedirecting: () => (
//         <div className="page-layout">
//           <PageLoader />
//         </div>
//       ),
//     })}
//     {...args}
//   />
// );