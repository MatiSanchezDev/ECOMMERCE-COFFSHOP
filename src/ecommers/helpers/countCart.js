export const countCart = (cart) => {
  const sumaCart = cart.reduce((total, producto) => {
    return producto.count + total;
  }, 0);
  return sumaCart;
};
