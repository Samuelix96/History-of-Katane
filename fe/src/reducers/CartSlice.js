
import { createSlice, current } from "@reduxjs/toolkit";




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
  name: "cart", 
  initialState: {
    products: loadCartFromLocalStorage(),
  totalItems : 0,
  totalAmount: 0,
  },
  reducers: {
    addCart: (state, action) => {
      state.totalItems += 1

      state.products.push(action.payload);
      state.totalAmount = state.products.map((item) => {
        return Number(item.price)
      }).reduce((acc,current) => acc + current,0)

      saveCartToLocalStorage(state.products);
    },
    removeCart: (state, action) => {
      state.totalItems -= 1
      state.totalAmount = state.products.map((item) => {
        return Number(item.price)

      }).reduce((acc,current) => acc + current,0)
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
export const total = (state) => state.cart.totalItems
export const amount = (state) => state.cart.totalAmount

export const productsError = state => state.cart.error;


export default CartSlice.reducer;
