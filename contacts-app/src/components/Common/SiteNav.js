import { Authenticator } from "@aws-amplify/ui-react"; 
import { Container, Nav, Navbar } from "react-bootstrap";


function SiteNav(props) {
  const handleLogout = () => {
    props.logOut();
  }

  return (
    <header>
      <Navbar bg='dark' expand='lg' variant='dark'>
        <Container>
          <Navbar.Brand href='#'>Contacts App</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-md-auto'>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>
    </header>
  )
}

export default SiteNav;
