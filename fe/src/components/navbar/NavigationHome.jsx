import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Search from "../navbar/Search"
import "./navigation.css"

const NavigationHome = () =>
{
    return (

        <Navbar expand="lg" className="nav-costume">

            <Container fluid>

                <Navbar.Brand className='d-flex align-items-center ' href="#home">
                    <img
                        alt="Logo"
                        src="https://static.vecteezy.com/system/resources/previews/007/163/193/original/template-logo-silhouette-samurai-background-red-moon-from-japan-free-vector.jpg"
                        width={ 100 }
                        className="logo-cap rounded-circle"
                        height={ 100 }
                        
                    />
                    <a className=' link-underline link-underline-opacity-0 text-danger mx-2' href='/'> KATANSTORY</a>
                </Navbar.Brand>


                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse className='mx-5 fs-6' id="navbarScroll">
                    <Nav
                        className="me-auto my-1 my-lg-0"
                        style={ { maxHeight: '100px' } }
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">About Us</Nav.Link>
                        <Nav.Link href="#action2">Armor</Nav.Link>
                        <NavDropdown title="Katana" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3"> New Katana</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Ancient Katana
                            </NavDropdown.Item>
                            <NavDropdown.Divider />

                        </NavDropdown>
                        <Nav.Link href="/museum" >
                            Museum
                        </Nav.Link>
                        <Nav.Link href="/travel" >
                            Travel
                        </Nav.Link>
                        <Nav.Link href="/review" >
                            Review
                        </Nav.Link>
                    </Nav>
                    <Search />
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavigationHome
