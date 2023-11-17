import React, { useRef, useEffect, useState} from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
const SingleCartShop = ({img, title, description, price}) => {
  return (
    <>
    <Row className="py-3 border-bottom">
        <Col xs={12} md={3}>
            <Card.Img src={img}/>
        </Col>
        <Col xs={12} md={6} className="d-flex flex-column">
            <Card.Title>{title}</Card.Title>
            <div className="my-auto">
                <div>{}</div>
                <div><p>{description}</p></div>
               
            </div>
            <div className="mt-auto">
                {/* <button onClick={} className="btn bg-transparent pl-0"><i className="fa fa-trash" size='18px'/>Remove Item</button>
                <button onClick={} className="btn bg-transparent pl-0"><i className="fa fa-heart" size='18px'/> Move To Wishlist</button> */}
            </div>
        </Col>
        <Col xs={12} md={3} className="text-right d-flex flex-md-column">
            <div>
                {/* <button className="bg-transparent border" onClick={}>-</button>
                <input  className="border text-center" style={{width: "50px"}} defaultValue={} onChange={} /> */}
                {/* <button className="bg-transparent border" onClick={}>+</button> */}
            </div>
            <div className="mt-auto ml-auto">
                <strong>${price.toFixed(2)}</strong>
            </div>
        </Col>
    </Row>
    </>
  )
}

export default SingleCartShop
