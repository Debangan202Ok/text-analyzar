import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PropTypes from 'prop-types'
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Mynavbar(props) {
  return (
    <>
      <Navbar bg={props.colors[0].bg} variant={props.colors[0].txt} >
        <Container >
          <Navbar.Brand to="/">Text App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/">Home</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="MODES"
              menuVariant="dark"
            >
              <NavDropdown.Item onClick={props.click} >DARK MODE</NavDropdown.Item>
              <NavDropdown.Item onClick={props.click3} >
                LIGHT MODE
              </NavDropdown.Item>
              <NavDropdown.Item onClick={props.click2} >GREENISH</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
Mynavbar.propTypes = {
  about: PropTypes.string,
  colors: PropTypes.array,
  click: PropTypes.func,
  click2: PropTypes.func,
  click3: PropTypes.func,
}
