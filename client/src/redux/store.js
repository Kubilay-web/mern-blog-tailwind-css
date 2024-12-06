import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import themeReducer from "./theme/themeSlice";
import productsReducer, { productsFetch } from "./products/productsSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import { productsApi } from "./products/productsApi";
import cartReducer, { getTotals } from "./products/cartSlice";

// Combine the reducers
const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
  products: productsReducer,
  [productsApi.reducerPath]: productsApi.reducer, // Add the productsApi reducer
  cart: cartReducer,
});

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(productsApi.middleware), // Add productsApi middleware
});

store.dispatch(productsFetch());
store.dispatch(getTotals());

// Persistor setup
export const persistor = persistStore(store);
