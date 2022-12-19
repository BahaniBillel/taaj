import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  likes: [],
  heart: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const itemExists = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.items = [...state.items, { ...action.payload, quantity: 1 }];
      }

      if (typeof window !== "undefined") {
        // Perform localStorage action

        localStorage.setItem("items", JSON.stringify(state.items));
      }
    },

    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      item.quantity++;
    },

    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        const index = state.items.findIndex(
          (item) => item.id === action.payload
        );
        state.items.splice(index, 1);
      } else {
        item.quantity--;
      }
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
    incrementLikes: (state, action) => {
      state.likes = [...state.likes, action.payload];
    },

    decrementLikes: (state, action) => {
      // find the item index inside the items basket
      const index = state.likes.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );

      // create a new basket
      let newLikes = [...state.likes];

      // implementing the logic

      if (index >= 0) {
        // using splice methode to remove the item from the basket
        // don't use filter because it will remove all the items from the basket
        newLikes.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id :${action.payload.id}) from basket as it doesnt exist.`
        );
      }

      state.likes = newLikes;
    },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  incrementLikes,
  decrementLikes,
  incrementQuantity,
  decrementQuantity,
} = basketSlice.actions;

// this how we pull items from the global store
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) =>
  state.basket.items.reduce((total, item) => Math.round(total + item.price), 0);

export const selectLikes = (state) => state.basket.likes;
export const selectHeartState = (state) => state.basket.heart;

export default basketSlice.reducer;
