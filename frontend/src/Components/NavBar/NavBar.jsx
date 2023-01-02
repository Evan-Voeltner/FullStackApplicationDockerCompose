import './NavBar.css'
import { Navbar, Container } from 'react-bootstrap';
import {ReactComponent as Headphones} from './headphones.svg'



const NavBar = (props) => {
    return ( 
        <Navbar bg="info" variant="info">
        <Container className={"container-fluid"} >
          <Navbar.Brand href="#home" style={{"color": "white"}} >
            <Headphones height='3rem'/>{' '}
          The Magnificent Music Library!
          </Navbar.Brand>
        </Container>
      </Navbar>


     );
}
 
export default NavBar;