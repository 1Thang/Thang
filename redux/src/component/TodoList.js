import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchTodosRequest,
  addTodoRequest,
  editTodoRequest,
  deleteTodoRequest,
  toggleCompleted,
  startEditing,
  toggleTheme,
} from '../actions/actions';
import TodoItem from '../components/TodoItem';
import TodoForm from '../components/TodoForm';
import useThemeStyles from './useThemeStyles';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);
  const theme = useSelector((state) => state.theme);
  const loading = useSelector((state) => state.todos.loading);
  const error = useSelector((state) => state.todos.error);
  const editingTodo = useSelector((state) => state.todos.editingTodo);

  const styles = useThemeStyles(theme);

  useEffect(() => {
    dispatch(fetchTodosRequest());
  }, [dispatch]);

  const handleAddOrEditTodo = (todo) => {
    if (todo.id) {
      dispatch(editTodoRequest(todo));
    } else {
      dispatch(addTodoRequest(todo));
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div style={styles.container}>
      <h1>To-Do List</h1>
      <button onClick={() => dispatch(toggleTheme())}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      <TodoForm addOrEditTodo={handleAddOrEditTodo} editingTodo={editingTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleCompleted={() => dispatch(toggleCompleted(todo))}
            startEditing={() => dispatch(startEditing(todo))}
            deleteTodo={() => dispatch(deleteTodoRequest(todo.id))}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
