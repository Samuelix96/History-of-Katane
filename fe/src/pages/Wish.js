import React from 'react'
import SingleWishList from '../components/wishList/SingleWishList'
import { wishList, addWish, removeWish } from '../reducers/WishSlice'
import { useDispatch, useSelector} from "react-redux"
import { nanoid } from '@reduxjs/toolkit'


const Wish = () => {

   
    const wish = useSelector(wishList)
    console.log( " WISHLIST", wish)


  return (
    <div>
      { wish && wish?.map((item) => {
        return (
            <SingleWishList 
            key={nanoid()}
            img = { item.img}
            title= { item.title}
            id= {item.id}
            price = {item.price}
            subtitle = {item.subtitle}
            />
        )
      })}
    </div>
  )
}

export default Wish
