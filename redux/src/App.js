import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <nav>
          <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', padding: 0 }}>
            <li>
              <Link to="/products">Danh sách sản phẩm</Link>
            </li>
            <li>
              <Link to="/add-product">Thêm sản phẩm</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </div>
    </Router>
  </Provider>
);

export default App;
