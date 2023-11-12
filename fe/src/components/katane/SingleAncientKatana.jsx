import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useDeleteKataneMutation } from '../../api/apiSlice';
import { amount, total, buyProducts, addCart, removeCart } from '../../reducers/CartSlice';
import { Button } from 'react-bootstrap';

const SingleAncientKatana = ({title, id,  category, img, description, price, width, length, location, age, thickness}) => {


  const [deleteAncientKatane] = useDeleteKataneMutation()


  const handleDelete = async(e) => {
    e.preventDefault();

    try {
      await deleteAncientKatane(id)
    } catch (error) {
      console.log(error)
    }

  }



  return (
    <div className='card' style={{width: "18rem"}}>
    <img src={ img} className="card-img-top" alt={title}/>
    <div className="card-body">
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{description}</p>
      <p className="card-text">{category}</p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Length { length}cm </li>
      <li className="list-group-item">Width {width}cm </li>
      <li className="list-group-item">Thickness { thickness}cm </li>
    </ul>
    <div className="card-body">
      <a href="#" className="card-link">Card link</a>
      <a href="#" className="card-link">Another link</a>
      
    </div>
    <button>
          <a href={`/detailkatane/${id}`}> DETAIL</a>
            </button>
            <Button className=" w-10 my-2 btn btn-success" onClick={handleDelete} >Elimina </Button>
  </div>
  )
}

export default SingleAncientKatana
