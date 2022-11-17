import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counts: 0,
};

export const heartSlice = createSlice({
  name: "heart",
  initialState,
  reducers: {
    incrementLikes: (state) => {
      state.counts += 1;
    },

    decrementLikes: (state) => {
      state.counts -= 1;
    },
  },
});

export const { incrementLikes, decrementLikes } = heartSlice.actions;

// this how we pull items from the global store
export const selectCounts = (state) => state.heart.counts;

export default heartSlice.reducer;
