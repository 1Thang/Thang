import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';
import ProductItem from './ProductItem';

const ProductList = () => {
  const products = useSelector((state) => state.product.products || []); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h2>To-Do List</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.length > 0 ? (
          products.map((product) => <ProductItem key={product.id} product={product} />)
        ) : (
          <p>No products available.</p> 
        )}
      </ul>
    </div>
  );
};

export default ProductList;
