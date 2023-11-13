import { nanoid } from '@reduxjs/toolkit'
import React, { useRef, useEffect, useState } from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import SingleCartShop from '../components/cart/SingleCartShop'
import { buyProducts, addCart, removeCart, total, totalTax, updateTaxAndTotalWithTax , removeFromWishlist, amount, emptyCart, iva } from '../reducers/CartSlice'
import MainLayout from "../layout/MainLayout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { useAddSripeMutation } from '../api/apiSlice'
import { useSession } from '../hooks/AuthSession'


const CartShop = () =>
{
  const session = useSession();
  const dispatch = useDispatch()
  const totalAmount = useSelector(amount)
  console.log( "Total", totalAmount)
  const totalItems = useSelector(total)
  const productsCart = useSelector(buyProducts)
  const tax = useSelector(iva)
  const [error, setError] = useState(null)

  const [addStripe] = useAddSripeMutation();

  console.log(totalAmount)
  console.log(tax)


  const totalWithTax = (totalAmount + ((totalAmount * tax) /100)).toFixed(2);


  const handleRemove = (productId) => {
    const removedProduct = productsCart.find((product) => product.id === productId);
    if (removedProduct) {
      dispatch(removeCart(productId));
  
       
      dispatch(updateTaxAndTotalWithTax); // Aggiorna la tassa e il totale con tasse
      
      toast.success('Prodotto rimosso dal carrello con successo');
    }
  };


  const handleCheckout = async() => {
    try{
      const response = await addStripe({productsCart, userdId: session?.id })

      if(response.data){
        window.location.href = response.data.url
      } else{
        setError("Error intern redirect")
      }
    } catch (error) {
      console.log(error)
      setError("Error internal fetch rtk query ")
    }
    
  }
  

  

  return (
    <MainLayout>
      <div>
        <Container>
          <div className="text-center m-5"><h2><strong>Shopping Cart</strong></h2></div>
          <Row>
            
            <Col xs={ 12 } md={ 8 }>
              <Card className="shadow">
                <Card.Body>
                  <Card.Title>Cart ({ productsCart.length } Items)</Card.Title>
                  { productsCart &&  productsCart?.map((item) =>
                  {
                    return (
                      <>
                        

                      <Button className='my-2' onClick={() => handleRemove(item.id)}>
                      <FontAwesomeIcon icon={faTrash} />
                      
                      </Button>
                      <ToastContainer />
                      {/* <span>{item.title} ({item.quantity})</span> */}

                      <SingleCartShop
                      
                        key={ nanoid()}
                        img={ item.img }
                        title={ item.title} 
                        description={ item.description }
                        price={ item.price }

                      />
                          
                        </>
                    )
                  }) }
                </Card.Body>
              </Card>
            </Col>
            <Col xs={ 12 } md={ 4 }>
              <Card className="shadow">
                <Card.Body>
                  <Card.Title>The total amount of</Card.Title>
                  <Row>
                    <Col xs={ 8 } md={ 8 }>
                      Temporary amount
                    </Col>
                    <Col xs={ 4 } md={ 4 } className="text-right">
                      ${ totalAmount }
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={ 8 } md={ 8 }>
                    Tax {tax}% 
                    </Col>
                    <Col xs={ 4 } md={ 4 } className="text-right">
                    ${(tax * totalAmount )/100}
                    </Col>
                  </Row>
                  <hr></hr>
                  <Row>
                    <Col xs={ 8 } md={ 8 }>
                    <strong>Total amount of (including VAT {tax}%)</strong>
                    </Col>
                    <Col xs={ 4 } md={ 4 } className="text-right">
                    <strong>${totalWithTax}</strong>
                    </Col>
                  </Row>
                  <div className="text-center pt-3">
                    <Button onClick={handleCheckout} variant="primary" className="w-100" >Go To Checkout</Button>
                  </div>
                </Card.Body>
              </Card>
              <Card className="mt-2 shadow">
                <Card.Body>
                  <Row>
                    <Col xs={ 8 } md={ 8 }>
                      Add a discount code (optional)
                    </Col>
                    <Col xs={ 4 } md={ 4 } className="text-right">
                      <i class="fa fa-chevron-down"></i>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </MainLayout>
  )
}

export default CartShop



// // ITEM COMPONENT
// function Item ({ item })
// {
//   const dispatch = useDispatch();

//   let count = item.qty || 1;
//   const countRef = useRef();

//   function decrementCount ()
//   {
//     if (count <= 1)
//     {
//       return
//     }
//     count = count - 1;
//     countRef.current.value = count;
//     dispatch(updateQuantity(item, count));
//     dispatch(updatePrice());
//   }

//   function incrementCount ()
//   {
//     count = count + 1;
//     countRef.current.value = count;
//     dispatch(updateQuantity(item, count));
//     dispatch(updatePrice());
//   }

//   function remove ()
//   {
//     swal({
//       title: "Attention",
//       text: `Are you sure to remove ${ item.name }?`,
//       icon: "info",
//       buttons: true,
//     }).then((resp) =>
//     {
//       if (resp)
//       {
//         swal({
//           title: `${ item.name } has removed`,
//           icon: "success",
//         })
//           .then(() =>
//           {
//             dispatch(removeItem(item));
//             dispatch(updatePrice());
//           })
//       } else
//       {
//         return;
//       }
//     });
//   }

//   function moveToWishlist ()
//   {
//     swal({
//       title: `${ item.name } has moved to wishlist!`,
//       icon: "success",
//     });
//   }

//   function onQtyChange ()
//   {
//     dispatch(updateQuantity(item, countRef.current.value));
//     dispatch(updatePrice());
//   }

//   return (
//     <>
//       <Row className="py-3 border-bottom">
//         <Col xs={ 12 } md={ 3 }>
//           <Card.Img src={ item.image } />
//         </Col>
//         <Col xs={ 12 } md={ 6 } className="d-flex flex-column">
//           <Card.Title>{ item.name }</Card.Title>
//           <div className="my-auto">
//             <div>{ item.type }</div>
//             <div>COLOR: { item.color }</div>
//             <div>SIZE: { item.size }</div>
//           </div>
//           <div className="mt-auto">
//             <button onClick={ remove } className="btn bg-transparent pl-0"><i className="fa fa-trash" size='18px' />Remove Item</button>
//             <button onClick={ moveToWishlist } className="btn bg-transparent pl-0"><i className="fa fa-heart" size='18px' /> Move To Wishlist</button>
//           </div>
//         </Col>
//         <Col xs={ 12 } md={ 3 } className="text-right d-flex flex-md-column">
//           <div>
//             <button className="bg-transparent border" onClick={ decrementCount }>-</button>
//             <input ref={ countRef } className="border text-center" style={ { width: "50px" } } defaultValue={ count } onChange={ onQtyChange } />
//             <button className="bg-transparent border" onClick={ incrementCount }>+</button>
//           </div>
//           <div className="mt-auto ml-auto">
//             <strong>${ item.price }</strong>
//           </div>
//         </Col>
//       </Row>
//     </>
//   )
// }
// // END OF ITEM COMPONENT


// //REDUX STORE
// let store = createStore(allReducers);

// //HOME COMPONENT
// function Home ()
// {
//   let cartItems = useSelector(state => state.cartItems);
//   let { totalPrice, vatPrice, finalPrice } = useSelector(state => state.cartPrices);
//   const hdispatch = useDispatch();
//   useEffect(() =>
//   {
//     hdispatch(updatePrice());
//   }, []);
//   function checkout ()
//   {
//     swal({
//       title: `Your total price is $${ finalPrice }`,
//       text: `Do you want to checkout?`,
//       icon: "info",
//       buttons: true,
//     }).then((resp) =>
//     {
//       if (resp)
//       {
//         swal({
//           title: "Thank you for shopping!",
//           icon: "success",
//         })
//       } else
//       {
//         return;
//       }
//     });
//   }
//   return (
//     <Container>
//       <div className="text-center m-5"><h2><strong>Shopping Cart</strong></h2></div>
//       <Row>
//         <Col xs={ 12 } md={ 8 }>
//           <Card className="shadow">
//             <Card.Body>
//               <Card.Title>Cart ({ cartItems.length } Items)</Card.Title>
//               { cartItems.map(item =>
//                 <Item key={ item.id } item={ item }>{ item.name }</Item>
//               ) }
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col xs={ 12 } md={ 4 }>
//           <Card className="shadow">
//             <Card.Body>
//               <Card.Title>The total amount of</Card.Title>
//               <Row>
//                 <Col xs={ 8 } md={ 8 }>
//                   Temporary amount
//                 </Col>
//                 <Col xs={ 4 } md={ 4 } className="text-right">
//                   ${ totalPrice }
//                 </Col>
//               </Row>
//               <Row>
//                 <Col xs={ 8 } md={ 8 }>
//                   Tax
//                 </Col>
//                 <Col xs={ 4 } md={ 4 } className="text-right">
//                   { vatPrice }
//                 </Col>
//               </Row>
//               <hr></hr>
//               <Row>
//                 <Col xs={ 8 } md={ 8 }>
//                   <strong>Total amount of (including VAT 10%)</strong>
//                 </Col>
//                 <Col xs={ 4 } md={ 4 } className="text-right">
//                   <strong>${ finalPrice }</strong>
//                 </Col>
//               </Row>
//               <div className="text-center pt-3">
//                 <Button variant="primary" className="w-100" onClick={ checkout }>Go To Checkout</Button>
//               </div>
//             </Card.Body>
//           </Card>
//           <Card className="mt-2 shadow">
//             <Card.Body>
//               <Row>
//                 <Col xs={ 8 } md={ 8 }>
//                   Add a discount code (optional)
//                 </Col>
//                 <Col xs={ 4 } md={ 4 } className="text-right">
//                   <i class="fa fa-chevron-down"></i>
//                 </Col>
//               </Row>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// }
// //END OF HOME COMPONENT

// // App COMPONENT
// class App extends React.Component
// {
//   render ()
//   {
//     return (
//       <Home></Home>
//     )
//   }
// }

// // Render to DOM!
// ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'));




// /IMPORT LIBRARIES
// const { useRef, useEffect } = React;
// const { Provider, connect, useSelector, useDispatch } = ReactRedux;
// const { createStore, combineReducers } = Redux;
// const { Container, Card, Row, Col, Button } = ReactBootstrap;

// //REDUX ACTIONS
// const updateQuantity = (item, newQuantity) => { return { type: 'QUANTITY', payload: { item, quantity: newQuantity } }; };
// const removeItem = (item) => { return { type: 'REMOVE', payload: { item } }; };
// const updatePrice = () => { return { type: 'UPDATE_TOTAL_PRICE', }; };
// //END OF REDUX ACTIONS

// //REDUX REDUCERS
// const initialCartItems = [
//     {
//         id: '001',
//         name: 'Blue Denim Shirt',
//         type: 'SHIRT BLUE',
//         color: 'BLUE',
//         size: 'M',
//         image: `https://raw.githubusercontent.com/eliskarini/shopping-card-react/main/public/assets/images/denim-shirt-blue.jpg`,
//         price: '17.99',
//         qty: 1
//     },
//     {
//         id: '002',
//         name: 'Red Hoodie',
//         type: 'HOODIE RED',
//         color: 'RED',
//         size: 'M',
//         image: `https://github.com/eliskarini/shopping-card-react/blob/main/public/assets/images/hoodie-red.jpg?raw=true`,
//         price: '35.99',
//         qty: 1
//     }
// ];
// let updatedItems = initialCartItems;

// const itemReducer = (cartItems = initialCartItems, action) => {
//     const {payload: {item, quantity} = {}} = action;

//     switch(action.type) {
//         case 'QUANTITY':
//             for (let i=0; i<cartItems.length; i++) {
//                 if (item.id === cartItems[i].id) {
//                     cartItems[i].qty = quantity;
//                 }
//             }
//             updatedItems = cartItems.filter(item => item);
//             return updatedItems;

//         case 'REMOVE':
//             for (let i=0; i<cartItems.length; i++) {
//                 if (item.id === cartItems[i].id) {
//                     cartItems.splice(i, 1);
//                 }
//             }
//             updatedItems = cartItems.filter(item => item);
//             return updatedItems;

//         default:
//             return cartItems;
//     }
// }

// const priceReducer = (cartPrices = {totalPrice: 0, finalPrice: 0, vatPrice: 0}, action) => {
//     switch(action.type) {
//         case 'UPDATE_TOTAL_PRICE':
//             let _totalPrice = 0, _finalPrice = 0, _vatPrice = 0;
//             for(let i=0; i<updatedItems.length; i++) {
//                 _totalPrice += updatedItems[i].price * updatedItems[i].qty;
//             }
//             _vatPrice = _totalPrice * 0.1;
//             _finalPrice = _totalPrice * 1.1;
//             return {
//                 totalPrice: _totalPrice.toFixed(2),
//                 vatPrice: _vatPrice.toFixed(2),
//                 finalPrice: _finalPrice.toFixed(2)
//             }

//         default:
//             return cartPrices;
//     }
// }

// const allReducers = combineReducers({
//     cartItems: itemReducer,
//     cartPrices: priceReducer
// });
// //END OF REDUX REDUCERS

// // ITEM COMPONENT
// function Item({item}) {
//     const dispatch = useDispatch();

//     let count = item.qty || 1;
//     const countRef = useRef();

//     function decrementCount() {
//         if(count <= 1){
//             return
//         }
//         count = count - 1;
//         countRef.current.value = count;
//         dispatch(updateQuantity(item, count));
//         dispatch(updatePrice());
//     }

//     function incrementCount() {
//         count = count + 1;
//         countRef.current.value = count;
//         dispatch(updateQuantity(item, count));
//         dispatch(updatePrice());
//     }

//     function remove() {
//         swal({
//             title: "Attention",
//             text: `Are you sure to remove ${item.name}?`,
//             icon: "info",
//             buttons: true,
//         }).then((resp) => {
//             if(resp) {
//                 swal({
//                     title: `${item.name} has removed`,
//                     icon: "success",
//                 })
//                 .then(() => {
//                     dispatch(removeItem(item));
//                     dispatch(updatePrice());
//                 })
//             } else {
//                 return;
//             }
//         });
//     }

//     function moveToWishlist() {
//         swal({
//             title: `${item.name} has moved to wishlist!`,
//             icon: "success",
//         });
//     }

//     function onQtyChange() {
//         dispatch(updateQuantity(item, countRef.current.value));
//         dispatch(updatePrice());
//     }

//     return (
//         <>
//         <Row className="py-3 border-bottom">
//             <Col xs={12} md={3}>
//                 <Card.Img src={item.image}/>
//             </Col>
//             <Col xs={12} md={6} className="d-flex flex-column">
//                 <Card.Title>{item.name}</Card.Title>
//                 <div className="my-auto">
//                     <div>{item.type}</div>
//                     <div>COLOR: {item.color}</div>
//                     <div>SIZE: {item.size}</div>
//                 </div>
//                 <div className="mt-auto">
//                     <button onClick={remove} className="btn bg-transparent pl-0"><i className="fa fa-trash" size='18px'/>Remove Item</button>
//                     <button onClick={moveToWishlist} className="btn bg-transparent pl-0"><i className="fa fa-heart" size='18px'/> Move To Wishlist</button>
//                 </div>
//             </Col>
//             <Col xs={12} md={3} className="text-right d-flex flex-md-column">
//                 <div>
//                     <button className="bg-transparent border" onClick={decrementCount}>-</button>
//                     <input ref={countRef} className="border text-center" style={{width: "50px"}} defaultValue={count} onChange={onQtyChange} />
//                     <button className="bg-transparent border" onClick={incrementCount}>+</button>
//                 </div>
//                 <div className="mt-auto ml-auto">
//                     <strong>${item.price}</strong>
//                 </div>
//             </Col>
//         </Row>
//         </>
//     )
// }
// // END OF ITEM COMPONENT


// //REDUX STORE
// let store = createStore(allReducers);

// //HOME COMPONENT
// function Home () {
//     let cartItems = useSelector(state => state.cartItems);
//     let { totalPrice, vatPrice, finalPrice } = useSelector(state => state.cartPrices);
//     const hdispatch = useDispatch();
//     useEffect(() => {
//       hdispatch(updatePrice());
//     }, []);
//     function checkout() {
//         swal({
//             title: `Your total price is $${finalPrice}`,
//             text: `Do you want to checkout?`,
//             icon: "info",
//             buttons: true,
//         }).then((resp) => {
//             if(resp) {
//                 swal({
//                     title: "Thank you for shopping!",
//                     icon: "success",
//                 })
//             } else {
//                 return;
//             }
//         });
//     }
//     return(
//     <Container>
//         <div className="text-center m-5"><h2><strong>Shopping Cart</strong></h2></div>
//          <Row>
//            <Col xs={12} md={8}>
//              <Card className="shadow">
//                <Card.Body>
//                  <Card.Title>Cart ({cartItems.length} Items)</Card.Title>
//                  {cartItems.map(item => 
//                                 <Item key={item.id} item={item}>{item.name}</Item>
//                                )}
//                </Card.Body>
//              </Card>
//            </Col>
//            <Col xs={12} md={4}>
//              <Card className="shadow">
//                <Card.Body>
//                  <Card.Title>The total amount of</Card.Title>
//                  <Row>
//                    <Col xs={8} md={8}>
//                      Temporary amount
//                    </Col>
//                    <Col xs={4} md={4} className="text-right">
//                      ${totalPrice}
//                    </Col>
//                  </Row>
//                  <Row>
//                    <Col xs={8} md={8}>
//                      Tax
//                    </Col>
//                    <Col xs={4} md={4} className="text-right">
//                      {vatPrice}
//                    </Col>
//                  </Row>
//                  <hr></hr>
//                  <Row>
//                    <Col xs={8} md={8}>
//                      <strong>Total amount of (including VAT 10%)</strong>
//                    </Col>
//                    <Col xs={4} md={4} className="text-right">
//                      <strong>${finalPrice}</strong>
//                    </Col>
//                  </Row>
//                  <div className="text-center pt-3">
//                    <Button variant="primary" className="w-100" onClick={checkout}>Go To Checkout</Button>
//                  </div>
//                </Card.Body>
//              </Card>
//              <Card className="mt-2 shadow">
//                <Card.Body>
//                  <Row>
//                    <Col xs={8} md={8}>
//                      Add a discount code (optional)
//                    </Col>
//                    <Col xs={4} md={4} className="text-right">
//                      <i class="fa fa-chevron-down"></i>
//                    </Col>
//                  </Row>
//                </Card.Body>
//              </Card>
//            </Col>
//         </Row>
//       </Container>
//     );
// }
// //END OF HOME COMPONENT

// // App COMPONENT
// class App extends React.Component {
//   render() {
//     return (
//       <Home></Home>
//     )
//   }
// }

// // Render to DOM!
// ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
