import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
export const NavbarA=()=>{
  return(<div>
<Navbar bg="success" variant="dark" sticky="top" expand="sm" collapseOnSelect >
        <Navbar.Brand>
          <img src="https://iconarchive.com/download/i91958/icons8/windows-8/Users-Administrator-2.ico" width="70px" height="45px" /> {' '}
          Jewelry Store
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav>
            <Nav.Link href=""><button type="button" class="btn btn-warning"><Link to="/"> Home </Link> </button></Nav.Link>
            <Nav.Link href="Shoes"><button type="button" class="btn btn-warning"> <Link to="/Bracelets">bracelets</Link> </button></Nav.Link>
            <Nav.Link href="Short"><button type="button" class="btn btn-warning"> <Link to="/Rings"> Rings</Link> </button></Nav.Link>
            <Nav.Link href="Short"><button type="button" class="btn btn-warning"> <Link to="/Watches">Watches</Link> </button></Nav.Link>
            <Nav.Link href="Short"><button type="button" class="btn btn-warning"> <Link to="/Necklaces">Necklaces</Link> </button></Nav.Link>



            <NavDropdown title="Man">
              <NavDropdown.Item href=""> <Link to=""> Watches</Link> </NavDropdown.Item>
              <NavDropdown.Item href="">Rings</NavDropdown.Item>
              <NavDropdown.Item href="">Necklaces</NavDropdown.Item>
              <NavDropdown.Item href="">Bracelets</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>)
}