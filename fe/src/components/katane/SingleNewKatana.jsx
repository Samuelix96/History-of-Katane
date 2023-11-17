/** @format */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  buyProducts,
  removeCart,
  addCart,
  productsError,
  amount,
  total,
} from '../../reducers/CartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'react-bootstrap';
import { useDeleteKataneMutation } from '../../api/apiSlice';
import './new.css';
import { Link } from 'react-router-dom';
import { useSession } from '../../hooks/AuthSession';
import { addWish } from '../../reducers/WishSlice';

const SingleNewKatana = ({
  title,
  id,
  subtitle,
  location,
  category,
  img,
  image2,
  description,
  price,
  width,
  length,
  age,
  thickness,
}) => {
  const dispatch = useDispatch();

  const products = useSelector(buyProducts);
  const totalProducts = useSelector(total);
  const totalAmount = useSelector(amount);

  const session = useSession();

  const handleWish = () => {
    dispatch(
      addWish({
        id: id,
        img,
        title,
        price,
        location,
        subtitle,
        description,
        category,
      })
    );
    toast.success('Product add successfully to wishlist');
  };

  const handleAddToCart = () => {
    dispatch(addCart({ id: id, title, price, category, img, description }));
    toast.success('Product added successfully to Cart');
  };

  const [deleteKatane] = useDeleteKataneMutation();

  const handleDelete = async e => {
    e.preventDefault();

    try {
      await deleteKatane(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className='wid-kata'>
        <div className=''>
          <div className='product-grid rounded-2'>
            <div className='product-image'>
              <a
                href='#'
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
                  <button className='but-new'>
                    <a
                      className=' link-underline link-underline-opacity-0 text-light'
                      href={`/detailkatane/${id}`}>
                      <i class='fa fa-search'></i>
                    </a>
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
                    onClick={handleAddToCart}>
                    <i class='fas fa-shopping-cart'></i>
                  </button>
                </li>
              </ul>
            </div>
            <div className='product-content ms-2'>
              <h3 className='title'>
                <a href='#'>
                  {title} / {category}
                </a>
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

export default SingleNewKatana;
