
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],

};
const loadCartFromLocalStorage = () => {
  const cartData = localStorage.getItem('cart');
  if (cartData) {
    return JSON.parse(cartData);
  } else {
    return [];
  }
  
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};


const CartSlice = createSlice({
  name: "cart", // Assicurati che sia "cart" in minuscolo
  initialState: {
    products: loadCartFromLocalStorage(),
  },
  reducers: {
    addCart: (state, action) => {
      state.products.push(action.payload);
      saveCartToLocalStorage(state.products);
    },
    removeCart: (state, action) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
      saveCartToLocalStorage(state.products);
    },
    emptyCart : (state) => {
      state.products = [];
      saveCartToLocalStorage(state.products);
    },
  },
});


export const { addCart, removeCart, emptyCart } = CartSlice.actions;
export const buyProducts = state => state.cart.products;
export const productsError = state => state.cart.error;


export default CartSlice.reducer;
