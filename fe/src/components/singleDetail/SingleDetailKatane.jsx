import React from 'react'
import { Container, Row, Col,  } from 'react-bootstrap'
import { nanoid } from 'nanoid'
import "./detailArmor.css"

const SingleDetailKatane = ({ img, id, description, price, title, }) => {
  return (
    <div>
      <div className=''>
         <section id="services" className="services section-bg">
            <div className="">
               <div className="col-sm-12 text-center mb-4">
                  <h1>{ title }</h1>
               </div>
               <div className="row  row-sm">
                  <div className="col-md-6 _boxzoom">
                     <div className="zoom-thumb">
                        <ul className="piclist">
                           <li><img src={ img } alt={ title } /></li>
                           <li><img src={ img } alt={ title } /></li>
                           <li><img src={ img } alt={ title } /></li>
                           <li><img src={ img } alt={ title } /></li>
                        </ul>
                     </div>
                     <div className="_product-images">
                        <div className="">
                           <img className=" picZoomer" src={ img } alt="" />
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 ">
                     <div className="_product-detail-content">
                        <p className="_p-name"> Milton Bottle </p>
                        <div className="_p-price-box">
                           <div className="p-list">
                              <span> SKU <i className="fa fa-inr"></i></span>
                              <span className="price"> { id }</span>
                           </div>

                           <div className="_p-features">
                              <span> Description About this product:- </span>
                              { description }
                           </div>


                           <div className="_p-add-cart my-4">
                              <button className=" btn buy-btn" >
                                 <i className="fa fa-shopping-cart"></i> Buy Now
                              </button>
                              <button className="btn-theme btn btn-success" >
                                 <i className="fa fa-shopping-cart"></i> Add to Cart
                              </button>
                           </div>


                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

      </div>
    </div>
  )
}

export default SingleDetailKatane
