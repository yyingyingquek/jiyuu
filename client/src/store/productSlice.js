import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const productFetch = createAsyncThunk(
  "prodct/ productFetch",
  async () => {
    const data = await axios.get("http://127.0.0.1:8000/api/products/");
    return data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    item: [],
    status: null,
  },
  //   generate action data
  reducers: {},
  //   only handle action type
  extraReducers: {
    [productFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [productFetch.rejected]: (state, action) => {
      state.status = "problem with fetch";
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
