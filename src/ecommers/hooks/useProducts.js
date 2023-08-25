import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useProducts = () => {
  const packProduc = useSelector((state) => state.coffee);
  const cupProduct = useSelector((state) => state.product);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    setAllProducts([...allProducts, packProduc, cupProduct]);
  }, [packProduc, cupProduct]);

  return {
    packProduc,
    cupProduct,
    allProducts,
  };
};
