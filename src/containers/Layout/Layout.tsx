import "./Layout.scss";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Home from "../Home/Home";
import { useState } from "react";
import NoPage from "../NoPage/NoPage";

function App() {
  console.log(window.location.hash);
  const [currentPage, setCurrentPage] = useState(<Home />);

  const navClicked = (url: string | null) => {
    switch (url?.substring(2)) {
      case "home":
        setCurrentPage(<Home />);
        break;
      default:
        setCurrentPage(<NoPage />);
    }
  };

  // navClicked(window.location.hash);

  return (
    <div>
      <Navbar bg="light" sticky="top" onSelect={navClicked}>
        <Container>
          <Navbar.Brand>Roysan Easo</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="/#home">Home</Nav.Link> */}
            {/* <Nav.Link href="/#projects">Example Work</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      <div className="app-container">{currentPage}</div>
    </div>
  );
}

export default App;
