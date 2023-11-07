import React from 'react'
import { amount, total, buyProducts, addCart, removeCart } from '../../reducers/CartSlice';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';


const ArmorCard = ({ img, id, description, price, title, helmet, subtitle }) =>
{

  const dispatch = useDispatch();




  const totalProduct = useSelector(total)
  const totalAmount = useSelector(amount)
  const products = useSelector(buyProducts)

  const handleAddCart = () =>
  {
    dispatch(addCart({ id: id,  price, img, title, }))
  }

  const removeToCart = () =>
  {
    dispatch(removeCart(id))
  }
  return (
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
          { id }$
        </Card.Text>
        <div class="vstack gap-2 col-md-5 mx-auto">
          <button
          onClick={handleAddCart}
            type="button"
            class="btn btn-secondary">
            Add 
          </button>
          <button
          onClick={removeToCart}
            type="button"
            class="btn btn-outline-secondary">
            Remove
          </button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ArmorCard


