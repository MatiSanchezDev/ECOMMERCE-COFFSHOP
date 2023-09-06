import { useCart } from "../hooks/useCart";
import { Toaster } from "sonner";
import { Link } from "react-router-dom";
import { addCart } from "../helpers/addCart";

export const TotalCart = () => {
  const { cart, handleDelCart, handleDelCount, handleAddCount } = useCart();
  return (
    <>
      <Toaster position="top-center" closeButton expand={false} />
      <div className="pb-5 pt-16 lg:pt-40">
        <h1
          className={cart.length === 0 ? "hidden" : "text-5xl pb-2 uppercase"}
        >
          Total Cart
        </h1>
        <div className="w-full h-auto overflow-auto overflow-x-hidden p-2 rounded-lg">
          <div
            className={
              cart.length === 0
                ? "w-full h-[618px] flex flex-col justify-center items-center text-3xl md:text-7xl uppercase"
                : "hidden"
            }
          >
            YOUR CART IS EMPTY!
            <Link
              to={"/shop-all"}
              className="px-5 py-1 bg-black rounded-lg border text-white m-2 text-3xl shadow-[0_2px_9px_1px_rgba(0,0,0,0.3)] hover:border hover:border-black hover:bg-orange-200 hover:text-black"
            >
              Go Shop
            </Link>
          </div>
          <div
            className={
              cart.length === 0
                ? "hidden"
                : "hidden md:flex w-full h-auto p-2 uppercase text-orange-500 animate-fade"
            }
          >
            <div className="w-2/4 flex justify-center items-center text-2xl">
              <h2>Products</h2>
            </div>
            <div className="w-1/4 flex justify-center items-center text-2xl border-l">
              Price
            </div>
            <div className="w-1/4 flex justify-center items-center text-2xl border-l">
              Cant.
            </div>
            <div className="w-1/6 flex justify-center items-center text-2xl border-l">
              Delete
            </div>
          </div>
          <hr className={cart.length === 0 ? "hidden" : ""} />
          <div className={cart.length === 0 ? "hidden" : "w-full h-auto p-2"}>
            {cart?.map((cart) => (
              <div
                key={cart.id}
                className="w-full h-36 hidden md:flex flex-row hover:bg-[#F7F7F7] overflow-hidden my-3 py-2 border-b border-gray-300 hover:shadow-lg animate-fade-right animate-duration-[800ms] animate-delay-200"
              >
                <div className="w-2/4 h-full overflow-hidden flex justify-center items-center py-2">
                  <img
                    className="w-1/2 h-full object-contain "
                    src={cart.img}
                    alt={cart.name}
                  />
                  <h2 className="text-2xl">{cart.name.substring(0, 20)}</h2>
                </div>
                <div className="w-1/4 flex justify-center items-center border-l border-gray-300 py-2">
                  <span className="text-4xl ">${cart.price}</span>
                </div>
                <div className="w-1/4 flex justify-center items-center border-l border-gray-300">
                  <div className="text-black w-full rounded-md border-black p-1 m-6 flex justify-center items-center gap-7 border-2 ">
                    <button
                      disabled={false}
                      onClick={() => {
                        handleDelCount(cart);
                      }}
                      className="w-full hover:bg-orange-200 hover:text-black rounded-md"
                    >
                      -
                    </button>
                    <span className="text-2xl px-3">{cart.count}</span>
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
                <div className="w-1/6 flex justify-center items-center border-l border-gray-300">
                  <span className="top-11 left-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-7 h-7 hover:bg-orange-200 rounded-md cursor-pointer"
                      onClick={() => handleDelCart(cart.name)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
            {cart?.map((cart) => (
              <div
                key={cart.id}
                className="relative w-full h-28 rounded-md md:hidden flex flex-row shadow-[0_2px_6px_1px_rgba(0,0,0,0.3)] border hover:border-black/30 mt-2 hover:bg-gray-200/40 animate-fade-right"
              >
                <span className="absolute top-9 right-2">
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
                <div className="w-1/3 h-full overflow-hidden py-2">
                  <img
                    className="w-full h-full object-contain "
                    src={cart.img}
                    alt={cart.name}
                  />
                </div>
                <div className="pt-3 w-2/3 pr-6 flex flex-col items-start">
                  <div className="w-full overflow-hidden">
                    <h4 className="w-full text-center text-lg">
                      {cart.name.substring(0, 20)}
                    </h4>
                  </div>
                  <div className="flex w-full justify-center items-center">
                    <span className="flex justify-center items-center text-xl">
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
                    <span>{cart.count}</span>
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
        </div>
        <div
          className={
            cart.length === 0
              ? "hidden"
              : "w-full h-auto flex flex-col lg:flex-row p-2"
          }
        >
          <div className="w-full lg:hidden flex flex-col justify-end items-end text-2xl uppercase">
            <div className="text-4xl">Subtotal: ${addCart(cart)}</div>
          </div>
          <div className="w-full lg:w-2/3 flex flex-col justify-start mt-3 lg:mt-6">
            <label htmlFor="" className="text-3xl">
              Name
            </label>
            <input
              type="text"
              className="border-2 text-2xl p-1 border-black rounded-md uppercase"
              placeholder="jack "
            />
            <label htmlFor="" className="text-3xl">
              Email
            </label>
            <input
              type="email"
              className="border-2 text-2xl p-1 border-black rounded-md uppercase"
              placeholder="email@email.com"
            />
          </div>
          <div className="w-full lg:w-1/3 flex flex-col justify-end items-end text-2xl uppercase m-2">
            <div className="text-4xl m-2 hidden lg:block">
              Subtotal: ${addCart(cart)}
            </div>
            <Link className="p-2 text-white border-2 border-black bg-black w-full lg:w-64 flex justify-center items-center rounded-lg m-2 hover:bg-gray-600">
              CKECKOUT
            </Link>
            <Link
              to={"/shop-all"}
              className="p-2 border-2 text-black border-black bg-white w-full lg:w-64 flex justify-center items-center rounded-lg m-2 hover:bg-gray-200/75"
            >
              CONTINUE SHOPPING
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
