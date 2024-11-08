// App.js
import React from 'react';
import { Provider } from 'react-redux';
import TodoList from '../src/component/TodoList';
import store from '../src/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;
