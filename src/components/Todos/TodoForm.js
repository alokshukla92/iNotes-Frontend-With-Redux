// src/components/Todos/TodoForm.js
import { useState } from 'react';
import axios from 'axios';

const TodoForm = ({ onAddTodo }) => {
  const [note, setNote] = useState({
    title: "",
    description: "",
  });
  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/notes/addnote', note);
      onAddTodo(response.data);
      setNote({
        title: "",
        description: "",
      });
    } catch (error) {
      console.error('Failed to add todo:', error);
    }
  };

  return (
    <>
      <div className="container my-3 mx-3">
        <form>
          <h3>Add Notes</h3>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={note.title}
              id="title"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              name="description"
              value={note.description}
              id="description"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary"
            disabled={note.title.length < 5 || note.description.length < 5}
          >
            Add Note
          </button>
        </form>
      </div>
    </>
  );
};

export default TodoForm;
