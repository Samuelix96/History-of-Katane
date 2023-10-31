import React from 'react'

const singleNewKatana = ({title, category, img, description, price, width, length, location, age, thickness}) => {
  return (
    <div>
       <div className='card' style={{width: "18rem"}}>
    <img src={ img} class="card-img-top" alt={title}/>
    <div className="card-body">
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{price} $</p>
      <p className="card-text">{category}</p>
    </div>
    <div>
        <button className='btn btn-success'>
            Add to cart
        </button>
    </div>
   
  </div>
    </div>
  )
}

export default singleNewKatana

