import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';

const App = () => (
  <Provider store={store}>
    <div>
      <h1>To-Do List</h1>
      <AddProduct />
      <ProductList />
    </div>
  </Provider>
);

export default App;
