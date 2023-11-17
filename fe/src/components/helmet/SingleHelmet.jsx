/** @format */

import React from 'react';
import './helmet.css';
import { addWish } from '../../reducers/WishSlice';
import { ToastContainer, toast } from 'react-toastify';
import { useSession } from '../../hooks/AuthSession';
import {
  amount,
  total,
  buyProducts,
  addCart,
  removeCart,
} from '../../reducers/CartSlice';
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import { useDeleteHelmetMutation } from '../../api/apiSlice';
import { Cart, Heart, Search } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const SingleHelmet = ({ img, id, price, description, title, subtitle }) => {
  const [deleteHelmet] = useDeleteHelmetMutation();
  const session = useSession();
  const dispatch = useDispatch();

  const handleDelete = async e => {
    e.preventDefault();

    try {
      return await deleteHelmet(id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddCart = () => {
    dispatch(addCart({ id: id, title, img, price }));
    toast.success('Sending to Cart ');
  };

  const handleAddWish = () => {
    dispatch(addWish({ id: id, title, img, subtitle, price }));
    toast.info('Sending to Wishlist ');
  };

  return (
    <Card className=' text-light card-helmet'>
      <Card.Img
        variant='top'
        src={img}
      />
      <Card.Body className='helmet-body'>
        <a
          className='link-underline link-underline-opacity-0 bg-light-subtle rounded-2 text-dark p-1 '
          href={`detailhelmet/${id}`}>
          <Search /> Read more
        </a>
        <Card.Title className='my-2'>{title}</Card.Title>
        <Card.Text>{subtitle}</Card.Text>
        <Button
          onClick={handleAddWish}
          className='mx-1'
          variant='warning'>
          <Heart />
          Wishlist
        </Button>
        <Button
          onClick={handleAddCart}
          variant='danger'>
          <Cart />
          Add to Cart
        </Button>
        {session?.role === 'admin' ? (
          <div className='my-2'>
            <Button
              onClick={handleDelete}
              variant='danger'>
              Elimina
            </Button>
          </div>
        ) : null}
      </Card.Body>
      <ToastContainer />
    </Card>
  );
};
export default SingleHelmet;
