import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';
import { selectIncompleteProducts, selectCompletedProducts } from '../redux/selectors/productSelectors';
import ProductItem from './ProductItem';

const ProductList = () => {
  const [view, setView] = useState('incomplete'); 
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
        <button onClick={() => toggleView('incomplete')}>
          Show Incomplete Products
        </button>
        <button onClick={() => toggleView('completed')}>
          Show Completed Products
        </button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {(view === 'incomplete' ? incompleteProducts : completedProducts).length > 0 ? (
          (view === 'incomplete' ? incompleteProducts : completedProducts).map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </ul>
    </div>
  );
};

export default ProductList;
