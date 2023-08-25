import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./slices/cartSlice";
import { productSlice } from "./slices/productSlice";
import { coffeeSlice } from "./slices/coffeeSlice";

const persistanceLocalStorageMiddleware = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
};

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    product: productSlice.reducer,
    coffee: coffeeSlice.reducer,
  },
  middleware: [persistanceLocalStorageMiddleware],
});
