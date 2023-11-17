/** @format */

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { nanoid } from 'nanoid';
import './detailArmor.css';
import { addCart } from '../../reducers/CartSlice';
import { addWish } from '../../reducers/WishSlice';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { Cart, Heart } from 'react-bootstrap-icons';

const SingleDetailArmor = ({
  img,
  image2,
  image3,
  image4,
  image5,
  sleeves,
  helmet,
  armor,
  mask,
  id,
  description,
  price,
  title,
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addCart({ id: id, description, img, title, price }));
    toast.success('Element added successfully to cart');
  };

  console.log('SONO NELLA PAGE DETAIL', id);

  const handleAddToWish = () => {
    dispatch(addWish({ id: id, img, description, title, price }));
    toast.info('Element added successfully to Wish');
  };

  return (
    <div>
      <div className=''>
        <section
          id='services'
          className='services section-bg'>
          <div className=''>
            <div className='col-sm-12 box-detail text-center box-detail mb-4'>
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
                    {price.toFixed(2)}$ - {title}{' '}
                  </p>
                  <div className='_p-price-box'>
                    <div className='p-list'>
                      <span> SKU</span>
                      <span className='price'> {id}</span>
                    </div>

                    <div className='_p-features'>
                      <span className='fs-4'>
                        {' '}
                        Description :<br /> {description}{' '}
                      </span>
                    </div>
                    <div className='_p-features my-3'>
                      <span className='fs-4'>
                        {' '}
                        Helmet : <br /> {helmet}{' '}
                      </span>
                      <span className='fs-4'>
                        {' '}
                        Type of Armor : <br /> {armor}{' '}
                      </span>
                    </div>
                    <div className='_p-features my-3'>
                      <span className='fs-4'>
                        {' '}
                        Type of Mask : <br /> {mask}{' '}
                      </span>
                      <span className='fs-4'>
                        {' '}
                        Type of Sleeves : <br /> {sleeves}{' '}
                      </span>
                    </div>

                    <div>
                      <button
                        onClick={handleAddToWish}
                        className='btn-theme btn btn-warning mx-2 '>
                        <Heart /> Add to Wishlist
                      </button>

                      <button
                        onClick={handleAddToCart}
                        className='btn-theme btn btn-success'>
                        <Cart /> Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SingleDetailArmor;
