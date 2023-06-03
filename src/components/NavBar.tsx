import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
const NavBar = () => {
  const [loginUser, setLoginUser] = useState<{ userName: string } | null>(null);
  useEffect(() => {
    const storedUser = localStorage.getItem("loginUser");
    if (storedUser !== null) {
      const parsedUser = JSON.parse(storedUser);
      setLoginUser(parsedUser);
    }
  }, [loginUser]);

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="navbar"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">
                {!loginUser || loginUser.userName !== "admin"
                  ? "List of Jobs"
                  : "List of Applicants"}
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/register">Register</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
