import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
            <Navbar className="bg-light">
                <Container>
                    <Navbar.Brand href="#home" className=''>
                        <i className="fa-solid fa-diagram-project fa-xl"></i>
                        {' '}
                        ProjectFare
                    </Navbar.Brand>
                </Container>
            </Navbar>

        </>
    )
}

export default Header
