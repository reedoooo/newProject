import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import React, { Component } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { ProfilePage } from "../../auth/profile-page";
import { ModalButtons } from "./ModalButtons";

// import { useNavigate } from "react-router-dom";
// import { withRouter } from "react-router-dom";

// import Profile from "../../auth/Profile";
// import Content from "../../auth/Content";
// import AuthButtons from "../../auth/AuthButtons";
// import UserProfile from "../../auth/UserProfile";

class MyStuff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: {},
      // isAuthenticated: this.props.auth0.isAuthenticated,
      isOpen: false,
      hasData: false,
    };
  }

  handleOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    // your code for submitting the form goes here
  };

  loadUsers = async () => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;

      try {
        const config = {
          headers: { Authorization: `Bearer ${jwt}` },
          method: "get",
          baseURL: process.env.ISSUER_BASE_URL,
          url: "/profile",
        };

        const response = await axios(config);
        console.log(response);

        response.status === 200
          ? this.setState({ hasData: true, profileData: response.data }, () => {
              document.title = `${this.state.profileData.basic_info.name}`;
            })
          : this.setState({ hasData: false });

        console.log(response.data);
      } catch (error) {
        alert(error.message);
        return;
      }
    }
  };

  componentDidMount() {
    console.log("MyStuff Online");
    this.loadUsers(); // Call loadUsers here
  }

  render() {
    const { isOpen } = this.state;

    return (
      <>
        <Button onClick={this.handleOpen} bg="purple.500" color="white" mr={4}>
          Open Login Modal
        </Button>

        <Modal
          isOpen={isOpen}
          onClose={this.handleClose}
          isCentered={true}
          size="lg"
          zIndex={999}
        >
          <ModalOverlay />
          <ModalContent bg="gray.100" h="70vh" w="45vh" borderRadius="10px">
            <ModalHeader textAlign="center" fontWeight="bold">
              Welcome to My Website
            </ModalHeader>
            <ModalCloseButton color="gray.700" />
            <ModalBody>
              <FormControl>
                <FormLabel>Do you want to continue?</FormLabel>
                {/* <UserProfile userId={this.props.auth0.user.sub} /> */}
                {/* <Button onClick={} bg="purple.500" color="white" mr={4}>
          Open Login Modal
        </Button> */}
                {/* {this.props.auth0.isAuthenticated ? ( */}
                <>
                  {/* <Profile />
                    <Content /> */}
                  <ProfilePage />
                  <div>
                    <ModalButtons />
                  </div>
                </>
                {/* ) : (
                  <AuthButtons />
                )} */}
              </FormControl>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  }
}

export default withAuth0(MyStuff);

// import { withAuth0 } from "@auth0/auth0-react";
// import axios from "axios";
// import React, { Component } from "react";
// import {
//   Button,
//   FormControl,
//   FormLabel,
//   Modal,
//   ModalBody,
//   ModalCloseButton,
//   ModalContent,
//   ModalHeader,
//   ModalOverlay,
// } from "@chakra-ui/react";
// import Profile from "../../auth/Profile";
// import Content from "../../auth/Content";
// import AuthButtons from "../../auth/AuthButtons";
// import UserProfile from "../../auth/UserProfile";

// class MyStuff extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       profileData: {},
//       isOpen: false,
//       hasData: false,
//     };
//   }

//   handleOpen = () => {
//     this.setState({ isOpen: true });
//   };

//   handleClose = () => {
//     this.setState({ isOpen: false });
//   };

//   handleSubmit = async (e) => {
//     e.preventDefault();
//     // your code for submitting the form goes here
//   };

//   loadUsers = async () => {
//     if (this.props.auth0.isAuthenticated) {
//       const res = await this.props.auth0.getIdTokenClaims();
//       const jwt = res.__raw;

//       try {
//         const config = {
//           headers: { Authorization: `Bearer ${jwt}` },
//           method: "get",
//           baseURL: process.env.ISSUER_BASE_URL,
//           url: '/profile',
//         };

//         const response = await axios(config);
//         console.log(response);

//         response.status === 200
//           ? this.setState({ hasData: true, profileData: response.data }, () => {
//               document.title = `${this.state.profileData.basic_info.name}`;
//             })
//           : this.setState({ hasData: false });

//         console.log(response.data);
//       } catch (error) {
//         alert(error.message);
//         return;
//       }
//     }
//   };

//   componentDidMount() {
//     console.log("MyStuff Online");
//     this.callApi();
//     this.loadUsers(); // Call loadUsers here
//   }

//   render() {
//     const { isOpen } = this.state;

//     return (
//       <>
//         <Button onClick={this.handleOpen} bg="purple.500" color="white" mr={4}>
//           Open Login Modal
//         </Button>

//         <Modal
//           isOpen={isOpen}
//           onClose={this.handleClose}
//           isCentered={true}
//           size="lg"
//           zIndex={999}
//         >
//           <ModalOverlay />
//           <ModalContent bg="gray.100" h="70vh" w="45vh" borderRadius="10px">
//             <ModalHeader textAlign="center" fontWeight="bold">
//               Welcome to My Website
//             </ModalHeader>
//             <ModalCloseButton color="gray.700" />
//             <ModalBody>
//               <FormControl>
//                 <FormLabel>Do you want to continue?</FormLabel>
//                 <UserProfile userId={this.props.auth0.user.sub} />

//                 {this.props.auth0.isAuthenticated ? (
//                   <>
//                     <Profile />
//                     <Content />
//                   </>
//                 ) : (
//                   <AuthButtons />
//                 )}
//               </FormControl>
//             </ModalBody>
//           </ModalContent>
//         </Modal>
//       </>
//     );
//   }
// }

// export default withAuth0(MyStuff);
