import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct, updateProduct } from '../redux/actions/productActions';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProduct(product.id));
  };

  const handleToggleComplete = () => {
    dispatch(updateProduct({ ...product, completed: !product.completed }));
  };

  return (
    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <input
        type="checkbox"
        checked={product.completed}
        onChange={handleToggleComplete}
        style={{ marginRight: '10px' }}
      />
      <span
        style={{
          textDecoration: product.completed ? 'line-through' : 'none',
          flex: 1,
        }}
      >
        {product.name}
      </span>
      <button
        onClick={handleDelete}
        style={{
          marginLeft: '10px',
          padding: '5px 10px',
          backgroundColor: '#ff4d4f',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default ProductItem;
