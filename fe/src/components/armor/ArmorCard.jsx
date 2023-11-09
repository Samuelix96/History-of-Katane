import React, { useState } from 'react'
import { amount, total, buyProducts, addCart, removeCart } from '../../reducers/CartSlice';

import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addWish } from '../../reducers/WishSlice';

import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';



const ArmorCard = ({ img, id, description, price, title, helmet, subtitle }) =>
{

  const dispatch = useDispatch();
  



  const totalProduct = useSelector(total)
  const totalAmount = useSelector(amount)
  const products = useSelector(buyProducts)

  const handleAddCart = () =>
  {
    dispatch(addCart({ id: id, price, img, title, description }))
  }

  const handleWish = () =>
  {
    dispatch(addWish({ id: id, img, price, title, description }))
  }
  return (

    <div>
      

      <Card className=' bg-success-subtle' style={ { width: '18rem' } }>
        <Card.Img variant="top" src={ img } alt={ title } />
        <Card.Body>
          <Card.Title>{ title } </Card.Title>
          <Card.Text>
            { description }
          </Card.Text>
          <Card.Text className="d-inline-block text-truncate" style={ { width: "265px" } }>
            { helmet }
          </Card.Text>
          <Card.Text>
            { price }$
          </Card.Text>
          <Card.Text className=' d-none'>
            { id }
          </Card.Text>
          <div class=" gap-2 col-md-5 mx-auto">
            <button
              onClick={ handleAddCart }
              type="button"
              class="btn btn-secondary">
              Add to Cart
            </button>
            <button
              onClick={ handleWish }
              type="button"
              class="btn btn-outline-secondary">
              Add WishList
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
    


  )
}

export default ArmorCard


