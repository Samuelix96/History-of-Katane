import React from 'react'

const SingleAncientKatana = ({title, category, img, description, price, width, length, location, age, thickness}) => {
  return (
    <div className='card' style={{width: "18rem"}}>
    <img src={ img} class="card-img-top" alt={title}/>
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
  </div>
  )
}

export default SingleAncientKatana
