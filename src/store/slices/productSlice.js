import { createSlice } from "@reduxjs/toolkit";

const product = [
  {
    id: "1",
    name: "Coffee Arubas Cup",
    price: 1500,
    img: "/product/cup1.png",
    bg: "bg-orange-300",
    stock: 30,
  },
  {
    id: "2",
    name: "Coffee Arabica Gurman Cup",
    price: 2200,
    img: "/product/cup2.png",
    bg: "bg-yellow-200",
    stock: 30,
  },
  {
    id: "3",
    name: "Coffee Andatti Cup",
    price: 1100,
    img: "/product/cup3.png",
    bg: "bg-orange-800/70",
    stock: 30,
  },
  {
    id: "4",
    name: "Coffee Yola Cup",
    price: 1900,
    img: "/product/cup4.png",
    bg: "bg-red-200",
    stock: 30,
  },
  {
    id: "5",
    name: "Coffee Jaime Oliver Cup",
    price: 1600,
    img: "/product/cup5.png",
    bg: "bg-black/30",
    stock: 30,
  },
  {
    id: "6",
    name: "Coffee Coff Shop Cup",
    price: 900,
    img: "/product/cup6.png",
    bg: "bg-orange-800/70",
    stock: 30,
  },
  {
    id: "7",
    name: "Coffee Arubas Caramel Cup",
    price: 1500,
    img: "/product/cup9.png",
    bg: "bg-orange-300",
    stock: 30,
  },
];

export const productSlice = createSlice({
  name: "product",
  initialState: product,
  reducers: {},
});
