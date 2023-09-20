import { CartWidget } from "./CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
export const NavBar=()=>(
    <header>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand as={Link} to="/">E-TechTreasures</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/category/electronics">Electronicos</Nav.Link>
            <NavDropdown title="Accesorios" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/category/charger">Cargadores</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/headphones">
                Audífonos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/cases">Forros</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/category/accesories">
                Accesorios de Computador
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  </header>  
)

   
    