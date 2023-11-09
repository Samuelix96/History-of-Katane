import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import CartStore from "./reducers/CartSlice";
import WishStore from "./reducers/WishSlice"

const reducer = combineReducers({
  cart: CartStore,
  wish: WishStore,
  [apiSlice.reducerPath]: apiSlice.reducer,
});


const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});


export { store };
