import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authContext } from '../contextApi/Context';

function Header() {

    const nav=useNavigate()

    const {setAuthStatus}=useContext(authContext)


    const handleLogout=()=>{
        sessionStorage.clear()
        setAuthStatus(false)
        toast.info("User Loggedout!!")
        nav('/')
    }

    return (
        <>
            <Navbar className="bg-light">
                <Container>
                    <Navbar.Brand href="#home" className=''>
                        <i className="fa-solid fa-diagram-project fa-xl"></i>
                        {' '}
                        ProjectFare
                    </Navbar.Brand>
                    <button className="btn btn-light" onClick={handleLogout}>
                        Logout{' '}<i className="fa-solid fa-person-walking-arrow-right"></i>
                        </button>
                </Container>
            </Navbar>

        </>
    )
}

export default Header
