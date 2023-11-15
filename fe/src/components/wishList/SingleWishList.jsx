/** @format */

import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { removeWish } from '../../reducers/WishSlice';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addCart } from '../../reducers/CartSlice';
import './wish.css';

const SingleWishList = ({ img, id, title, price, subtitle, description }) => {
  console.log('ID IN SINGLEWISh', id);

  const dispatch = useDispatch();

  const handleRemoveWish = () => {
    dispatch(removeWish(id));
  };

  const handleMoveCart = () => {
    dispatch(addCart({ id: id, img, title, price, subtitle }));

    dispatch(removeWish(id));
  };

  return (
    <div class='container mt-5 mb-5'>
      <div class='d-flex justify-content-center row'>
        <div class='col-md-10'>
          <div class='row p-2 bg-white border rounded'>
            <div class='col-md-3 mt-1'>
              <img
                class='img-fluid img-responsive rounded product-image'
                src={img}
              />
            </div>
            <div class='col-md-6 mt-1'>
              <h5>{title}</h5>
              <div class='d-flex flex-row'>
                <div class='ratings mr-2'>
                  <i class='fa fa-star'></i>
                  <i class='fa fa-star'></i>
                  <i class='fa fa-star'></i>
                  <i class='fa fa-star'></i>
                </div>
                <span>310</span>
              </div>
              <div class='mt-1 mb-1 spec-1'>
                <span>{subtitle}</span>
                <span class='dot'></span>
                <span>Light weight</span>
                <span class='dot'></span>
                <span>
                  Best finish
                  <br />
                </span>
              </div>
              <div class='mt-1 mb-1 spec-1'>
                <span>Unique design</span>
                <span class='dot'></span>
                <span>For men</span>
                <span class='dot'></span>
                <span>
                  Casual
                  <br />
                </span>
              </div>
              <p class='text-justify text-truncate para mb-0'>
                {description}
                <br />
                <br />
              </p>
            </div>
            <div class='align-items-center align-content-center col-md-3 border-left mt-1'>
              <div class='d-flex flex-row align-items-center'>
                <h4 class='mr-1'>{price}</h4>
              </div>
              <h6 class='text-success'>Free shipping</h6>
              <div class='d-flex flex-column mt-4'>
                <button
                  class='btn btn-primary btn-sm'
                  type='button'>
                  Details
                </button>
                <button
                  class='btn btn-outline-primary btn-sm mt-2'
                  type='button'>
                  Move To Cart
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
