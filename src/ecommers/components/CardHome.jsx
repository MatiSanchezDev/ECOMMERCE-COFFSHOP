import { Link } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";

export const CardHome = () => {
  const { cupProduct } = useProducts();
  console.log();
  return (
    <>
      <h2 className="text-center text-5xl md:text-6xl pt-24 font-black">
        TRENDING
      </h2>
      <div className="flex flex-row flex-wrap justify-center items-start content-center gap-4 my-6">
        {cupProduct?.map((cup) => (
          <div
            key={cup.id}
            className="group relative self-auto w-[303px] h-[550px] shadow-gray-300 shadow-[0_2px_9px_1px_rgba(0,0,0,0.3)] rounded-2xl mt-2 flex flex-col justify-center  items-start content-center p-5 overflow-hidden"
          >
            <div
              className={`${cup.bg} w-full h-80 absolute z-0 top-[-100%] group-hover:top-0 left-0 rounded-md ease-in-out duration-300`}
            ></div>
            <Link to={`/product/${cup.name}`} className="w-full h-[300px] z-0 ">
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
    </>
  );
};
