import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from './api/apiSlice';
import { combineReducers, configureStore  } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import "./index.css"
import PostsSlice from "./reducers/Posts/PostsSlice"


const reducer = combineReducers({
  posts:PostsSlice
})

const store = configureStore({
  reducer
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ApiProvider  api={apiSlice}>
    <App />
    </ApiProvider>
    </Provider>
    
    
  </React.StrictMode>
);

