import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/actions/productActions';

const AddProduct = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (name.trim()) {
      dispatch(addProduct({ name, completed: false }));
      setName('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddProduct;
