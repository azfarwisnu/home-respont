import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import icon from "../styles/icon.png";

class ComponentHeader extends React.Component {
  render() {
    return (
      <>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg=""
          variant="dark"
          className="pb-5 mb-4"
        >
          <div className="container-fluid">
            <Navbar.Brand href="/" className="mt-2">
              <img src={icon} alt="logo" className="img-logo" />
              <b>RESPONT</b>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link className="mt-2">Solutions</Nav.Link>
                <Nav.Link eventKey={2} href="#memes" className="mt-2">
                  About us
                </Nav.Link>
                <Nav.Link href="https://respont-app.netlify.app/">
                  <button className="btn-set btn">Try it out</button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </>
    );
  }
}

export default ComponentHeader;
