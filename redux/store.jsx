import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./slices/basketSlice";
import heartSlice from "./slices/heartSlice";

// the store

export const store = configureStore({
  reducer: {
    basket: basketSlice,
    heart: heartSlice,
  },
});
