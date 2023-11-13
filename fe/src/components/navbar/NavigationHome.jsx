import React, { useState, useEffect } from 'react'
import Search from "../navbar/Search"
import "./navigation.css"
import { Link, useNavigate } from 'react-router-dom';
import { Container, Navbar, Nav, NavDropdown, Dropdown, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { buyProducts } from '../../reducers/CartSlice';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useSession } from '../../hooks/AuthSession';
import { wishList } from '../../reducers/WishSlice';
import { faHeart } from '@fortawesome/free-solid-svg-icons';





const NavigationHome = () =>
{
    const navigate = useNavigate()
    const wishlist = useSelector(wishList)
    const [ show, setShow ] = useState(false);
    const [ wish, setWish ] = useState(false)
    const [ profile, setProfile ] = useState(false)
    const [ numbProducts, setNumbProducts ] = useState(1);
    const [ numbWish, setNumbWish ] = useState(1)
    const productsCart = useSelector(buyProducts)
    const session = useSession()

    const handleShow = () =>
    {
        setShow(!show);
        setProfile(false)
        setWish(false)
    };

    const handleWishlist = () =>
    {
        setWish(!wish)
        setProfile(false)
        setShow(false)

    }

    const handleCloseShow = () => setShow(false)
    const handleCloseWish = () => setWish(false)

    const handleProfile = () =>
    {
        setProfile(!profile)
        setWish(false)
        setShow(false)
    }

    const handleCloseProfile = () => setProfile(false)



    const logout = () =>
    {
        localStorage.clear("token")
        navigate(`/`)
    }





    useEffect(() =>
    {
        setNumbProducts(productsCart.length)
        setNumbWish(wishlist.length)
    }, [ productsCart, wishlist ])



    return (

        <Navbar expand="lg" className="nav-costume  ">

            <Container fluid >

                <Navbar.Brand className='d-flex align-items-center  ' href="/">
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
                        className="m-auto d-flex justify-content-center align-items-center "
                        style={ { maxHeight: '100px' } }
                        navbarScroll
                    >

                        <Link className=' home_nav link-underline link-underline-opacity-0 p-3 text-dark fs-5 mx-2' to={ `/` } >Home</Link>
                        <Link className=' contact_nav link-underline link-underline-opacity-0 p-3 text-dark fs-5 mx-2' to={ `/contact` }>Contact</Link>

                        <NavDropdown className='fs-5 text-dark kata_nav ' title="Katana" id="navbarScrollingDropdown">
                            <NavDropdown.Item ><Link className=' text-dark link-underline link-underline-opacity-0  text-dark fs-7 ' to={ `/newkatane` } >New Katane</Link></NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link className='link-underline  link-underline-opacity-0  text-dark fs-7 ' to={ `/ancientkatane` }>Ancient Katana</Link>
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown className='fs-5 text-dark equi_nav' title="Equipment" id="navbarScrollingDropdown">
                            <NavDropdown.Item ><Link className='p-3 link-underline link-underline-opacity-0  text-dark fs-5 mx-2' to={ `/armor` } >Armor</Link></NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link className='p-3 link-underline link-underline-opacity-0  text-dark fs-5 mx-2' to={ `/helmet` } >Helmet</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link className='p-3 link-underline link-underline-opacity-0  text-dark fs-5 mx-2' to={ `/support` } >Support</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Link className='p-3 museum_nav link-underline link-underline-opacity-0  text-dark fs-5 mx-2' to={ `/museum` }  >
                            Museum
                        </Link>
                        {/* <Link className=' link-underline link-underline-opacity-0  text-dark fs-5 mx-2' to={ `/travel` } >
                            Travel
                        </Link> */}


                    </Nav>
                    {/* <Search /> */ }

                    <Dropdown className='m-2' show={ wish } align="end">
                        <Dropdown.Toggle as={ Button } variant="link" onClick={ handleWishlist }>
                            <FontAwesomeIcon icon={ faHeart } style={ { color: "red" } } />
                            { numbWish > 0 && (
                                <Badge className=" position-absolute cart-badge">{ numbWish }</Badge>
                            ) }
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            { wishlist && wishlist?.map((product) => (
                                <Dropdown.Item key={ product._id }>

                                    <img className='img_cart' src={ product.img } /> - <span>{ product.title } - { product.price }$</span>
                                </Dropdown.Item>
                            )) }

                            <div className='d-flex justify-content-between  my-2'>
                                <Dropdown.Item><Button className=' btn-info btn-outline-secondary'>
                                    <Link className='link-underline link-underline-opacity-0 text-dark' to={ `/wishlist` }>
                                        Go to  WishList 💘
                                    </Link>
                                </Button>

                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Button variant="red" className="btn-primary btn-danger" onClick={ handleCloseWish }>
                                        Close menu
                                    </Button>
                                </Dropdown.Item>
                            </div>

                        </Dropdown.Menu>
                    </Dropdown>





                    <Dropdown className='m-2' show={ show } align="end">
                        <Dropdown.Toggle as={ Button } variant="link" onClick={ handleShow }>
                            <FontAwesomeIcon icon={ faShoppingCart } style={ { color: "#464b50" } } />
                            { numbProducts > 0 && (
                                <Badge className=" position-absolute cart-badge">{ numbProducts }</Badge>
                            ) }
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            { productsCart && productsCart?.map((product) => (
                                <Dropdown.Item key={ product._id }>

                                    <img className='img_cart' src={ product.img } /> - <span>{ product.title } - { product.price }$</span>
                                </Dropdown.Item>
                            )) }

                            <div className='d-flex justify-content-between my-2'>
                                <Dropdown.Item><Button className=' btn-secondary btn-outline-warning'>
                                    <Link className='link-underline link-underline-opacity-0 text-dark' to={ `/cartshop` }>
                                        Go to Cart 🛒
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

                    <Dropdown className='m-2' show={ profile } align="end">
                        <Dropdown.Toggle as={ Button } variant="none" onClick={ handleProfile }>
                            { session ? (
                                <div className='d-flex align-items-center '>
                                    <img className='img_profile me-2' src={ session.avatar } />
                                    <div className='text__profile'>
                                        <p className='mb-0  '>{ session.firstName }</p>
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

                                <>
                                    <Dropdown.Item>
                                        <Button className='btn btn-info'>
                                            <FontAwesomeIcon className='mx-3' icon="fa-solid fa-user" />
                                            <Link className='link-underline link-underline-opacity-0' to={ `/profile/${ session.id }` }>
                                                Profile
                                            </Link>
                                        </Button>

                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Button onClick={ logout } className='btn btn-danger'>
                                            <FontAwesomeIcon className='mx-3' icon="fa-solid fa-right-from-bracket" />Logout
                                        </Button>

                                    </Dropdown.Item>
                                    {/* Aggiungi qui altri elementi specifici della sessione */ }
                                </>
                            ) : (
                                // Contenuto specifico quando la sessione non è presente
                                <>
                                    <Dropdown.Item>
                                        <Button className='btn btn-info'>

                                            <Link className='link-underline link-underline-opacity-0' to={ `/login` }>
                                                <FontAwesomeIcon className='mx-3' icon="fa-solid fa-right-to-bracket" /> Login
                                            </Link>
                                        </Button>

                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Button className='btn btn-warning'>
                                            <Link className="link-underline link-underline-opacity-0" to={ `/registration` }>
                                                <FontAwesomeIcon className='' icon="fa-solid fa-address-card" /> Registration
                                            </Link>
                                        </Button>

                                    </Dropdown.Item>
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