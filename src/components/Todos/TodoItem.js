// src/components/Todos/TodoItem.js
import axios from 'axios';

const TodoItem = ({ todo, onDelete, onEdit }) => {
  const iconStyle = {
    fontSize: "1.2rem", 
    marginLeft: "0.5rem", 
    cursor: "pointer"
  };

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
    <div className="card my-3">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <h5 className="card-title mb-0 me-2">{todo.title}</h5>
          <i className="bi bi-pencil-square" onClick={handleEdit} style={iconStyle}></i>
          <i className="bi bi-trash3" onClick={handleDelete} style={iconStyle}></i>
        </div>
        <p className="card-text">{todo.description}</p>
      </div>
    </div>
  );

};

export default TodoItem;
