
import { createSlice, current } from "@reduxjs/toolkit";




const loadCartFromLocalStorage = () =>
{
  const cartData = localStorage.getItem('cart');
  if (cartData)
  {
    return JSON.parse(cartData);
  } else
  {
    return [];
  }

};

const saveCartToLocalStorage = (cart) =>
{
  localStorage.setItem('cart', JSON.stringify(cart));
};


const CartSlice = createSlice({
  name: "cart",
  initialState: {
    products: loadCartFromLocalStorage(),
    totalItems: 0,
    totalAmount: 0,
    tax: 0.10,
  },
  reducers: {
    addCart: (state, action) =>
    {
      state.totalItems += 1

      state.products.push(action.payload);
      state.totalAmount = state.products.map((item) =>
      {
        return Number(item.price)
      }).reduce((acc, current) => acc + current, 0)



      saveCartToLocalStorage(state.products);
    },
    removeCart: (state, action) =>
    {
      state.totalItems -= 1;
      const removedProduct = state.products.find((product) => product.id === action.payload);
      if (removedProduct)
      {
        state.totalAmount -= parseFloat(removedProduct.price);
        state.tax = state.totalAmount * 0.10;
        state.products = state.products.filter((product) => product.id !== action.payload);
      }
      saveCartToLocalStorage(state.products);
    },

    emptyCart: (state) =>
    {
      state.products = [];
      state.totalItems = 0;
      state.totalAmount = 0;
      state.tax = 0;
      saveCartToLocalStorage(state.products);
    },
    totalTax: (state, action) =>
    {
      state.tax = action.payload
    },
    updateTaxAndTotalWithTax: (state, action) =>
    {
      state.tax = action.payload;
      state.totalWithTax = (state.totalAmount * (1 + state.tax)).toFixed(2);
    },

  },
});


export const { addCart, removeCart, emptyCart, totalTax, updateTaxAndTotalWithTax } = CartSlice.actions;
export const buyProducts = state => state.cart.products;
export const total = (state) => state.cart.totalItems
export const amount = (state) => state.cart.totalAmount
export const iva = (state) => state.cart.tax

export const productsError = state => state.cart.error;


export default CartSlice.reducer;








  // removeCart: (state, action) =>
    // {
    //   if (state.totalItems > 0)
    //   {
    //     state.totalItems -= 1;
    //   }
      // state.totalAmount = state.products.map((item) =>
      // {
      //   return Number(item.price)

      // }).reduce((acc, current) => acc + current, 0)
    //   state.totalAmount = state.products.reduce((acc, product) => acc + parseFloat(product.price), 0);
    //   state.tax = state.totalAmount * 0.10;
    //   state.products = state.products.filter((product) => product.id !== action.payload);
    //   saveCartToLocalStorage(state.products);
    // },