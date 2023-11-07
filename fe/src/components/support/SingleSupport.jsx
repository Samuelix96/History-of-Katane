import React from 'react'
import { Card, CardBody, CardImg,  Button, CardText, CardFooter } from 'react-bootstrap'
import { Heart } from 'react-bootstrap-icons'
import { useDispatch, useSelector } from 'react-redux'
import {  addCart} from '../../reducers/CartSlice'



const SingleSupport = ({img,id,  title, subtitle, price}) => {

  const dispatch = useDispatch();

 

  const handleAddToCart = () =>
  {
    dispatch(addCart({ id: id, title, price, img,  }));
    
  }




  return (
    <div>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {subtitle}
        </Card.Text>
        <Card.Text>
          {price}$
        </Card.Text>
        <CardFooter className='d-flex '>
        <Button className=" w-10 my-2 btn btn-success" onClick={handleAddToCart} >Add to Cart</Button>
        <Button className=" w-10 btn btn-danger"  ><Heart /> Add to Wishlist</Button>
        </CardFooter>
       
      </Card.Body>
    </Card>
    </div>
  )
}

export default SingleSupport
