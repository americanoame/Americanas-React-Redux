import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
  },
});

export const {  setSelectedCategory } = cartSlice.actions;

export default cartSlice.reducer;
