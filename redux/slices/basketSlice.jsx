import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },

    removeFromBasket: (state, action) => {
      // find the item index inside the items basket
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );

      // create a new basket
      let newBasket = [...state.items];

      // implementing the logic

      if (index >= 0) {
        // using splice methode to remove the item from the basket
        // don't use filter because it will remove all the items from the basket
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id :${action.payload.id}) from basket as it doesnt exist.`
        );
      }

      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// this how we pull items from the global store
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) =>
  state.basket.items.reduce((total, item) => Math.round(total + item.price), 0);

export default basketSlice.reducer;
