// src/components/Todos/TodoList.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('/api/notes/fetchallnotes');
        setTodos(response.data);
      } catch (error) {
        console.error('Failed to fetch todos:', error);
      }
    };

    fetchTodos();
  }, []);

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo._id !== id));
  };

  const handleEditTodo = (id, title, description) => {
    const newNotes = todos.map(item => {
      if (item._id === id) {
        return {
          ...item,
          title: title,
          description: description
        };
      }
      return item;
    });
    setTodos(newNotes)
  };


  return (
    <div className="container my-3">
      <TodoForm onAddTodo={handleAddTodo} />
      <hr className="my-4" /> {/* Add a horizontal line for separation */}
      <h3>My Notes</h3>
      <div className="row my-3 mx-3">
        {todos.map(todo => (
          <div key={todo._id} className="col-md-3">
          <TodoItem key={todo._id} todo={todo} onDelete={handleDeleteTodo} onEdit={handleEditTodo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
