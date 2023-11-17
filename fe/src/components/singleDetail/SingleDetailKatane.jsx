/** @format */

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { nanoid } from 'nanoid';
import './detailArmor.css';
import { addCart } from '../../reducers/CartSlice';
import { addWish } from '../../reducers/WishSlice';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { Heart } from 'react-bootstrap-icons';

const SingleDetailKatane = ({
  img,
  subtitle,
  image2,
  image3,
  image4,
  image5,
  width,
  length,
  location,
  age,
  thickness,

  id,
  description,
  price,
  title,
}) => {
  const dispatch = useDispatch();

  const handleAddCart = () => {
    dispatch(addCart({ id: id, img, title, price, subtitle }));
    toast.success('Added to cart correctly');
  };

  const handleAddWish = () => {
    dispatch(addWish({ id: id, img, title, price, subtitle }));
    toast.info('Added to wish correctly');
  };

  return (
    <div>
      <div className=''>
        <section
          id='services'
          className='services section-bg'>
          <div className=''>
            <div className='col-sm-12 box-detail text-center mb-4'>
              <h1>{title}</h1>
            </div>
            <div className='row  row-sm'>
              <div className='col-md-6 _boxzoom'>
                <div className='zoom-thumb'>
                  <ul className='piclist'>
                    <li>
                      <img
                        src={image2}
                        alt={title}
                      />
                    </li>
                    <li>
                      <img
                        src={image3}
                        alt={title}
                      />
                    </li>
                    <li>
                      <img
                        src={image4}
                        alt={title}
                      />
                    </li>
                    <li>
                      <img
                        src={image5}
                        alt={title}
                      />
                    </li>
                  </ul>
                </div>
                <div className='_product-images'>
                  <div className=''>
                    <img
                      className=' picZoomer'
                      src={img}
                      alt=''
                    />
                  </div>
                </div>
              </div>
              <div className='col-md-6 '>
                <div className='_product-detail-content'>
                  <p className='_p-name'>
                    {' '}
                    {title} -- {price.toFixed(2)}${' '}
                  </p>
                  <div className='_p-price-box'>
                    <div className='p-list'>
                      <span> SKU</span>
                      <span className='price'> {id}</span>
                    </div>

                    <div className=' my-2 _p-features'>
                      <span> Description About this product:- </span>
                      {description}
                    </div>
                    <div className=' my-2 _p-features'>
                      <span>
                        {' '}
                        Location : {location} -- Age : {age}{' '}
                      </span>
                    </div>
                    <div className=' my-2 _p-features'>
                      <span>
                        {' '}
                        Detail about this product : Width : {width}cm -- Length
                        : {length}cm -- Thickness : {thickness}cm
                      </span>
                    </div>

                    <div className='_p-add-cart my-4'>
                      <button
                        onClick={handleAddWish}
                        className=' btn buy-btn'>
                        <Heart />
                        Add Wishlist
                      </button>
                      <button
                        onClick={handleAddCart}
                        className='btn-theme btn btn-success'>
                        <i className='fa fa-shopping-cart'></i> Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SingleDetailKatane;
