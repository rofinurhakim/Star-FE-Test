import React from 'react'
import {Navbar , Container} from 'react-bootstrap'
import '../assets/style/style.scss'

const Nav = () => {
    return (
        <div>
             <Navbar className='bg' bg="white" variant="white">
    <Container>
    <Navbar.Brand className='mt-60'>StarTRAVELER</Navbar.Brand>
    <Navbar.Collapse className='justify-content-end mt-61'>
        <nav className='px-5'>Benefit</nav>
        <nav className='px-5'>Features</nav>
        <nav className='px-5'>Membership</nav>
        <nav className='px-5'>Review</nav>

    </Navbar.Collapse>
    </Container>
  </Navbar>
        </div>
    )
}




export default Nav