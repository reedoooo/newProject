import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import "./assets/styles/reset.css";
import "./assets/styles/App.scss";
// import PrivateRoute from "./components/utils/PrivateRoute/PrivateRoute";
import Splash from "../pages/splash/Splash";
import Home from "../pages/home/HomeComponent";
import Profile from "./oldFilez/Profile/Profile";
import Resume from "./oldFilez/Resume/Resume";
import Projects from "../pages/projects/Projects";
import Login from "./oldFilez/Profile/Login";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";

export default class Main extends Component {

  render() {
    if (settings.isSplash) {
      return (
        <div>
          <BrowserRouter basename="/">
            <Switch>
              <Route
                path="/"
                exact
                render={(props) => (
                  <Splash {...props} profileData={this.props.profileData}  />
                )}
              />
              <Route
                path="/home"
                render={(props) => <Home {...props} profileData={this.props.profileData}  />}
              />
              <Route
                path="/login"
                exact
                render={(props) => (
                  <Login {...props} profileData={this.props.profileData}  />
                )}
              />
              <Route
                path="/profile"
                render={(props) => (
                  <Profile {...props} profileData={this.props.profileData}  />
                )}
              />
              <Route
                path="/resume"
                render={(props) => (
                  <Resume {...props} profileData={this.props.profileData}  />
                )}
              />

              <Route
                path="/splash"
                render={(props) => (
                  <Splash {...props} profileData={this.props.profileData}  />
                )}
              />
              <Route
                path="/projects"
                render={(props) => (
                  <Projects {...props} profileData={this.props.profileData}  />
                )}
              />
              {/* <Route
                path="/settings"
                render={(props) => (
                  <Settings {...props} profileData={this.props.profileData}  />
                )}
              /> */}
              <Route
                path="*"
                render={(props) => (
                  <Error404 {...props} profileData={this.props.profileData}  />
                )}
              />
            </Switch>
          </BrowserRouter>
        </div>
      );
    } else {
      return (
        <div>
          <BrowserRouter basename="/">
            <Switch>
            <Route
                path="/"
                exact
                render={(props) => <Home {...props} profileData={this.props.profileData} />}
              />
              <Route
                path="/home"
                render={(props) => <Home {...props} profileData={this.props.profileData}  />}
              />

            {/* {isAuthenticated && (
              <PrivateRoute path="/profile" render={<ProfilePage />} />
            )}
            {isAuthenticated && (
              <PrivateRoute path="/api/tabs" render={<ProductivityTab />} />
            )} */}

              <Route
                path="/login"
                exact
                render={(props) => (
                  <Login {...props} profileData={this.props.profileData}  />
                )}
              />
              <Route
                path="/profile"
                render={(props) => (
                  <Profile {...props} profileData={this.props.profileData}  />
                )}
              />
              <Route
                path="/resume"
                render={(props) => (
                  <Resume {...props} profileData={this.props.profileData}  />
                )}
              />

              <Route
                path="/splash"
                render={(props) => (
                  <Splash {...props} profileData={this.props.profileData}  />
                )}
              />
              <Route
                path="/projects"
                render={(props) => (
                  <Projects {...props} profileData={this.props.profileData}  />
                )}
              />
            {/* <Route
              path="/callback"
              render={
                <ProductivityTab
                  profileData={this.props.profileData} 
                />
              }
            /> */}

</Switch>
</BrowserRouter>
</div>
      );
    }
  }
}