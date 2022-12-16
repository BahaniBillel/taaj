import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./slices/basketSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import dbSlice from "./slices/dbSlice";

// the store
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistBasket = persistReducer(persistConfig, basketReducer);
const store = configureStore({
  reducer: {
    basket: persistBasket,
    database: dbSlice,
  },
});

const persistor = persistStore(store);

export { store, persistor };

store.getState();
