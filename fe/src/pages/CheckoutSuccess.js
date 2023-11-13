import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const ContainerWrapper = styled.div`
background: url(https://img.freepik.com/free-vector/vintage-wave-japanese-vector-border-remix-artwork-by-katsushika-hokusai_53876-127955.jpg?w=1380&t=st=1699908802~exp=1699909402~hmac=1aaf004ea944aa9ea45beed6d58bbb184ecfa237f2a4515ae372daf60abc4ec3) no-repeat center center fixed;
  
  
`;

const Container = styled.div`
  height: 100vh;
  flex-direction: column;
  padding: 3rem;
`;

const RatingWrapper = styled.div`
  align-self: center;
  box-shadow: 7px 7px 25px rgba(198, 206, 237, 0.7),
    -7px -7px 35px rgba(255, 255, 255, 0.7),
    inset 0px 0px 4px rgba(255, 255, 255, 0.9),
    inset 7px 7px 15px rgba(198, 206, 237, 0.8);
  border-radius: 5rem;
  display: inline-flex;
  color: beige;
  background-color: aquamarine;

  justify-content: center;
  direction: rtl !important;
  padding: 1.5rem 2.5rem;
  margin-left: auto;

  label {
    color: #E1E6F6;
    cursor: pointer;
    display: inline-flex;
    font-size: 3rem;
    padding: 1rem 0.6rem;
    transition: color 0.5s;
  }

  svg {
    -webkit-text-fill-color: transparent;
    -webkit-filter: drop-shadow (4px 1px 6px rgba(198, 206, 237, 1));
    filter: drop-shadow(5px 1px 3px rgba(198, 206, 237, 1));
  }

  input {
    height: 100%;
    width: 100%;
    display: none;
  }

  label:hover,
  label:hover ~ label,
  input:checked ~ label {
    color: #34AC9E;
  }
`;

const CheckoutSuccess = () =>
{
    const [ rating, setRating ] = useState(0); // Stato per tenere traccia della valutazione

    const handleRating = (value) =>
    {
        setRating(value === rating ? 0 : value); // Se il valore è lo stesso, azzera la valutazione
    };

    const handleRedirect = () =>
    {
        localStorage.removeItem('cart');
        localStorage.removeItem('total');
        window.location.href = `/`
    }

    return (
        <>

            <ContainerWrapper>

                <Container className="d-flex align-items-center justify-content-center'">

                    <h1 className=' bg-secondary-subtle rounded-3 text-center my-5 fst-italic text-dark-emphasis'>Thank you for your purchase, leave us your rating to evaluate our service</h1>


                    <div className="row w justify-content-center ">

                        <RatingWrapper>

                            { [ 5, 4, 3, 2, 1 ].map((value) => (
                                <React.Fragment key={ value }>
                                    <input
                                        type="radio"
                                        id={ `star-rating-${ value }` }
                                        name="star-rating"
                                        value={ value }
                                        onChange={ () => handleRating(value) }
                                        checked={ value === rating }
                                    />
                                    <label htmlFor={ `star-rating-${ value }` } className="star-rating">
                                        <i className="fas fa-star d-inline-block"></i>
                                    </label>
                                </React.Fragment>
                            )) }
                        </RatingWrapper>
                        <Button
                            onClick={ handleRedirect }
                            className='my-5 btn btn-outline-dark w-50'>
                            Back to Home Page
                        </Button>
                    </div>
                </Container>

            </ContainerWrapper>

        </>
    );
};

export default CheckoutSuccess;
