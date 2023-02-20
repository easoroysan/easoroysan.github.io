import React from "react";
import pic from "./assets/professionalPicture.jpg";
import "./App.scss";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function App() {
  const navClicked = (stuff: any, thing: any) => {
    console.log(stuff, thing);
  };

  return (
    <div className="App">
      <Navbar bg="light" sticky="top" onSelect={navClicked}>
        <Container>
          <Navbar.Brand>Roysan Easo</Navbar.Brand>
          {/* <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav> */}
        </Container>
      </Navbar>
      <header className="App-header">
        <img src={pic} className="App-logo" alt="logo" />
        <p>Front-End Web Developer</p>
      </header>
    </div>
  );
}

export default App;
