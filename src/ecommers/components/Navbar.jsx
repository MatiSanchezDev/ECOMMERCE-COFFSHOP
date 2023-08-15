import { useState } from "react";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [search, setSearch] = useState(false);
  const [cart, setCart] = useState(false);

  return (
    <main className="w-screen flex flex-col justify-center items-center shadow-md">
      {/* Navbar */}
      <div className="relative w-full md:w-[80%] h-28 px-4 ">
        <div className="flex justify-between items-center w-full h-full">
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 cursor-pointer hover:text-orange-600"
              onClick={() => setNav(!nav)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
            <div className="group flex items-center w-auto text-white font-bold bg-black p-1 rounded-md gap-1 px-2 cursor-pointer hover:bg-orange-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 group-hover:animate-pulse group-hover:animate-infinite group-hover:animate-duration-[800ms] group-hover:animate-delay-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <h2 className="text-lg md:text-2xl  group-hover:animate-pulse group-hover:animate-infinite group-hover:animate-duration-[800ms] group-hover:animate-delay-100">
                SHOP
              </h2>
            </div>
          </div>
          <h2 className="flex text-2xl md:text-5xl items-center font-bold cursor-pointer hover:animate-pulse hover:animate-infinite text-orange-400">
            ShopFly
          </h2>
          <div className="flex gap-1 md:gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 md:w-9 md:h-9 hover:cursor-pointer hover:animate-pulse hover:animate-infinite hover:animate-duration-[800ms] hover:animate-delay-200 hover:text-orange-600"
              onClick={() => setSearch(!search)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 md:w-9 md:h-9 cursor-pointer hover:cursor-pointer hover:animate-pulse hover:animate-infinite hover:animate-duration-[1000ms] hover:animate-delay-200 hover:text-orange-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div
              onClick={() => setCart(!cart)}
              className="relative group hover:cursor-pointer"
            >
              <span className="absolute right-[-15%] text-[10px] font-bold text-white bg-black rounded-full w-auto h-4 overflow-hidden text-center flex justify-center items-center p-[6px] cursor-pointer group-hover:bg-orange-600">
                0
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 md:w-9 md:h-9 cursor-pointer group-hover:text-orange-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* Sidebar */}
      <div
        className={
          nav
            ? "absolute w-96 h-screen bg-orange-300 top-0 left-0 flex justify-start flex-col p-5 ease-in-out duration-500"
            : "absolute w-96 h-screen bg-orange-300 top-0 left-[-110%] flex justify-start flex-col p-5 ease-in-out duration-500"
        }
      >
        <h1 className="text-4xl font-bold cursor-pointer text-center py-2">
          ShopFly
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-9 h-9 absolute top-3 right-5 hover:text-orange-600"
          onClick={() => setNav(!nav)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <ul className="flex flex-col justify-start m-2 font-bold text-xl">
          <li>😎 Shop All</li>
          <li>😍 hola</li>
          <li>😊 hola</li>
          <li>😏 hola</li>
        </ul>
      </div>
      {/* Search */}
      <div
        className={
          !search
            ? "fixed w-full z-10 top-[-100%] left-0 h-28 bg-orange-300 p-4 flex items-center justify-center gap-4 ease-in-out duration-500"
            : "fixed w-full z-10 top-0 left-0 h-28 bg-orange-300 p-4 flex items-center justify-center gap-4 ease-in-out duration-500"
        }
      >
        <form className="w-[600px] p-3x">
          <label className="relative flex gap-2 w-full">
            <input
              className="placeholder:italic text-black rounded-md placeholder:text-slate-400 block bg-white w-full border border-slate-300 py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:ring-orange-600 focus:ring-1 sm:text-sm"
              placeholder="Search product..."
              type="text"
              name="search"
            />
            <button
              type="submit"
              className="w-24 rounded-md font-bold text-white bg-orange-600 focus:border-black focus:ring-black hover:bg-orange-500 hover:border-none"
            >
              Search
            </button>
          </label>
        </form>
        <button
          onClick={() => setSearch(!search)}
          className="focus:ring-1 ring-orange-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-orange-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      {/* Cart */}
      <div
        className={
          cart
            ? "absolute w-96 h-screen bg-orange-300 top-0 right-0 flex justify-start flex-col p-5 animate-fade animate-once shadow-2xl"
            : "hidden animate-fade animate-once"
        }
      >
        <h1 className="text-4xl font-bold cursor-pointer py-2">Cart</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-9 h-9 absolute top-7 right-5 hover:text-orange-600"
          onClick={() => setCart(!cart)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <div className="w-full h-[700px] overflow-hidden m-4">
          <div className="bg-black w-80 h-28 my-1">p</div>
          <div className="bg-black w-80 h-28 my-1">p</div>
          <div className="bg-black w-80 h-28 my-1">p</div>
          <div className="bg-black w-80 h-28 my-1">p</div>
          <div className="bg-black w-80 h-28 my-1">p</div>
          <div className="bg-black w-80 h-28 my-1">p</div>
          <div className="bg-black w-80 h-28 my-1">p</div>
          <div className="bg-black w-80 h-28 my-1">p</div>
          <div className="bg-black w-80 h-28 my-1">p</div>
          <div className="bg-black w-80 h-28 my-1">p</div>
          <div className="bg-black w-80 h-28 my-1">p</div>
        </div>
        <button className="text-white text-lg font-bold w-full bg-black h-12 rounded-lg">
          CHETKOUT
        </button>
      </div>
    </main>
  );
};
