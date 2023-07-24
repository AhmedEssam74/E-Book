// import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../App.css'

const MainNavbar = () => {
    return (
        <Navbar className='navBaaaaar' style={{ backgroundColor: '#1BBC9B' }} expand="lg">
            <Container >
                <Navbar.Brand href="#home" style={{ color: '#ECDE6A' }} >Books-Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link style={{ color: '#ECDE6A' }} as={Link} to={'/'}>Home</Nav.Link>
                        {/* <Nav.Link as={Link} to={'about'}>About</Nav.Link> */}
                        {/* <Button style={{ backgroundColor: '#1A9D57' , border:'none' }} as={Link} to={'admin'}>Admin</Button> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNavbar
