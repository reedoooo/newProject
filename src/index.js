import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./assests/font-awesome/css/all.css";
import { Auth0ProviderWithHistory } from "./services/auth/auth0-provider-with-history";


const root = document.getElementById("root");
createRoot(root).render(
  <React.StrictMode>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
  </React.StrictMode>
);

serviceWorker.unregister(); 
