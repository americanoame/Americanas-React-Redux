import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  status: null,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productSlice.reducer;

