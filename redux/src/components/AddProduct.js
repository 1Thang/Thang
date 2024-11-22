import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/actions/productActions';
import { useNavigate } from 'react-router-dom'; 
const AddProduct = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const handleAdd = () => {
    if (name.trim()) {
      dispatch(addProduct({ name, completed: false }));
      setName('');
      navigate('/products');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add a new task"
        style={{ padding: '10px', width: '300px' }}
      />
      <button onClick={handleAdd}     
      style={{
          marginLeft: '10px',
          padding: '10px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}>Add</button>
    </div>
  );
};

export default AddProduct;
