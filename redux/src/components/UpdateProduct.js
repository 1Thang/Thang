import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../actions/productActions';

const UpdateProductForm = ({ product }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(updatedProduct));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={updatedProduct.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        value={updatedProduct.price}
        onChange={handleChange}
      />
      <button type="submit">Update Product</button>
    </form>
  );
};

export default UpdateProductForm;
