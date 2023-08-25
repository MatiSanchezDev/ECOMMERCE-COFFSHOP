import { createSlice } from "@reduxjs/toolkit";

const coffee = [
  {
    id: "1",
    name: "Coffee Nescafe Golden Pack",
    price: 3500,
    img: "/product/pack1.png",
    bg: "bg-yellow-200",
    stock: 15,
  },
  {
    id: "2",
    name: "Coffee Nescafe Latte Pack",
    price: 3500,
    img: "/product/pack2.png",
    bg: "bg-orange-800/30",
    stock: 5,
  },
  {
    id: "3",
    name: "Coffee koffie Kàn Decaf Pack",
    price: 2500,
    img: "/product/pack3.png",
    bg: "bg-orange-200",
    stock: 19,
  },
  {
    id: "4",
    name: "Coffee Nescafe Taster's Pack",
    price: 4000,
    img: "/product/pack4.png",
    bg: "bg-orange-800/30",
    stock: 17,
  },
  {
    id: "5",
    name: "Coffee koffie Kàn Gourmet Pack",
    price: 2700,
    img: "/product/pack5.png",
    bg: "bg-yellow-200",
    stock: 15,
  },
  {
    id: "6",
    name: "Coffee Nescafe Gold Deluxe Pack",
    price: 5300,
    img: "/product/pack6.png",
    bg: "bg-yellow-200",
    stock: 5,
  },
  {
    id: "7",
    name: "Coffee Nescafe Original Pack",
    price: 3000,
    img: "/product/pack7.png",
    bg: "bg-red-300",
    stock: 10,
  },
];

export const coffeeSlice = createSlice({
  name: "coffee",
  initialState: coffee,
  reducers: {},
});
