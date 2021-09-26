import React from 'react'
import {Nav, Navbar, Container} from 'react-bootstrap'
import '../assets/style/style.scss'

const NavBar = () => {
    return (
        <>
        <div>
             <Navbar className="bg" bg="light" variant="light" expand="lg">
                <Container>
                <Navbar.Brand className='mt-60'>StarTRAVELER</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end mt-61" id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className='px-5'>Home</Nav.Link>
                        <Nav.Link href="#home" className='px-5'>Benefit</Nav.Link>
                        <Nav.Link href="#home" className='px-5'>Features</Nav.Link>
                        <Nav.Link href="#home" className='px-5'>Membership</Nav.Link>
                        <Nav.Link href="#home" className='px-5'>Review</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        </>
    )
}




export default NavBar