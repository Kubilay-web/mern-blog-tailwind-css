import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const initialState = {
  items: [],
  status: null,
  error: null,
};

// Async thunk to fetch products
export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async (id = null, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/products`
      );
      return response?.data;
    } catch (error) {
      console.error(error.response?.data);
      return rejectWithValue(error.response?.data);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productsFetch.pending, (state) => {
        state.status = "pending";
      })
      .addCase(productsFetch.fulfilled, (state, action) => {
        state.status = "success";
        state.items = action.payload;
      })
      .addCase(productsFetch.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export default productsSlice.reducer;
