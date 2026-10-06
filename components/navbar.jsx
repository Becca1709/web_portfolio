import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import brand from "../src/img/logo_portfolio.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


export function BarNav({Projectscroll, Contactscroll}){
    return(
        <div>
            <Navbar bg="light" data-bs-theme="light">
        <Container >
         <Navbar.Brand href="#home">
           <h1>Rebecca Rojas</h1>
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <button type="button" onClick={Projectscroll}>Projects</button>
            <button type="button" onClick={Contactscroll}>Contact me</button> 
            <Nav.Link href="https://github.com/becca1709" target='_blank' ><FontAwesomeIcon icon={faGithub} size="xl" style={{color: "rgb(87, 125, 186)",}} /></Nav.Link> 
            <Nav.Link href="https://www.linkedin.com/in/rebeccarojas/" target='_blank'> <FontAwesomeIcon icon={faLinkedinIn} size="xl" style={{color: "rgb(87, 125, 186)",}} /> </Nav.Link>
    

          </Nav>
        </Container>
      </Navbar>
        </div>
    )
}