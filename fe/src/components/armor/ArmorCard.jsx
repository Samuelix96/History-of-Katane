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
import { Cart, Heart, Search } from 'react-bootstrap-icons';
import { useSession } from '../../hooks/AuthSession';
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
  };

  const handleWish = () => {
    dispatch(addWish({ id: id, img, price, title, description }));
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
        className=' bg-success-subtle'
        style={{ width: '18rem' }}>
        <Card.Img
          variant='top'
          src={img}
          alt={title}
        />
        <Card.Body>
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
          <Card.Text>{price}$</Card.Text>
          <Card.Text className=' d-none'>{id}</Card.Text>
          <CardFooter>
            <button
              onClick={handleAddCart}
              type='button'
              class='btn btn-info'>
              <Cart />
              Add to Cart
            </button>
          </CardFooter>
          <CardFooter>
            <button
              onClick={handleWish}
              type='button'
              class='btn btn-danger'>
              <Heart />
              Add to Wish
            </button>
          </CardFooter>

          {session?.role === 'admin' ? (
            <Button
              className=' w-10 my-2 btn btn-success'
              onClick={handleDelete}>
              Elimina{' '}
            </Button>
          ) : null}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ArmorCard;
