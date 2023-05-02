import React, { useState, useEffect, useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row"; // Import Row
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { CgFileDocument } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineDashboard,
} from "react-icons/ai";
// import { Col } from "react-bootstrap";

function NavBar(props) {
  const [expand, updateExpanded] = useState(false);
  const navbarRef = useRef(null);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
      navbarRef.current.classList.add("sticky");
    } else {
      updateNavbar(false);
      navbarRef.current.classList.remove("sticky"); 
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <Navbar
      ref={navbarRef}
      expanded={expand} 
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={() => {
          updateExpanded(expand ? false : "expanded");
        }}
      >
        {/* <span></span>
        <span></span>
        <span></span> */}
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto" defaultActiveKey="#home" style={{ display: 'flex', alignItems: 'center' }}>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/"
              eventKey="home"
              onClick={() => updateExpanded(false)}
            >
              <AiOutlineHome style={{ marginBottom: "2px" }} />
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/profile"
              eventKey="profile"
              onClick={() => updateExpanded(false)}
            >
              <AiOutlineUser style={{ marginBottom: "2px" }} /> Profile
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/resume"
              eventKey="resume"
              onClick={() => updateExpanded(false)}
            >
              <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/projects"
              eventKey="projects"
              onClick={() => updateExpanded(false)}
            >
              <AiOutlineFundProjectionScreen
                style={{ marginBottom: "2px" }}
              />
              Projects
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/login"
              eventKey="login"
              onClick={() => updateExpanded(false)}
            >
              <AiOutlineDashboard style={{ marginBottom: "2px" }} /> Login
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="fork-btn">
            <Button
              href="https://github.com/reedoooo"
              target="_blank"
              className="fork-btn-inner"
            >
              <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
              <AiFillStar style={{ fontSize: "1.1em" }} />
            </Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
