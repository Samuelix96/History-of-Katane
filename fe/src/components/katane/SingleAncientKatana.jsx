/** @format */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDeleteKataneMutation } from '../../api/apiSlice';
import { addWish } from '../../reducers/WishSlice';
import {
  amount,
  total,
  buyProducts,
  addCart,
  removeCart,
} from '../../reducers/CartSlice';
import { Button } from 'react-bootstrap';
import './new.css';
import { useSession } from '../../hooks/AuthSession';
import { ToastContainer, toast } from 'react-toastify';

const SingleAncientKatana = ({
  title,
  subtitle,
  id,
  category,
  img,
  image2,
  image3,
  image4,
  image5,
  description,
  price,
  width,
  length,
  location,
  age,
  thickness,
}) => {
  const dispatch = useDispatch();
  const session = useSession();

  const [deleteAncientKatane] = useDeleteKataneMutation();
  const handleWish = () => {
    dispatch(addWish({ id: id, img, title, subtitle, price }));
    toast.info('Added to wish successfully');
  };
  const handleCart = () => {
    dispatch(addCart({ id: id, img, title, subtitle, price }));
    toast.success('added to Cart correctly');
  };

  const handleMove = () => {
    window.location.href = `/detailkatane/${id}`;
  };

  const handleDelete = async e => {
    e.preventDefault();

    try {
      await deleteAncientKatane(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='my-3'>
      <div className='wid-kata'>
        <div className=''>
          <div className='product-grid rounded-2'>
            <div className='product-image'>
              <a
                href={`/detailkatane/${id}}`}
                class='image'>
                <img
                  className=' rounded-3 p-1 pic-1'
                  src={img}
                />
                <img
                  className=' rounded-3 p-1 pic-2'
                  src={image2}
                />
              </a>
              <button
                className=' product-like-icon but-new'
                onClick={handleWish}
                data-tip='Add to Wishlist'>
                <i class='far fa-heart'></i>
              </button>
              <ul className='product-links'>
                <li>
                  <button
                    onClick={handleMove}
                    className='but-new'>
                    <i class='fa fa-search'></i>
                  </button>
                </li>
                {session?.role === 'admin' ? (
                  <li>
                    <button
                      className='but-new'
                      onClick={handleDelete}>
                      <i class='fa-solid fa-trash'></i>
                    </button>
                  </li>
                ) : null}
                <li>
                  <button
                    className='but-new'
                    onClick={handleCart}>
                    <i class='fas fa-shopping-cart'></i>
                  </button>
                </li>
              </ul>
            </div>
            <div className='product-content ms-2'>
              <h3 className='title'>
                <a href={`/detailkatane/${id}`}>{title}</a>
              </h3>
              <div className='price me-2'>{price.toFixed(2)}$</div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SingleAncientKatana;
