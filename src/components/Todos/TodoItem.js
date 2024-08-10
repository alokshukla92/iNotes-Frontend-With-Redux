// src/components/Todos/TodoItem.js
import axios from 'axios';

const TodoItem = ({ todo, onDelete, onEdit }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/notes/deletenote/${todo._id}`);
      onDelete(todo._id);
    } catch (error) {
      console.error('Failed to delete todo:', error);
    }
  };

  const handleEdit = async () => {
    // TODO: Handle Later
    console.log("Edit Cicked");
    
    // try {
    //   await axios.delete(`/api/notes/updatenote/${todo._id}`);
    //   onEdit(todo._id);
    // } catch (error) {
    //   console.error('Failed to delete todo:', error);
    // }
  };

  return (
    <li>
      <span>{todo.title}</span>
      <span>{todo.description}</span>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
