import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
const MyNav = () => {
  const location = useLocation();

  return (
    <Navbar className="navbar" variant="dark" expand="lg">
      <Link to={"/"}>
        <Navbar.Brand>SpaceFlight News</Navbar.Brand>
      </Link>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to={"/"}>
            <div
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </div>
          </Link>
          <Link to={"/ContactUs"}>
            <div className="nav-link">Contact Us</div>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNav;
