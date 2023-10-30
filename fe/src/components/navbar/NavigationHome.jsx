import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Search from "../navbar/Search"
import "./navigation.css"
import { Link } from 'react-router-dom';

const NavigationHome = () =>
{
    return (

        <Navbar expand="lg" className="nav-costume">

            <Container fluid>

                <Navbar.Brand className='d-flex align-items-center ' href="#home">
                    <img
                        alt="Logo"
                        src="https://i.pinimg.com/originals/a6/dd/bc/a6ddbc6da8c7bf84f1ca99827ee9b14d.jpg"
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
                        <div className='link-costume d-flex justify-content-between align-items-center  '>
                            <Link className=' link-underline link-underline-opacity-0  text-dark fs-5 mx-2' to={`/home`} >Home</Link>
                            <Link className=' link-underline link-underline-opacity-0  text-dark fs-6 mx-2' to={`/contact`}>Contact</Link>
                            <Link className=' link-underline link-underline-opacity-0  text-dark fs-5 mx-2' to={ `/armor` } >Armor</Link>
                            <NavDropdown className='fs-5' title="Katana" id="navbarScrollingDropdown">
                                <NavDropdown.Item ><Link className='link-underline link-underline-opacity-0  text-dark fs-7 ' to={`/newkatane`} >New Katane</Link></NavDropdown.Item>
                                <NavDropdown.Item >
                                  <Link className='link-underline link-underline-opacity-0  text-dark fs-7 ' to={`/ancientkatane`}>Ancient Katana</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Link className=' link-underline link-underline-opacity-0  text-dark fs-5 mx-2' to={ `/museum` }  >
                                Museum
                            </Link>
                            <Link className=' link-underline link-underline-opacity-0  text-dark fs-5 mx-2' to={ `/travel` } >
                                Travel
                            </Link>
                            <Link className=' link-underline link-underline-opacity-0  text-dark fs-5 mx-2' to={ `/review` }>
                                Review
                            </Link>
                        </div>

                    </Nav>
                    <Search />
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavigationHome
