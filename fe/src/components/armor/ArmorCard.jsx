import React, { useState } from 'react'
import { amount, total, buyProducts, addCart, removeCart } from '../../reducers/CartSlice';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addWish } from '../../reducers/WishSlice';
import { useDeleteArmorMutation } from '../../api/apiSlice';



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

  const [ deleteArmor ] = useDeleteArmorMutation();

  const handleDelete = async (e) =>
  {
    e.preventDefault();

    try
    {
      return await deleteArmor(id)
    } catch (error)
    {
      console.log(error)
    }

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
            <button>
              <a href={ `/detailarmor/${ id }` }>
                Page DETAILs
              </a>
            </button>
            <button
              onClick={ handleWish }
              type="button"
              class="btn btn-outline-secondary">
              Add WishList
            </button>
            <Button className=" w-10 my-2 btn btn-success" onClick={ handleDelete } >Elimina </Button>
          </div>
        </Card.Body>
      </Card>
    </div>



  )
}

export default ArmorCard


