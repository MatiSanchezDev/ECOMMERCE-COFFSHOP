import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  addCount,
  delCart,
  delCount,
} from "../../store/slices/cartSlice";
import { toast } from "sonner";
import { useState } from "react";

export const useCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [cartOpen, setCartOpen] = useState(false);

  const handleAddCart = (product) => {
    toast.success(`"${product.name}" Added!`);
    dispatch(addCart(product));
  };

  const handleAddCount = (product) => {
    if (product.count < product.stock) toast.success("Product Added!");
    if (product.count === product.stock) toast.error("Sorry, no more stock");
    dispatch(addCount(product));
  };

  const handleDelCart = (product) => {
    toast.success("Product Removed from Cart");
    dispatch(delCart(product));
  };

  const handleDelCount = (product) => {
    if (product.count > 1) toast.success("Product Removed!");
    dispatch(delCount(product));
  };

  return {
    cart,
    handleAddCart,
    handleDelCart,
    handleAddCount,
    handleDelCount,
    cartOpen,
    setCartOpen,
  };
};
