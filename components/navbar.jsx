import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function BarNav(){
    return(
        <div>
            <Navbar bg="light" data-bs-theme="light">
        <Container >
         <Navbar.Brand href="#home">
            <img
              src="../src/img/weblogo.png"
              width="200"
              className="d-inline-block align-top"
              alt="Rebecca Rojas"
            />
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#home">Projects</Nav.Link>
            <Nav.Link href="#features">Contact me</Nav.Link> 
            <Nav.Link href="https://github.com/becca1709" target='_blank' >GitHub</Nav.Link> 
            <Nav.Link href="https://www.linkedin.com/in/rebeccarojas/" target='_blank'> LinkedIn </Nav.Link>

          </Nav>
        </Container>
      </Navbar>
        </div>
    )
}