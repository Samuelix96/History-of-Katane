import React from 'react'
import Search from "../navbar/Search"
import "./navigation.css"
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';

const NavigationHome = () =>
{
    const [ show, setShow ] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (

        <Navbar expand="lg" className="nav-costume">

            <Container fluid >

                <Navbar.Brand className='d-flex align-items-center ' href="/">
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
                <Navbar.Collapse className='fs-6' id="navbarScroll">
                    <Nav
                        className="me-auto d-flex justify-content-center align-items-center "
                        style={ { maxHeight: '100px' } }
                        navbarScroll
                    >

                        <Link className=' link-underline link-underline-opacity-0  text-dark fs-5 mx-2' to={ `/` } >Home</Link>
                        <Link className=' link-underline link-underline-opacity-0  text-dark fs-6 mx-2' to={ `/contact` }>Contact</Link>
                        <Link className=' link-underline link-underline-opacity-0  text-dark fs-5 mx-2' to={ `/armor` } >Armor</Link>
                        <NavDropdown className='fs-5' title="Katana" id="navbarScrollingDropdown">
                            <NavDropdown.Item ><Link className='link-underline link-underline-opacity-0  text-dark fs-7 ' to={ `/newkatane` } >New Katane</Link></NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link className='link-underline link-underline-opacity-0  text-dark fs-7 ' to={ `/ancientkatane` }>Ancient Katana</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Link className=' link-underline link-underline-opacity-0  text-dark fs-5 mx-2' to={ `/museum` }  >
                            Museum
                        </Link>
                        <Link className=' link-underline link-underline-opacity-0  text-dark fs-5 mx-2' to={ `/travel` } >
                            Travel
                        </Link>



                    </Nav>
                    <Search />
                    <div className='login_box'>
                        <Link>
                            <button className=' btn btn-secondary m-2 p-1'>
                                sign in
                            </button>
                        </Link>

                        <a onClick={ handleShow } role="button" aria-expanded="false"  >
                            <img src='https://psgpharma.ac.in/wp-content/uploads/2019/02/empty-img.jpg' />
                            {/* <div className="mt-2">
                                <SplitButton
                                    align={ { lg: 'start' } }
                                    title="me"
                                    id="dropdown-menu-align-responsive-2"
                                >
                                    <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
                                </SplitButton>
                            </div> */}

                        </a>




                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavigationHome
