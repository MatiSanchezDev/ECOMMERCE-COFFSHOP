import { Link } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { useState } from "react";

export const ShopCupPage = () => {
  const { allProducts } = useProducts();
  const [filter, setFilter] = useState(false);
  return (
    <>
      <h1 className="w-full font-black font-ecommers text-5xl md:text-6xl uppercase underline pt-16 pb-12 lg:pt-48 text-center  shadow-lg ">
        coffee cups
      </h1>
      <div className="w-[80%]">
        <div className="w-full">
          <div className="relative flex justify-end items-center gap-5 pt-9 pb-2">
            <div className="inline-flex items-center overflow-hidden rounded-md border text-black bg-white">
              <a
                onClick={() => setFilter(!filter)}
                href="#"
                className="border-e px-24 py-2 text-lg uppercase text-orange-500 hover:bg-orange-50 hover:text-gray-700"
              >
                Sort By
              </a>

              <button
                onClick={() => setFilter(!filter)}
                className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
              >
                <span className="sr-only">Menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div
              className={
                !filter
                  ? "hidden"
                  : "absolute top-[74px] mr-[31px] z-10 mt-2 w-[249px] divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
              }
              role="menu"
            >
              <div className="p-2">
                <strong className="block p-2 text-orange-500 text-md font-medium uppercase">
                  SHOP
                </strong>
                <a
                  onClick={() => setFilter(!filter)}
                  href="#"
                  className="block rounded-lg px-4 py-2 text-md hover:bg-orange-50 hover:text-gray-700"
                  role="menuitem"
                >
                  Featured
                </a>
                <a
                  onClick={() => setFilter(!filter)}
                  href="#"
                  className="block rounded-lg px-4 py-2 text-md hover:bg-orange-50 hover:text-gray-700"
                  role="menuitem"
                >
                  Alphabetically A-Z
                </a>
                <a
                  onClick={() => setFilter(!filter)}
                  href="#"
                  className="block rounded-lg px-4 py-2 text-md hover:bg-orange-50 hover:text-gray-700"
                  role="menuitem"
                >
                  Alphabetically Z-A
                </a>
                <a
                  onClick={() => setFilter(!filter)}
                  href="#"
                  className="block rounded-lg px-4 py-2 text-md hover:bg-orange-50 hover:text-gray-700"
                  role="menuitem"
                >
                  Low Price
                </a>
                <a
                  onClick={() => setFilter(!filter)}
                  href="#"
                  className="block rounded-lg px-4 py-2 text-md hover:bg-orange-50 hover:text-gray-700"
                  role="menuitem"
                >
                  High Price
                </a>
                <a
                  onClick={() => setFilter(!filter)}
                  href="#"
                  className="block rounded-lg px-4 py-2 text-md hover:bg-orange-50 hover:text-gray-700"
                  role="menuitem"
                >
                  New Date
                </a>
                <a
                  onClick={() => setFilter(!filter)}
                  href="#"
                  className="block rounded-lg px-4 py-2 text-md hover:bg-orange-50 hover:text-gray-700"
                  role="menuitem"
                >
                  Old Date
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center items-start content-center gap-4 my-6">
          {allProducts[1]?.map((cup) => (
            <div
              key={cup.id}
              className="group relative self-auto w-[303px] h-[550px] shadow-gray-300 shadow-[0_2px_9px_1px_rgba(0,0,0,0.3)] rounded-2xl mt-2 flex flex-col justify-center  items-start content-center p-5 overflow-hidden"
            >
              <div
                className={`${cup.bg} w-full h-80 absolute z-0 top-[-100%] group-hover:top-0 left-0 rounded-md ease-in-out duration-300`}
              ></div>
              <Link
                to={`/product/${cup.name}`}
                className="w-full h-[300px] z-0"
              >
                <img
                  className="object-contain w-full h-full "
                  src={cup.img}
                  alt=""
                />
              </Link>
              <div className="h-[150px] w-full flex flex-col py-2">
                <div className="h-16 mt-1">
                  <h3 className="text-3xl overflow-hidden h-16 break-words text-center">
                    {cup.name}
                  </h3>
                </div>
                <p className="text-3xl font-bold text-center h-auto pt-4">
                  ${cup.price}
                </p>
              </div>
              <div className="flex items-end justify-end w-full">
                <button className="w-full bg-black p-2 text-white text-xl rounded-md hover:bg-gray-500">
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
