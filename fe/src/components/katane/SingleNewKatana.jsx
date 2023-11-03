import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyProducts,removeCart ,addCart, productsError , amount, total} from '../../reducers/CartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-toastify/dist/ReactToastify.css';




const SingleNewKatana = ({title, id,  category, img, description, price, width, length, location, age, thickness}) => {
  
  const dispatch = useDispatch();

  const products = useSelector(buyProducts);
  console.log(products)

  const totalProducts = useSelector(total)
  const totalAmount = useSelector(amount)

  console.log(totalProducts);
  console.log(totalAmount);



 

  const productId = id
  console.log(productId)

  const handleAddToCart = () => {
    dispatch(addCart({ id: productId, title, price, category, img }));
    toast.success('Prodotto aggiunto al carrello con successo');
  }

  const handleRemove = () => {
    dispatch(removeCart(productId))
  }

  
  
  return (
    <div>
       <div className='card' style={{width: "18rem"}}>
    <img src={ img} class="card-img-top" alt={title}/>
    <div className="card-body">
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{price} $</p>
      <p className="card-text">{category}</p>
      <p className="card-text">{id}</p>
    </div>
    <div>
        <button
        onClick={handleAddToCart}
        className='btn btn-success'>
            Add to cart
        </button>
        <button
        onClick={handleRemove}
        className='btn btn-success'>
            Remove to Cart
        </button>
        <ToastContainer />
     
    </div>
   
  </div>
    </div>
  )
}

export default SingleNewKatana

