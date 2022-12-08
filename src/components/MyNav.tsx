import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const MyNav = () => (
  <Navbar className="navbar" variant="dark" expand="lg">
    <Link to={"/"}>
      <Navbar.Brand>SpaceFlight News</Navbar.Brand>
    </Link>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link to={"/"}>
          <div className="navlink">Home</div>
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default MyNav;
