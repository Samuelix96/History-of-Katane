import React from 'react'
import { Link } from 'react-bootstrap-icons'
import "./header.css"




const Header = () =>
{
    return (
        <div className='container-fluid section_box my-5'>
            <main className="main">
                <section className="card-lg__container">
                    <p className="card__text-sm">Samurai way</p>
                    <h1 className="card__text-lg">Let's create your build together</h1>
                    <p className="card__text-md text-light fs-5">Create your equipment and prepare to face the harsh trials of the samurai</p>
                    <a href="#" className="card__btn">Discover Location</a>
                </section>
                <section className="card-sm__container">
                    <section className="card-sm"  style={{background: "url('https://m.media-amazon.com/images/I/81AbIhuB6HL._AC_UF1000,1000_QL80_.jpg')"}} >
                        <p className="card__text-sm"><a className=' link-underline link-underline-opacity-0 text-light fs-5' href='/newkatane'>Katane</a></p>
                       
                    </section>
                    <section className="card-sm" style={{background: "url('https://files.nikonclub.it/uploads/201509/appBig_55dd35006a7bfffba5a5f16c56dc3718.jpg')"}}>
                        <p className="card__text-sm"><a className=' link-underline link-underline-opacity-0 text-light fs-5' href='/armor'>Armor</a></p>
                      
                    </section>
                    <section className="card-sm" style={{background: "url('https://www.giapponeserie.com/kabuto/elmo%20samurai%20italia.jpg')"}}>
                        <p className="card__text-sm"><a className=' link-underline link-underline-opacity-0 text-light fs-5' href='/helmet'>Helmet</a></p>
                     
                    </section>
                    <section className="card-sm" style={{ background: "url('https://img.fruugo.com/product/2/02/850953022_max.jpg')" }}>
                        <p className="card__text-sm"><a className=' link-underline link-underline-opacity-0 text-light fs-5' href='/support'>Support</a></p>
                      
                    </section>
                </section>
            </main>
       </div>
    )
}

export default Header


