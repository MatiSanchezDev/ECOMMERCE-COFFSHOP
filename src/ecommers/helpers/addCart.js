export const addCart = (cart) => {
  const sumaTotal = cart.reduce((total, producto) => {
    return producto.count * producto.price + total;
  }, 0);
  return sumaTotal;
};
