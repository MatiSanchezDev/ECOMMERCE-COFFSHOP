import { createSlice } from "@reduxjs/toolkit";

const product = [
  {
    id: "11",
    name: "Coffee Arubas Cup",
    price: 1500,
    img: "/product/cup1.png",
    bg: "bg-orange-300",
    description:
      "Our cupfuls of coffee are an invitation to savor the passion and dedication we pour into every preparation. Each coffee cup is an experience in itself, with every step of the brewing process carefully controlled to ensure maximum freshness and flavor. From the perfect grind to the expert pour, our hands work in harmony to offer you a cup of coffee that surpasses your expectations.",
    stock: 30,
    count: 1,
  },
  {
    id: "22",
    name: "Coffee Arabica Gurman Cup",
    price: 2200,
    img: "/product/cup2.png",
    bg: "bg-yellow-200",
    description:
      "Our cupfuls of coffee are an invitation to savor the passion and dedication we pour into every preparation. Each coffee cup is an experience in itself, with every step of the brewing process carefully controlled to ensure maximum freshness and flavor. From the perfect grind to the expert pour, our hands work in harmony to offer you a cup of coffee that surpasses your expectations.",
    stock: 15,
    count: 1,
  },
  {
    id: "33",
    name: "Coffee Andatti Cup",
    price: 1100,
    img: "/product/cup3.png",
    bg: "bg-orange-800/70",
    description:
      "Our cupfuls of coffee are an invitation to savor the passion and dedication we pour into every preparation. Each coffee cup is an experience in itself, with every step of the brewing process carefully controlled to ensure maximum freshness and flavor. From the perfect grind to the expert pour, our hands work in harmony to offer you a cup of coffee that surpasses your expectations.",
    stock: 18,
    count: 1,
  },
  {
    id: "44",
    name: "Coffee Yola Cup",
    price: 1900,
    img: "/product/cup4.png",
    bg: "bg-red-200",
    description:
      "Our cupfuls of coffee are an invitation to savor the passion and dedication we pour into every preparation. Each coffee cup is an experience in itself, with every step of the brewing process carefully controlled to ensure maximum freshness and flavor. From the perfect grind to the expert pour, our hands work in harmony to offer you a cup of coffee that surpasses your expectations.",
    stock: 30,
    count: 1,
  },
  {
    id: "55",
    name: "Coffee Jaime Oliver Cup",
    price: 1600,
    img: "/product/cup5.png",
    bg: "bg-black/30",
    description:
      "Our cupfuls of coffee are an invitation to savor the passion and dedication we pour into every preparation. Each coffee cup is an experience in itself, with every step of the brewing process carefully controlled to ensure maximum freshness and flavor. From the perfect grind to the expert pour, our hands work in harmony to offer you a cup of coffee that surpasses your expectations.",
    stock: 30,
    count: 1,
  },
  {
    id: "66",
    name: "Coffee Coff Shop Cup",
    price: 900,
    img: "/product/cup6.png",
    bg: "bg-orange-800/70",
    description:
      "Our cupfuls of coffee are an invitation to savor the passion and dedication we pour into every preparation. Each coffee cup is an experience in itself, with every step of the brewing process carefully controlled to ensure maximum freshness and flavor. From the perfect grind to the expert pour, our hands work in harmony to offer you a cup of coffee that surpasses your expectations.",
    stock: 30,
    count: 1,
  },
  {
    id: "77",
    name: "Coffee Arubas Caramel Cup",
    price: 1500,
    img: "/product/cup9.png",
    bg: "bg-orange-300",
    description:
      "Our cupfuls of coffee are an invitation to savor the passion and dedication we pour into every preparation. Each coffee cup is an experience in itself, with every step of the brewing process carefully controlled to ensure maximum freshness and flavor. From the perfect grind to the expert pour, our hands work in harmony to offer you a cup of coffee that surpasses your expectations.",
    stock: 30,
    count: 1,
  },
];

export const productSlice = createSlice({
  name: "product",
  initialState: product,
  reducers: {},
});
