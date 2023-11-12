import React from 'react'
import { Card, CardBody, CardImg,  Button, CardText, CardFooter } from 'react-bootstrap'
import { Heart } from 'react-bootstrap-icons'
import { useDispatch, useSelector } from 'react-redux'
import { useDeleteSupportMutation } from '../../api/apiSlice'
import {  addCart} from '../../reducers/CartSlice'
import { addWish } from '../../reducers/WishSlice'



const SingleSupport = ({img,id,  title, subtitle, price}) => {

  const dispatch = useDispatch();

  const handleAddToWish = () => {
    dispatch(addWish({id: id , img, title, subtitle, price}))
  }

  const handleAddToCart = () =>
  {
    dispatch(addCart({ id: id, title, price, img, subtitle  }));
    
    
  }

  const [deleteSupport] = useDeleteSupportMutation()

  const handleDelete = async(e) => {
    e.preventDefault();

    try {
      await deleteSupport(id)
    } catch (error) {
      console.log(error)
    }

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
        <Card.Text className='d-none'>
          {id}
        </Card.Text>
        <Card.Text>
          {price}$
        </Card.Text>
        <CardFooter className='d-flex '>
        <Button className=" w-10 my-2 btn btn-success" onClick={handleAddToCart} >Add to Cart</Button>
        <Button className=" w-10 my-2 btn btn-success" onClick={handleDelete} >Elimina </Button>
        <Button className=" w-10 btn btn-danger" onClick={handleAddToWish} ><Heart /> Add to Wishlist</Button>
        </CardFooter>
       
      </Card.Body>
    </Card>
    </div>
  )
}

export default SingleSupport
