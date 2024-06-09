import { configureStore } from '@reduxjs/toolkit';
// import productsSlice from '../redux/productsSlice';
import { productsApi } from '../redux/productsApi';
// import cartReducer from '../redux/cartSlice';


const store = configureStore({
  reducer: {
    // products: productsSlice,
    // cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },

  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(productsApi.middleware),
  
});


export default store;
