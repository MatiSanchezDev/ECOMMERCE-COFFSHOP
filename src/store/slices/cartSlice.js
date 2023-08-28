import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_STATE = {
  cart: [{ id: "1", name: "holis" }],
};

const initialState = (() => {
  const persistedState = localStorage.getItem("__redux__state__");
  return persistedState ? JSON.parse(persistedState).cart : DEFAULT_STATE;
})();

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addCart: (state, { payload }) => {
      state.cart = state.cart.push(payload);
    },
    editCart: (state, { payload }) => {
      const findCart = state.cart.find((cart) => cart.id === payload);
      console.log(findCart);
    },
  },
});

export const { addCart, editCart } = cartSlice.actions;
