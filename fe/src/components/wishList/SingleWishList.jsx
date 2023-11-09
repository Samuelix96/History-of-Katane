import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeWish } from '../../reducers/WishSlice'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { addCart } from '../../reducers/CartSlice'


const SingleWishList = ({ img, id, title, price, subtitle }) =>
{

    console.log("ID IN SINGLEWISh", id)

    const dispatch = useDispatch()

    const handleRemoveWish = () =>
    {
        dispatch(removeWish(id))
    }

    const handleMoveCart = () =>
    {
        dispatch(addCart({ id: id, img, title, price, subtitle }))

        dispatch(removeWish(id))
    }



    return (
        <>
            <Row className="py-3 border-bottom">
                <Col xs={ 12 } md={ 3 }>
                    <Card.Img src={ img } />
                </Col>
                <Col xs={ 12 } md={ 6 } className="d-flex flex-column">
                    <Card.Title className='text-light my-5'>{ title }</Card.Title>
                    <div className="my-auto">
                        <div><p className='d-none'>{ id }</p></div>

                        <div><p>{ subtitle }</p></div>

                    </div>
                    <div className="mt-auto">
                        <button onClick={ handleRemoveWish } className="btn bg-transparent pl-0"><FontAwesomeIcon icon={ faXmark } />Remove Item</button>
                        <button onClick={ handleMoveCart } className="btn bg-transparent pl-0"><i className="fa fa-heart" size='18px' /> Move To Wishlist</button>
                    </div>
                </Col>
                <Col xs={ 12 } md={ 3 } className="text-right d-flex flex-md-column">
                    
                    <div className="mt-auto ml-auto">
                        <strong>${ price }</strong>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default SingleWishList
