import "./assets/styles/reset.css";
import "./assets/styles/App.scss";
import { Box, ChakraProvider } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import NavBar from "./components/headings/navbar/Navigation";
import Header from "./components/headings/header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import Profile from "./oldFilez/Profile/Profile";
// import MyStuff from "./components/Login/Login";
import Projects from "./components/Projects/Projects";
import Footer from "./components/headings/Structural/Footer";
import Resume from "./oldFilez/Resume/Resume";
import { PageLoader } from "./services/auth/auth/oldAuth/page-loader";
import { useAuth0 } from "@auth0/auth0-react";
import PrivateRoute from "./components/utils/PrivateRoute/PrivateRoute";
import { ProfilePage } from "./services/auth/auth/oldAuth/profile-page";
import ProductivityTab from "./oldFilez/Login/Productivity/OfficialFile/ProductivityTab"; 
import Login from "./containers/profile/Login";
// import UserProfile from "./components/Profile/ProfileType2";
import ModelBox from "./oldFilez/Login/ToDoList/ModelBox";
import Splash from "./pages/splash/Splash";
// import { error } from "jquery";

function App() {
  const [profileData, setProfileData] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);
  const { isLoading } = useAuth0();
  const { isAuthenticated } = useAuth0(); 
  const { opacity } = useState({});

  useEffect(() => {

const options = { 
  method: "GET",
  url: "http://localhost:3001/api",
  headers:  `authorization: Bearer ${process.env.TOKEN}`,
};

axios(options)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log('byeeeeeeeeee'); 
    // const errorMessage = "OH SHIT OH FUCK --AUTH IS DOWN-- " + error.name + ". " + error.message;
  });
    const loadProfileData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER}/profile`);
        // const errorMessage = "OH SHIT OH FUCK --APP DOWN! APPPPPPPPPPPP-- " + error.name + ". " + error.message;

        if (response.status === 200) {
          setProfileData({ ...response.data[0], hasData: true });
        } else {
          setProfileData({ hasData: false });
        }

        setDataLoaded(true);
        console.log(response.data);

        console.log(response.data[3]);
      } catch (error) {
        alert(error.message);
        return;
      }
    };

    loadProfileData();
  }, []);

  useEffect(() => {
    if (dataLoaded && profileData.basic_info) {
      document.title = `${profileData.basic_info.name}`;
    }
  }, [dataLoaded, profileData]);

  return (
    <ChakraProvider>

    {/* <BrowserRouter basename="/"> */}
    {isLoading ? (
        <div className="page-layout">
          <PageLoader />
        </div>
      ) : (
        <>
          <Box
            className="glass-background"
            style={{
              opacity: opacity,
              transition: "opacity 0.5s ease-out",
            }}
          ></Box>
          <Header
            className="ignoreStyle"
            profileData={profileData.basic_info}
          />

          <NavBar
            profileData={profileData.basic_info}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "200%",
              alignContent: "center",
              top: "0",
            }}
          />
          <Routes> 
          <Route
                path="/"
                exact
                render={(props) => (
                  <Splash {...props} theme={this.props.theme} />
                )}
              />

            {isAuthenticated && (
              <PrivateRoute path="/profile" element={<ProfilePage />} />
            )}
            {isAuthenticated && (
              <PrivateRoute path="/api/tabs" element={<ProductivityTab />} />
            )}
            <Route
              exact
              path="/home"
              element={<LandingPage profileData={profileData} />}
            />
            <Route
              exact
              path="/login"
              element={<Login profileData={profileData} />}
            />
            <Route
              path="/modelbox"
              element={<ModelBox profileData={profileData} />}
            />            
            <Route
              path="/myprofile"
              element={<Profile profileData={profileData} />}
            />
            <Route
              path="/login"
              element={<Login profileData={profileData} />}
            />
            <Route
              path="/projects"
              element={<Projects profileData={profileData} />}
            />
            <Route
              path="/resume"
              element={<Resume profileData={profileData} />}
            />
            <Route
              path="/callback"
              element={
                <ProductivityTab
                  profileData={profileData}
                />
              }
            />
          </Routes>
          <Footer />
        </>
      )}
    {/* </BrowserRouter> */}
    </ChakraProvider>
  );
}

export default App;
