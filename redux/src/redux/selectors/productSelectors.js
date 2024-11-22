
export const selectIncompleteProducts = (state) => {
  return state.product.products.filter(product => !product.completed);
};

export const selectCompletedProducts = (state) => {
  return state.product.products.filter(product => product.completed);
};
