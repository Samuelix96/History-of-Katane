import { createSlice } from "@reduxjs/toolkit"

const loadWishlistFromLocalStorage = () => {
    const wishData = localStorage.getItem('wish')
    if (wishData) {
        return JSON.parse(wishData)
    }else {
        return [];
    }

};

const saveWishListToLocalStorage = (wish) => {
    localStorage.setItem('wish', JSON.stringify(wish))
}

const WishSlice = createSlice({
    name : "wish",
    initialState : {
        wishProducts : loadWishlistFromLocalStorage(),
    },
    reducers: {
        addWish: (state, action) => {
            state.wishProducts.push(action.payload)
            saveWishListToLocalStorage(state.wishProducts)
        },
        removeWish : (state, action) => {
            const removeProducts = state.wishProducts.find((product) => product.id === action.payload)
            if (removeProducts) {
                state.wishProducts = state.wishProducts.filter((product) => product.id !== action.payload )
            }
            saveWishListToLocalStorage(state.wishProducts)
        }
    }
})


export const { addWish, removeWish } = WishSlice.actions

export const wishList = (state) => state.wish.wishProducts;

export default WishSlice.reducer