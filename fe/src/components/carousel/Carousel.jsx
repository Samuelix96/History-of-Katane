import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./carousels.css"

const Carousels = () =>
{
    return (
        <div className='container-fluid'>
            <Carousel showThumbs={ false }
                dynamicHeight={ true }
                showStatus={ false }
                stopOnHover={ false }
                className='box-height'
                autoPlay={ true }
                transitionTime={ 2000 }
                interval={ 5000 }
                infiniteLoop={ true } >
                <div>
                    <img className='caro-img bg-bla' src="https://dondon.media/wp-content/uploads/2023/02/combat-miyamoto-musashi-sasaki-kojiro-1024x493.png" />
                       
                </div>
                <div>
                    <img className='caro-img' src="https://temizen.zenworld.eu/images/approfondimenti/musashi-lato-spirituale-combattimento/musashi-lato-spirituale-combattimento-01.jpg" />

                </div>
                <div>
                    <img className='caro-img' src="https://foreignpolicyi.org/wp-content/uploads/2018/06/Battle-of-Okehazama-956x500.jpg" />

                </div>
            </Carousel>
        </div>
    )
}

export default Carousels
