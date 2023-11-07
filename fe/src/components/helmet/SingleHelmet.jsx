import React from 'react'
import "./helmet.css"
import { amount, total, buyProducts, addCart, removeCart } from '../../reducers/CartSlice';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const SingleHelmet = ({ img,id, description, title, subtitle }) =>
{
    return (
        <Card className="card-helmet" >
            <Card.Img variant="top" src={ img } />
            <Card.Body>
                <Card.Title>{ title }</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}
export default SingleHelmet;
