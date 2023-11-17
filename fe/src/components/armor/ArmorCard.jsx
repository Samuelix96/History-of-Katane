/** @format */

import React, { useState } from 'react';
import {
  amount,
  total,
  buyProducts,
  addCart,
  removeCart,
} from '../../reducers/CartSlice';
import { Button, CardFooter } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addWish } from '../../reducers/WishSlice';
import { useDeleteArmorMutation } from '../../api/apiSlice';
import { Cart, DeviceHddFill, Heart, Search } from 'react-bootstrap-icons';
import { useSession } from '../../hooks/AuthSession';
import './armorcard.css';
import { ToastContainer, toast } from 'react-toastify';

const ArmorCard = ({
  img,
  id,
  description,
  price,
  title,
  helmet,
  subtitle,
}) => {
  const dispatch = useDispatch();
  const session = useSession();
  const totalProduct = useSelector(total);
  const totalAmount = useSelector(amount);
  const products = useSelector(buyProducts);

  const handleAddCart = () => {
    dispatch(addCart({ id: id, price, img, title, description }));
    toast.success('Added to Cart successfuly');
  };

  const handleWish = () => {
    dispatch(addWish({ id: id, img, price, title, description }));
    toast.info('Added to Wish successfuly');
  };

  const [deleteArmor] = useDeleteArmorMutation();

  const handleDelete = async e => {
    e.preventDefault();

    try {
      return await deleteArmor(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Card
        className='text-light'
        style={{ width: '18rem' }}>
        <Card.Img
          className='armor-card'
          variant='top'
          src={img}
          alt={title}
        />
        <Card.Body className='cards-color'>
          <a
            className=' bg-c-lite-green p-2 rounded-2 text-light link-underline link-underline-opacity-0 link-dark'
            href={`/detailarmor/${id}`}>
            <Search /> Detail Pages
          </a>
          <Card.Title className='my-2 fst-italic'>{title} </Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text
            className='d-inline-block text-truncate'
            style={{ width: '265px' }}>
            {helmet}
          </Card.Text>
          <Card.Text>{price.toFixed(2)}$</Card.Text>
          <Card.Text className=' d-none'>{id}</Card.Text>
          <div className='my-2'>
            <button
              onClick={handleAddCart}
              type='button'
              class='btn btn-info'>
              <Cart />
              Add to Cart
            </button>
          </div>
          <div>
            <button
              onClick={handleWish}
              type='button'
              class='btn btn-danger'>
              <Heart />
              Add to Wish
            </button>
          </div>

          {session?.role === 'admin' ? (
            <Button
              className=' w-10 my-2 btn btn-success'
              onClick={handleDelete}>
              Elimina{' '}
            </Button>
          ) : null}
        </Card.Body>
      </Card>
      <ToastContainer />
    </div>
  );
};

export default ArmorCard;
