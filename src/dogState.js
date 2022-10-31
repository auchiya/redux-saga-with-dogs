import { createSlice } from "@reduxjs/toolkit";

export const dogSlice = createSlice({
  name: "dogs",
  initialState: {
    dogs: [],
    isLoading: false,
  },
  reducers: {
    getDogsFetch: (state) => {
      console.log("[state] getDogsFetch start");
      state.isLoading = true;
      console.log("[state] getDogsFetch end");
    },
    getDogsSuccess: (state, action) => {
      console.log("[state] getDogsSuccess");
      state.dogs = action.payload;
      state.isLoading = false;
    },
    getDogsFailure: (state) => {
      console.log("[state] getDogsFailure");
      state.isLoading = false;
    },
  },
});

export const { getDogsFetch, getDogsSuccess, getDogsFailure } =
  dogSlice.actions;

export default dogSlice.reducer;
