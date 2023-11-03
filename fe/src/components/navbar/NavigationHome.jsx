import React, { useState, useEffect } from 'react'
import Search from "../navbar/Search"
import "./navigation.css"
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, NavDropdown, Dropdown, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { buyProducts } from '../../reducers/CartSlice';




const NavigationHome = () =>
{
    const [ show, setShow ] = useState(false);
    const [ numbProducts, setNumbProducts ] = useState(1);


    const productsCart = useSelector(buyProducts)
    console.log("Ehi", productsCart)

    const handleCloseShow = () => setShow(false)


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() =>
    {
        setNumbProducts(productsCart.length)
    }, [ productsCart ])



    return (

        <Navbar expand="lg" className="nav-costume bg-secondary">

            <Container fluid >

                <Navbar.Brand className='d-flex align-items-center ' href="/">
                    <img
                        alt="Logo"
                        src="https://i.pinimg.com/originals/a6/dd/bc/a6ddbc6da8c7bf84f1ca99827ee9b14d.jpg"
                        width={ 100 }
                        className="logo-cap rounded-circle"
                        height={ 100 }

                    />
                    <a className=' link-underline link-underline-opacity-0 text-info  rounded-2 mx-2' href='/'> KATANSTORY</a>
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

                        <NavDropdown className='fs-5 text-dark' title="Katana" id="navbarScrollingDropdown">
                            <NavDropdown.Item ><Link className='link-underline link-underline-opacity-0  text-dark fs-7 ' to={ `/newkatane` } >New Katane</Link></NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link className='link-underline link-underline-opacity-0  text-dark fs-7 ' to={ `/ancientkatane` }>Ancient Katana</Link>
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown className='fs-5 text-dark' title="Equipment" id="navbarScrollingDropdown">
                            <NavDropdown.Item ><Link className=' link-underline link-underline-opacity-0  text-dark fs-5 mx-2' to={ `/armor` } >Armor</Link></NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link className=' link-underline link-underline-opacity-0  text-dark fs-5 mx-2' to={ `/helmet` } >Helmet</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link className=' link-underline link-underline-opacity-0  text-dark fs-5 mx-2' to={ `/support` } >Support</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Link className=' link-underline link-underline-opacity-0  text-dark fs-5 mx-2' to={ `/museum` }  >
                            Museum
                        </Link>
                        {/* <Link className=' link-underline link-underline-opacity-0  text-dark fs-5 mx-2' to={ `/travel` } >
                            Travel
                        </Link> */}


                    </Nav>
                    <Search />

                    <Dropdown show={ show}  align="end">
                        <Dropdown.Toggle as={ Button }   variant="link" onClick={ handleShow }>
                            <FontAwesomeIcon icon={ faShoppingCart } style={ { color: "#464b50" } } />
                            { numbProducts > 0 && (
                                <Badge className=" position-absolute cart-badge">{ numbProducts }</Badge>
                            ) }
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            { productsCart && productsCart?.map((product) => (
                                <Dropdown.Item key={ product._id }>
                                   
                                    <img className='img_cart' src={ product.img } /> - <span>{ product.title }  - { product.price }$</span>
                                </Dropdown.Item>
                            )) }
                            <Dropdown.Divider />
                            <div className='d-flex justify-content-between'>
                                <Dropdown.Item><Button className=' btn btn-success'>
                                    <Link className='link-underline link-underline-opacity-0 text-dark' to={`/cartshop`}>
                                    Vai al carrello
                                    </Link>
                                </Button>
                                   
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Button variant="red" className="btn btn btn-danger" onClick={ handleCloseShow }>
                                        Close menu
                                    </Button>
                                </Dropdown.Item>
                            </div>

                        </Dropdown.Menu>
                    </Dropdown>

                    <div className='login_box'>
                        <Link>
                            <button className=' btn btn-secondary m-2 p-1'>
                                sign in
                            </button>
                        </Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavigationHome
