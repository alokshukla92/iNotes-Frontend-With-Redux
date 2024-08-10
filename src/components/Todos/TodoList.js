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
    <div>
      <TodoForm onAddTodo={handleAddTodo} />
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo._id} todo={todo} onDelete={handleDeleteTodo} onEdit={handleEditTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
