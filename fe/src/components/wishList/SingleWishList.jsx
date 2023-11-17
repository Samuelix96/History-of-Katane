/** @format */

import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { removeWish } from '../../reducers/WishSlice';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addCart } from '../../reducers/CartSlice';
import './wish.css';

const SingleWishList = ({
  img,
  location,
  id,
  title,
  price,
  subtitle,
  description,
}) => {
  console.log('ID IN SINGLEWISh', id);

  const dispatch = useDispatch();

  const handleRemoveWish = () => {
    dispatch(removeWish(id));
  };

  const handleMoveCart = () => {
    dispatch(addCart({ id: id, img, title, price, description }));

    dispatch(removeWish(id));
  };

  return (
    <div className='container mt-5 mb-5'>
      <div className='d-flex justify-content-center row'>
        <div className='col-md-10'>
          <div className='row p-2 bg-white border rounded'>
            <div className='col-md-3 mt-1'>
              <img
                className='img-fluid img-responsive rounded product-image'
                src={img}
              />
            </div>
            <div className='col-md-6 mt-1'>
              <h5>{title}</h5>
              <div className='d-flex flex-row'>
                <div className='ratings mr-2'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
                <span>310</span>
              </div>
              <div className='mt-1 mb-1 spec-1'>
                <span className='dot'></span>
                <span>{subtitle}</span>
              </div>
            </div>
            <div className='align-items-center align-content-center col-md-3 border-left mt-1'>
              <div className='d-flex flex-row align-items-center'>
                <h4 className='mr-1'>{price.toFixed(2)}$</h4>
              </div>
              <h6 className='text-success'>Free shipping</h6>
              <div className='d-flex flex-column mt-4'>
                <button
                  onClick={handleMoveCart}
                  className='btn btn-outline-primary btn-sm mt-2'
                  type='button'>
                  Move To Cart
                </button>
                <button
                  onClick={handleRemoveWish}
                  className='btn btn-outline-danger btn-sm mt-2'
                  type='button'>
                  Remove to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleWishList;
