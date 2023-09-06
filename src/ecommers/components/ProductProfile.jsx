import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { useCart } from "../hooks/useCart";
import { Toaster } from "sonner";

export const ProductProfile = () => {
  const params = useParams();
  const { name } = params;
  const { packProduc, cupProduct } = useProducts();
  const { handleAddCart } = useCart();
  const [product, setProduct] = useState([]);

  const navigate = useNavigate();

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
    <>
      <div className="w-full lg:w-[80%]">
        <Toaster position="top-center" closeButton expand={false} />
        <div className="w-full h-auto flex flex-col lg:flex-row mt-12 lg:mt-36 mb-3 overflow-hidden lg:rounded-2xl lg:shadow-[0_2px_9px_1px_rgba(0,0,0,0.3)] border border-black/20">
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
          <div className="relative w-full lg:w-1/2 overflow-hidden p-5">
            <span
              className="absolute top-2 right-5 uppercase underline cursor-pointer text-lg hover:text-orange-500"
              onClick={() => {
                if (window.history.state && window.history.state.idx > 0) {
                  navigate(-1);
                } else {
                  navigate("/", { replace: true });
                }
              }}
            >
              {"< Go Back"}
            </span>
            <h2 className="p-5 text-4xl sm:text-5xl text-center font-black uppercase tracking-wider">
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
                <div className="w-80 h-auto bg-black flex justify-center text-white rounded-xl items-center gap-6 text-2xl py-1 hover:border hover:border-black/10 hover:bg-orange-200 hover:text-black">
                  <button
                    onClick={() => handleAddCart(product)}
                    className="w-28 h-auto uppercase py-1"
                  >
                    Add Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
