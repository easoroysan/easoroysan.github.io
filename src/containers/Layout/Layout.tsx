import "./Layout.scss";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Outlet } from "react-router-dom";

function App() {
  const navClicked = (stuff: any, thing: any) => {
    console.log(stuff, thing);
  };

  return (
    <div>
      <Navbar bg="light" sticky="top" onSelect={navClicked}>
        <Container>
          <Navbar.Brand>Roysan Easo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {/* <Nav.Link href="link">Example Work</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      <div className="app-container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
