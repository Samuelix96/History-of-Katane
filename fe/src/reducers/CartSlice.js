
import { createSlice } from "@reduxjs/toolkit";




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
const loadTotal = () => {
  const totalData = localStorage.getItem('total');
  if (totalData) {
    return JSON.parse(totalData);
  } else {
    return 0;
  }
};

const saveCartToLocalStorage = (cart) =>
{
  localStorage.setItem('cart', JSON.stringify(cart));
};


const saveTotal = total => {
  localStorage.setItem('total', JSON.stringify(total));
};

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    products: loadCartFromLocalStorage(),
    totalItems: 0,
    totalAmount: loadTotal(),
    tax: 22,
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
      saveTotal(state.totalAmount)
    },
    removeCart: (state, action) => {
      state.totalItems -= 1;
      const indexToRemove = state.products.findIndex(product => product.id === action.payload);
      if (indexToRemove !== -1) {
        const removedProduct = state.products[indexToRemove];
        state.totalAmount -= parseFloat(removedProduct.price);
        state.products.splice(indexToRemove, 1);
      }
      saveCartToLocalStorage(state.products);
      saveTotal(state.totalAmount);
    },

    emptyCart: (state) =>
    {
      state.products = [];
      state.totalItems = 0;
      state.totalAmount = 0;
      state.tax = 0;
      saveCartToLocalStorage(state.products);
      saveTotal(state.totalAmount)
    },
    totalTax: (state, action) =>
    {
      state.tax = action.payload
    },
    updateTaxAndTotalWithTax: (state) =>
    {
      state.totalWithTax = (state.totalAmount + ((state.totalAmount * state.tax)/100)).toFixed(2);
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








 