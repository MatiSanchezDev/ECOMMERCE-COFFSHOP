import { createSlice } from "@reduxjs/toolkit";

const coffee = [
  {
    id: "1",
    name: "Coffee Nescafe Gold Latte Pack",
    price: 3500,
    img: "/product/pack1.png",
    bg: "bg-yellow-200",
    description:
      "At Coff Shop, we take pride in offering you a premium selection of coffee beans sourced from the finest coffee regions around the world. Each coffee package is a carefully crafted masterpiece, capturing the essence of its origin and the dedicated work of the farmers. From soft and fruity tones to rich and bold flavors, our range of tastes will take you on a sensory journey through diverse notes and nuances.",
    stock: 15,
    count: 1,
  },
  {
    id: "2",
    name: "Coffee Nescafe Latte Pack",
    price: 3500,
    img: "/product/pack2.png",
    bg: "bg-orange-800/30",
    description:
      "At Coff Shop, we take pride in offering you a premium selection of coffee beans sourced from the finest coffee regions around the world. Each coffee package is a carefully crafted masterpiece, capturing the essence of its origin and the dedicated work of the farmers. From soft and fruity tones to rich and bold flavors, our range of tastes will take you on a sensory journey through diverse notes and nuances.",
    stock: 5,
    count: 1,
  },
  {
    id: "3",
    name: "Coffee koffie Kàn Decaf Pack",
    price: 2500,
    img: "/product/pack3.png",
    bg: "bg-orange-200",
    description:
      "At Coff Shop, we take pride in offering you a premium selection of coffee beans sourced from the finest coffee regions around the world. Each coffee package is a carefully crafted masterpiece, capturing the essence of its origin and the dedicated work of the farmers. From soft and fruity tones to rich and bold flavors, our range of tastes will take you on a sensory journey through diverse notes and nuances.",
    stock: 19,
    count: 1,
  },
  {
    id: "4",
    name: "Coffee Nescafe Taster's Pack",
    price: 4000,
    img: "/product/pack4.png",
    bg: "bg-orange-800/30",
    description:
      "At Coff Shop, we take pride in offering you a premium selection of coffee beans sourced from the finest coffee regions around the world. Each coffee package is a carefully crafted masterpiece, capturing the essence of its origin and the dedicated work of the farmers. From soft and fruity tones to rich and bold flavors, our range of tastes will take you on a sensory journey through diverse notes and nuances.",
    stock: 17,
    count: 1,
  },
  {
    id: "5",
    name: "Coffee koffie Kàn Gourmet Pack",
    price: 2700,
    img: "/product/pack5.png",
    bg: "bg-yellow-200",
    description:
      "At Coff Shop, we take pride in offering you a premium selection of coffee beans sourced from the finest coffee regions around the world. Each coffee package is a carefully crafted masterpiece, capturing the essence of its origin and the dedicated work of the farmers. From soft and fruity tones to rich and bold flavors, our range of tastes will take you on a sensory journey through diverse notes and nuances.",
    stock: 15,
    count: 1,
  },
  {
    id: "6",
    name: "Coffee Nescafe Gold Deluxe Pack",
    price: 5300,
    img: "/product/pack6.png",
    bg: "bg-yellow-200",
    description:
      "At Coff Shop, we take pride in offering you a premium selection of coffee beans sourced from the finest coffee regions around the world. Each coffee package is a carefully crafted masterpiece, capturing the essence of its origin and the dedicated work of the farmers. From soft and fruity tones to rich and bold flavors, our range of tastes will take you on a sensory journey through diverse notes and nuances.",
    stock: 5,
    count: 1,
  },
  {
    id: "7",
    name: "Coffee Nescafe Original Pack",
    price: 3000,
    img: "/product/pack7.png",
    bg: "bg-red-300",
    description:
      "At Coff Shop, we take pride in offering you a premium selection of coffee beans sourced from the finest coffee regions around the world. Each coffee package is a carefully crafted masterpiece, capturing the essence of its origin and the dedicated work of the farmers. From soft and fruity tones to rich and bold flavors, our range of tastes will take you on a sensory journey through diverse notes and nuances.",
    stock: 10,
    count: 1,
  },
];

export const coffeeSlice = createSlice({
  name: "coffee",
  initialState: coffee,
  reducers: {},
});
