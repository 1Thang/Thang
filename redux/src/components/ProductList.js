import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';
import { selectIncompleteProducts, selectCompletedProducts } from '../redux/selectors/productSelectors';
import ProductItem from './ProductItem';

const ProductList = () => {
  const [view, setView] = useState('all'); 
  const incompleteProducts = useSelector(selectIncompleteProducts); 
  const completedProducts = useSelector(selectCompletedProducts); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const toggleView = (viewType) => {
    setView(viewType); 
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <div>
        <button onClick={() => toggleView('all')}>Show All Products</button>
        <button onClick={() => toggleView('incomplete')}>Show Incomplete Products</button>
        <button onClick={() => toggleView('completed')}>Show Completed Products</button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {view === 'all' ? (
          [...incompleteProducts, ...completedProducts].length > 0 ? (
            [...incompleteProducts, ...completedProducts].map((product) => (
              <ProductItem key={product.id} product={product} />
            ))
          ) : (
            <p>No products available.</p>
          )
        ) : view === 'incomplete' ? (
          incompleteProducts.length > 0 ? (
            incompleteProducts.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))
          ) : (
            <p>No incomplete products available.</p>
          )
        ) : (
          completedProducts.length > 0 ? (
            completedProducts.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))
          ) : (
            <p>No completed products available.</p>
          )
        )}
      </ul>
    </div>
  );
};

export default ProductList;
