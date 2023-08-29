import { CartWidget } from "./CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
export const NavBar=()=>(
    <header>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">E-TechTreasures</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/category/electronics">Electronicos</Nav.Link>
            <NavDropdown title="Accesorios" id="basic-nav-dropdown">
              <NavDropdown.Item href="/category/charger">Cargadores</NavDropdown.Item>
              <NavDropdown.Item href="/category/headphones">
                Audífonos
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/cases">Forros</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/category/accesories">
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

   
    