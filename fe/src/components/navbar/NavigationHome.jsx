import React, { useState, useEffect } from 'react'
import Search from "../navbar/Search"
import "./navigation.css"
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, NavDropdown, Dropdown, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { buyProducts } from '../../reducers/CartSlice';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useSession } from '../../hooks/AuthSession';




const NavigationHome = () =>
{
    const [ show, setShow ] = useState(false);
    const [ profile, setProfile ] = useState(false)
    const [ numbProducts, setNumbProducts ] = useState(1);
    const session = useSession()

    const handleShow = () =>
    {
        setShow(!show);
        setProfile(false)
    };

    const handleCloseShow = () => setShow(false)

    const handleProfile = () =>
    {
        setProfile(!profile)
        setShow(false)
    }

    const handleCloseProfile = () => setProfile(false)

    const productsCart = useSelector(buyProducts)
    console.log("Ehi", productsCart)






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

                    <Dropdown show={ show } align="end">
                        <Dropdown.Toggle as={ Button } variant="link" onClick={ handleShow }>
                            <FontAwesomeIcon icon={ faShoppingCart } style={ { color: "#464b50" } } />
                            { numbProducts > 0 && (
                                <Badge className=" position-absolute cart-badge">{ numbProducts }</Badge>
                            ) }
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {  productsCart && productsCart?.map((product) => (
                                <Dropdown.Item key={ product._id }>

                                    <img className='img_cart' src={ product.img } /> - <span>{ product.title } - { product.price }$</span>
                                </Dropdown.Item>
                            )) }

                            <div className='d-flex justify-content-between my-2'>
                                <Dropdown.Item><Button className=' btn btn-success'>
                                    <Link className='link-underline link-underline-opacity-0 text-dark' to={ `/cartshop` }>
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
                    <Dropdown show={ profile } align="end">
                        <Dropdown.Toggle as={ Button } variant="none" onClick={ handleProfile }>
                            { session ? (
                                <div className='d-flex align-items-center'>
                                    <img className='img_profile me-2' src={ session.avatar } />
                                    <div className='text__profile'>
                                        <p className='mb-0'>{ session.firstName }</p>
                                        <p className='mb-0'>{ session.lastName }</p>
                                    </div>
                                </div>
                            ) : (
                                <div className='d-flex align-items-center'>
                                    <img className='img_profile me-2' src='https://i.pinimg.com/736x/a8/57/00/a85700f3c614f6313750b9d8196c08f5.jpg' />
                                    <div className='text__profile'>
                                        <p className='mb-0'>Accedi</p>
                                       
                                    </div>
                                </div>
                            ) }
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            { session ? (
                                // Contenuto specifico quando la sessione è presente
                                <>
                                    <Dropdown.Item>Elemento 1</Dropdown.Item>
                                    <Dropdown.Item>Elemento 2</Dropdown.Item>
                                    {/* Aggiungi qui altri elementi specifici della sessione */ }
                                </>
                            ) : (
                                // Contenuto specifico quando la sessione non è presente
                                <>
                                    <Dropdown.Item>Altro elemento 1</Dropdown.Item>
                                    <Dropdown.Item>Altro elemento 2</Dropdown.Item>
                                    {/* Aggiungi qui altri elementi specifici in assenza della sessione */ }
                                </>
                            ) }
                        </Dropdown.Menu>
                    </Dropdown>




                </Navbar.Collapse>
            </Container>
        </Navbar >

    )
}

export default NavigationHome


{/* <img className='img_profile me-2' src='https://i.pinimg.com/736x/a8/57/00/a85700f3c614f6313750b9d8196c08f5.jpg' />
<div className='text__profile'>
<p className='mb-0'>Samuele</p>
<p className='mb-0'>Bagorha</p>
</div> */}