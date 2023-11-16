/** @format */

import React from 'react';
import {
  Card,
  CardBody,
  CardImg,
  Button,
  CardText,
  CardFooter,
} from 'react-bootstrap';
import { Cart, Heart, Search } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useDeleteSupportMutation } from '../../api/apiSlice';
import { addCart } from '../../reducers/CartSlice';
import { addWish } from '../../reducers/WishSlice';
import './supp.css';
import { useSession } from '../../hooks/AuthSession';
import 'react-toastify/dist/ReactToastify.css';

const SingleSupport = ({ img, id, title, subtitle, price }) => {
  const dispatch = useDispatch();
  const session = useSession();
  const handleAddToWish = () => {
    dispatch(addWish({ id: id, img, title, subtitle, price }));
  };

  const handleAddToCart = () => {
    dispatch(addCart({ id: id, title, price, img, subtitle }));
  };

  const [deleteSupport] = useDeleteSupportMutation();

  const handleDelete = async e => {
    e.preventDefault();

    try {
      await deleteSupport(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img
          className='img_supp'
          variant='top'
          src={img}
        />
        <Card.Body>
          <a
            href={`/detailsupport/${id}`}
            className='d-flex justify-content-end'>
            <Search />
          </a>{' '}
          <Card.Title className='fs-7'>{title}</Card.Title>
          <Card.Text className='fs-5'>{subtitle}</Card.Text>
          <Card.Text className='d-none'>{id}</Card.Text>
          <Card.Text>{price}$</Card.Text>
          <CardFooter className='d-flex gap-3 mx-3'>
            <Button
              onClick={handleAddToCart}
              className='p-1 rounded-5'
              variant='success'
              size='sm'>
              <Cart />
              Add Cart
            </Button>{' '}
            <Button
              onClick={handleAddToWish}
              className='p-1 rounded-5'
              variant='danger'
              size='sm'>
              <Heart /> Add Wishlist
            </Button>{' '}
          </CardFooter>
          {session?.role === 'admin' ? (
            <CardFooter>
              <Button
                className='small my-2 btn btn-success'
                onClick={handleDelete}>
                Elimina{' '}
              </Button>
            </CardFooter>
          ) : null}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleSupport;
