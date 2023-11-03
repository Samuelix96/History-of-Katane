import React from 'react'
import { Card, CardBody, CardImg,  Button, CardText, CardFooter } from 'react-bootstrap'
import { Heart } from 'react-bootstrap-icons'


const SingleSupport = ({cover, title, subtitle, price}) => {
  return (
    <div>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cover} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {subtitle}
        </Card.Text>
        <CardFooter >
        <Button className="mx-3" variant="primary">Buy Now</Button>
        <Button variant="primary"><Heart /></Button>
        </CardFooter>
       
      </Card.Body>
    </Card>
    </div>
  )
}

export default SingleSupport
