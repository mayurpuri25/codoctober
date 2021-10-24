import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { selectUser } from "../Redux/Slices/userSlice"
import { useSelector} from "react-redux"


import "../assets/css/components/navbar.css";
import Logo from "../assets/images/logo.png"

export default function NavBar() {
  const user = useSelector(selectUser)
  const [background, setBackground] = useState({
    backgroundColor: "transparent",
    color: "white",
    boxShadow: "none",
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let nav = document.getElementById("nav");
      let navHeight = nav.scrollHeight;
      if (window.scrollY >= navHeight) {
        setBackground({
          backgroundColor: "white",
          color: "black",
          boxShadow: "0px -8px 30px 10px #0000007d",
        });
      } else {
        setBackground({
          backgroundColor: "transparent",
          color: "white",
          boxShadow: "none",
        });
      }
    });
  }, []);

  return (
    <>
      <Navbar expand="md" id="nav" style={background}>
        <Container fluid="lg">
          <Navbar.Brand>
            <NavLink exact to="/">
            <img
                src={Logo}
                alt="logo"
                style={{ width: "60px", marginRight: "1rem" }}
              />
            </NavLink>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto linkContainer">
              <NavLink exact activeClassName="activeNavLinks" to="/">
                HOME
              </NavLink>
              <NavLink exact activeClassName="activeNavLinks" to="/catalog">
              CATALOG
              </NavLink>
              <NavLink exact activeClassName="activeNavLinks" to="/track">
                TRACK
              </NavLink>
              <NavLink exact activeClassName="activeNavLinks" to="/allnotes">
              Notes
              </NavLink>
                <section>
                    WELCOME, {user}
                </section>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
