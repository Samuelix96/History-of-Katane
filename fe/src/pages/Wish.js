/** @format */

import React from 'react';
import SingleWishList from '../components/wishList/SingleWishList';
import { wishList, addWish, removeWish } from '../reducers/WishSlice';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import MainLayout from '../layout/MainLayout';
import '../components/style/wish.css';

const Wish = () => {
  const wish = useSelector(wishList);
  console.log(' WISHLIST', wish);

  return (
    <MainLayout>
      <div>
        <div className='sfondo-wish content'>
          <h1 className='h1-wish'>
            <span class='right'>WishList-</span>
          </h1>
        </div>
        {wish &&
          wish?.map(item => {
            return (
              <SingleWishList
                key={nanoid()}
                img={item.img}
                title={item.title}
                id={item.id}
                price={item.price}
                subtitle={item.subtitle}
              />
            );
          })}
      </div>
    </MainLayout>
  );
};

export default Wish;
