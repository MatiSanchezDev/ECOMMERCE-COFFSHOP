import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_STATE = [];

const initialState = (() => {
  const persistedState = localStorage.getItem("__redux__state__");
  return persistedState ? JSON.parse(persistedState).cart : DEFAULT_STATE;
})();

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addCart: (state, { payload }) => {
      const findProduct = state.find((coffe) => coffe.name === payload.name);
      if (findProduct === undefined) {
        state.push(payload);
      } else {
        findProduct.count++;
      }
    },
    delCart: (state, { payload }) => {
      return state.filter((cart) => cart.name !== payload);
    },
    addCount: (state, { payload }) => {
      const findProduct = state.find((coffe) => coffe.name === payload.name);
      if (findProduct.count < findProduct.stock) {
        findProduct.count++;
      }
    },
    delCount: (state, { payload }) => {
      const findProduct = state.find((coffe) => coffe.name === payload.name);
      if (findProduct.count > 1) {
        findProduct.count--;
      }
    },
  },
});

export const { addCart, delCart, addCount, delCount } = cartSlice.actions;
