import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";

export const ProductProfile = () => {
  const params = useParams();
  const { name } = params;
  const { packProduc, cupProduct } = useProducts();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const findPack = packProduc.find((pack) => pack.name === name);
    const findCup = cupProduct.find((pack) => pack.name === name);
    if (findPack) {
      setProduct(findPack);
    } else {
      setProduct(findCup);
    }
  }, []);

  return (
    <div className="w-full h-auto flex flex-col lg:flex-row mt-12 lg:mt-36 mb-3 overflow-hidden rounded-2xl shadow-[0_2px_9px_1px_rgba(0,0,0,0.3)] border border-black/20">
      <div
        className={`w-full lg:w-1/2 ${product.bg} flex justify-center items-center`}
      >
        <div className="w-auto h-[500px] lg:h-[700px] flex justify-center items-center overflow-hidden">
          <img
            className="w-auto h-auto object-contain hover:scale-150 duration-300 ease-out"
            src={product.img}
            alt={product.name}
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 overflow-hidden p-5">
        <h2 className="p-5 text-4xl sm:text-5xl text-center font-black uppercase underline tracking-wider">
          {product.name}
        </h2>
        <div>
          <h3 className="text-2xl pt-2 uppercase font-black tracking-wide">
            Description:
          </h3>
          <p className="text-md sm:text-xl font-light p-3 text-gray-800">
            {product.description}
          </p>
          <h3 className="text-2xl text-center pt-2 uppercase font-black tracking-wide text-orange-500">
            Price
          </h3>
          <p className="text-5xl text-center font-black p-3 text-black">
            ${product.price}
          </p>
          <div className="w-full h-12 flex justify-center items-center my-6">
            <div className="w-80 h-auto bg-black flex justify-center text-white rounded-xl items-center gap-6 text-2xl py-1">
              <button className="w-10 hover:bg-orange-600 rounded-lg">-</button>
              <button className="w-28 h-auto uppercase hover:bg-orange-600 rounded-lg py-1">
                Add Cart
              </button>
              <button className="w-10 hover:bg-orange-600 rounded-lg">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
