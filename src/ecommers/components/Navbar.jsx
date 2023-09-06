import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { addCart } from "../helpers/addCart";
import { countCart } from "../helpers/countCart";
import { toast } from "sonner";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [search, setSearch] = useState(false);
  const navigate = useNavigate();
  const {
    cart,
    handleDelCart,
    handleAddCount,
    handleDelCount,
    cartOpen,
    setCartOpen,
  } = useCart();

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.currentTarget.search.value.trim().toLowerCase();

    if (search.length <= 1) {
      toast.success("Debe introducir mas de una letra para la busqueda");
    } else if (search.length > 1) {
      navigate(`/search/${search}`);
    }
    e.currentTarget.reset();
  };

  return (
    <main className="flex flex-col justify-center items-center">
      {/* Navbar */}
      <div className="lg:fixed relative top-9 shadow-md z-10 flex flex-col justify-center items-center w-full bg-white ">
        <div className="w-full md:w-[80%] h-24 px-4 bg-white">
          <div className="flex justify-around sm:justify-between items-center w-full h-full">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 md:w-9 h-7 md:h-9  cursor-pointer hover:text-orange-600"
                onClick={() => setNav(!nav)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                />
              </svg>
              <Link
                to={"/shop-all"}
                className="group flex items-center w-auto text-white font-bold bg-black p-1 rounded-md gap-1 px-2 cursor-pointer hover:bg-orange-600 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 md:w-6 md:h-6 group-hover:animate-pulse group-hover:animate-infinite group-hover:animate-duration-[800ms] group-hover:animate-delay-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <h2 className="text-md md:text-2xl  group-hover:animate-pulse group-hover:animate-infinite group-hover:animate-duration-[800ms] group-hover:animate-delay-100">
                  SHOP
                </h2>
              </Link>
            </div>
            <Link
              to={"/"}
              className="hidden sm:flex text-2xl sm:text-5xl items-center font-bold cursor-pointer hover:animate-pulse hover:animate-infinite text-orange-400 hover:text-black"
            >
              Coff Shop
            </Link>
            <Link to={"/"} className="sm:hidden">
              <img className="w-9 cursor-pointer" src="icon3.png" alt="" />
            </Link>
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
                onClick={() => setCartOpen(!cartOpen)}
                className="relative group hover:cursor-pointer"
              >
                <span className="absolute right-[-15%] text-[10px] font-bold text-white bg-black rounded-full w-auto h-4 overflow-hidden text-center flex justify-center items-center p-[6px] cursor-pointer group-hover:bg-orange-600">
                  {countCart(cart)}
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
      </div>
      {/* Sidebar */}
      <label
        onClick={() => {
          setCartOpen(false);
          setNav(false);
          setSearch(false);
        }}
        className={!nav ? "" : "fixed top-0 z-20 w-screen h-screen bg-black/40"}
      ></label>
      <div
        className={
          nav
            ? "fixed w-96 h-screen bg-white z-30 top-0 left-0 flex justify-start flex-col p-5 ease-in-out duration-500"
            : "fixed w-96 h-screen bg-white z-30 top-0 left-[-110%] flex justify-start flex-col p-5 ease-in-out duration-500"
        }
      >
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
        <Link
          to={"/"}
          onClick={() => setNav(false)}
          className="text-5xl font-bold cursor-pointer text-start mt-16 mx-5 m-2 hover:text-orange-500 "
        >
          Coff Shop
        </Link>
        <ul className="flex flex-col justify-start mx-5 font-normal text-3xl ">
          <li className="flex items-center gap-2 p-1 hover:underline cursor-pointer">
            <Link
              to={"/"}
              onClick={() => setNav(false)}
              className="flex items-center gap-2 p-1 hover:underline hover:text-orange-500 cursor-pointer hover:translate-x-3 duration-100"
            >
              <img className="w-10 mr-2" src="/icons/icon4.png" alt="" /> Home
            </Link>
          </li>
          <li className="flex items-center gap-2 p-1 hover:underline cursor-pointer">
            <Link
              onClick={() => setNav(false)}
              className="flex items-center gap-2 p-1 hover:underline hover:text-orange-500 cursor-pointer hover:translate-x-3 duration-100"
            >
              <img className="w-10 mr-2" src="/icons/avatar.png" alt="" />
              Login
            </Link>
          </li>
          <li className="flex items-center gap-2 p-1 hover:underline cursor-pointer">
            <Link
              to={"/shop-all"}
              onClick={() => setNav(false)}
              className="flex items-center gap-2 p-1 hover:underline hover:text-orange-500 cursor-pointer hover:translate-x-3 duration-100"
            >
              <img className="w-10 mr-2" src="/icons/icon1.png" alt="" /> Shop
              All
            </Link>
          </li>
          <li className="flex items-center gap-2 p-1 hover:underline cursor-pointer">
            <Link
              to={"/shop-packs"}
              onClick={() => setNav(false)}
              className="flex items-center gap-2 p-1 hover:underline hover:text-orange-500 cursor-pointer hover:translate-x-3 duration-100"
            >
              <img className="w-10 mr-2" src="/icons/icon5.png" alt="" /> Coffee
              Packs
            </Link>
          </li>
          <li className="flex items-center gap-2 p-1 hover:underline cursor-pointer">
            <Link
              to={"/shop-cups"}
              onClick={() => setNav(false)}
              className="flex items-center gap-2 p-1 hover:underline hover:text-orange-500 cursor-pointer hover:translate-x-3 duration-100"
            >
              <img className="w-10 mr-2" src="/icons/icon3.png" alt="" /> Coffee
              Cups
            </Link>
          </li>
        </ul>
      </div>
      {/* Search */}
      <label
        onClick={() => {
          setCartOpen(false);
          setNav(false);
          setSearch(false);
        }}
        className={
          !search ? "" : "fixed top-0 z-20 w-screen h-screen bg-black/40"
        }
      ></label>
      <div
        className={
          !search
            ? "fixed w-full z-30 top-[-100%] left-0 h-28 bg-white p-4 flex items-center justify-center gap-4 ease-in-out duration-500"
            : "fixed w-full z-30 top-0 left-0 h-28  bg-white p-4 flex items-center justify-center gap-4 ease-in-out duration-500"
        }
      >
        <form onSubmit={handleSearch} className="w-[600px] p-3x">
          <label className="relative flex gap-2 w-full">
            <input
              className="placeholder:italic text-black rounded-md uppercase placeholder:text-slate-400 block bg-white w-full border border-slate-300 py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:ring-orange-600 focus:ring-1 sm:text-sm"
              placeholder="Search product..."
              type="text"
              name="search"
            />
            <button
              type="submit"
              onClick={() => setSearch(false)}
              className="w-24 rounded-md font-bold text-white bg-black focus:border-black focus:ring-black hover:bg-orange-500 hover:border-none"
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
      <label
        onClick={() => {
          setCartOpen(false);
          setNav(false);
          setSearch(false);
        }}
        className={
          !cartOpen ? "" : "fixed top-0 z-20 w-screen h-screen bg-black/40"
        }
      ></label>
      <div
        className={
          cartOpen
            ? "fixed w-96 h-screen bg-white z-30 top-0 right-0 flex justify-start flex-col p-4 shadow-2xl animate-fade animate-duration-[400ms]"
            : "hidden"
        }
      >
        <h1 className="text-4xl text-center font-black cursor-pointer py-2 uppercase tracking-wide">
          Cart
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-9 h-9 absolute top-7 right-5 hover:text-orange-600"
          onClick={() => setCartOpen(!cartOpen)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <div className="w-full h-[700px] overflow-auto overflow-x-hidden p-1 rounded-lg">
          <div
            className={
              cart.length === 0
                ? "w-full h-full flex justify-center items-center bg-gray-200/40 text-3xl uppercase"
                : "hidden"
            }
          >
            Empty Cart
          </div>
          {cart?.map((cart) => (
            <div
              key={cart.id}
              className="relative w-80 h-28 m-2 ml-3 bg-orange-200/30 rounded-md flex flex-row shadow-[0_2px_6px_1px_rgba(0,0,0,0.3)] border hover:border-black/30 animate-fade-right"
            >
              <span className="absolute top-11 left-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 hover:bg-orange-200 rounded-md cursor-pointer"
                  onClick={() => handleDelCart(cart.name)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </span>
              <div className="absolute top-10 right-3 w-auto h-6 px-2 pt-[2px] flex justify-center items-center rounded-lg bg-black text-white">
                {cart.count}
              </div>
              <div className="w-1/2 h-full overflow-hidden py-2">
                <img
                  className="w-full h-full object-contain "
                  src={cart.img}
                  alt={cart.name}
                />
              </div>
              <div className="pt-3 w-1/2 pr-6 flex flex-col items-start">
                <div className="overflow-hidden h-5">
                  <h4 className="text-center text-md">
                    {cart.name.substring(0, 20)}...
                  </h4>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <span className="flex justify-center items-center text-md pt-2 pb-1">
                    Price:
                  </span>
                  <span className="flex justify-center items-center text-lg pt-2 pb-1">
                    ${cart.price}
                  </span>
                </div>
                <div className="bg-black text-white w-full rounded-md p-1 flex justify-center items-center gap-7">
                  <button
                    disabled={false}
                    onClick={() => {
                      handleDelCount(cart);
                    }}
                    className="w-full hover:bg-orange-200 hover:text-black rounded-md"
                  >
                    -
                  </button>
                  <button
                    onClick={() => {
                      handleAddCount(cart);
                    }}
                    className="w-full hover:bg-orange-200 hover:text-black rounded-md"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mb-3 flex justify-between items-center px-5 pt-5">
          <span className="uppercase text-3xl">SubTotal:</span>
          <span className="text-4xl">${addCart(cart)}</span>
        </div>
        <Link
          onClick={() => setCartOpen(false)}
          className="text-white text-lg font-bold w-full bg-black h-12 rounded-lg shadow-[0_2px_9px_1px_rgba(0,0,0,0.3)] hover:border hover:border-black hover:bg-orange-200 hover:text-black flex items-center justify-center"
          to={"total-cart"}
        >
          CHETKOUT
        </Link>
      </div>
    </main>
  );
};
