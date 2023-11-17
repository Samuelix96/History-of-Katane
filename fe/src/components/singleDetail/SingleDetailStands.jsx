/** @format */

import React from 'react';
import './detailArmor.css';
import { Cart, Heart } from 'react-bootstrap-icons';
import { addCart } from '../../reducers/CartSlice';
import { addWish } from '../../reducers/WishSlice';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

const SingleDetailStands = ({
  img,
  image2,
  image3,
  image4,
  image5,
  id,
  subtitle,
  type,
  material,

  description,
  price,
  title,
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addCart({ id: id, description, img, title, subtitle }));
    toast.success('Element added successfully to cart');
  };

  const handleAddToWish = () => {
    dispatch(addWish({ id: id, img, description, title, subtitle }));
    toast.info('Element added successfully to Wish');
  };

  return (
    <div>
      <div className=''>
        <section
          id='services'
          className='services section-bg'>
          <div className=''>
            <div className='col-sm-12 box-detail text-center box-detail mb-4'>
              <h1>{title}</h1>
            </div>
            <div className='row  row-sm'>
              <div className='col-md-6 _boxzoom'>
                <div className='zoom-thumb'>
                  <ul className='piclist'>
                    <li>
                      <img
                        src={image2}
                        alt={title}
                      />
                    </li>
                    <li>
                      <img
                        src={image3}
                        alt={title}
                      />
                    </li>
                    <li>
                      <img
                        src={image4}
                        alt={title}
                      />
                    </li>
                    <li>
                      <img
                        src={image5}
                        alt={title}
                      />
                    </li>
                  </ul>
                </div>
                <div className='_product-images'>
                  <div className=''>
                    <img
                      className=' picZoomer'
                      src={img}
                      alt=''
                    />
                  </div>
                </div>
              </div>
              <div className='col-md-6 '>
                <div className='_product-detail-content'>
                  <p className='_p-name'>
                    {' '}
                    {price.toFixed(2)}$ - {title}{' '}
                  </p>
                  <div className='_p-price-box'>
                    <div className='p-list'>
                      <span> SKU</span>
                      <span className='price'> {id}</span>
                    </div>

                    <div className='_p-features'>
                      <span className='fs-4'>
                        {' '}
                        Description :<br /> {description}{' '}
                      </span>
                    </div>
                    <div className='_p-features my-3'>
                      <span className='fs-4'>
                        {' '}
                        Argoments : <br /> {subtitle}{' '}
                      </span>
                    </div>
                    <div className='_p-features my-3'>
                      <span className='fs-4'>
                        {' '}
                        Type : <br /> {type}{' '}
                      </span>
                    </div>
                    <div className='_p-features fst-italic my-3'>
                      <span className='fs-4'>
                        {' '}
                        Material : <br /> {material}{' '}
                      </span>
                    </div>

                    <div className='_p-add-cart my-4'>
                      <button
                        onClick={handleAddToWish}
                        className=' btn-outline-warning btn buy-btn'>
                        <Heart /> Add to Wishlist
                      </button>
                      <button
                        onClick={handleAddToCart}
                        className='btn-theme btn btn-success'>
                        <Cart /> Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SingleDetailStands;
