import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ArmorCard = ({ img, description, price, title, helmet, subtitle }) => {
  return (
    <Card className=' bg-success-subtle' style={{ width: '18rem'  }}>
    <Card.Img variant="top" src= {img} alt={title} />
    <Card.Body>
      <Card.Title>{ title} </Card.Title>
      <Card.Text>
       {description}
      </Card.Text>
      <Card.Text className="d-inline-block text-truncate" style={{width: "265px"}}>
       {helmet}
      </Card.Text>
      <Card.Text>
       {price}$
      </Card.Text>
      <div class="vstack gap-2 col-md-5 mx-auto">
  <button type="button" class="btn btn-secondary">Buy Now</button>
  <button type="button" class="btn btn-outline-secondary">Add to your Cart</button>
</div>
    </Card.Body>
  </Card>
  )
}

export default ArmorCard


