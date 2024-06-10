import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  
  cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
  wishListItems: localStorage.getItem('wishListItems') ? JSON.parse(localStorage.getItem('wishListItems')) : [],
  selectedCategory: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setSelectedCategory(state, action) {
      console.log(`Selected category set: ${action.payload}`);
      state.selectedCategory = action.payload;
    },

    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(`Increased ${state.cartItems[itemIndex].name} cart quantity`, {
          position: 'top-center',
        });
      } else {
        const newItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(newItem);
        toast.success(`${action.payload.name} added to cart`, {
          position: 'top-center',
        });
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    addToWishList(state, action) {
      const existingItem = state.wishListItems.find((item) => item.id === action.payload.id);
      
      if (existingItem) {
        toast.warning(`${existingItem.name} is already on the wish list`, {
          position: 'top-center',
        });
      } else {
        state.wishListItems.push({ ...action.payload, quantity: 1 });
        toast.success(`${action.payload.name} added to wish list`, {
          position: 'top-center',
        });
      }
    
      localStorage.setItem('wishListItems', JSON.stringify(state.wishListItems));
    },
  },
});

export const {  setSelectedCategory, addToCart, addToWishList } = cartSlice.actions;

export default cartSlice.reducer;
