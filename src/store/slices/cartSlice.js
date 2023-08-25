import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_STATE = [
  {
    id: "1",
    name: "Matias N. Sanchez",
    email: "sanchezmatidev@gmail.com",
    github: "MatiSanchezDev",
  },
];

const initialState = (() => {
  const persistedState = localStorage.getItem("__redux__state__");
  return persistedState ? JSON.parse(persistedState).cart : DEFAULT_STATE;
})();

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    increment: (state /* action */) => {
      state.counter += 1;
    },
  },
});

export const { increment } = cartSlice.actions;
