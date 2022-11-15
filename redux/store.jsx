import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./slices/basketSlice";

// the store

export const store = configureStore({
  reducer: {
    basket: basketSlice,
  },
});
