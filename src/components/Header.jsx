import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="" variant="dark">
        <div className="container">
          <Navbar.Brand href="/" className="mt-2">
            <span className="respont">R E S P O N T</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <a href="#solutions" className="text-light mb-2 mt-3 mx-3">
                Solutions
              </a>
              <a href="#technology" className="text-light mb-2 mt-3 mx-3">
                Techology
              </a>
              <a
                href="https://respont-app.netlify.app/"
                className="btn-header btn mx-3"
                target="_blank"
                rel="noreferrer"
              >
                Demo App
              </a>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}

export default Header;
