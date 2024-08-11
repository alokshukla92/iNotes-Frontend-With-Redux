import { useEffect, useState } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');

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

  const handleEditClick = (todo) => {
    setCurrentTodo(todo);
    setEditTitle(todo.title);
    setEditDescription(todo.description);
    const editModal = new window.bootstrap.Modal(document.getElementById('editTodoModal'));
    editModal.show();
  };

  const handleEditTodo = async () => {
    if (currentTodo) {
      const updatedTodo = {
        ...currentTodo,
        title: editTitle,
        description: editDescription
      };
  
      try {
        // Make the API call to update the todo item
        const response = await axios.put(`/api/notes/updatenote/${updatedTodo._id}`, {
          title: updatedTodo.title,
          description: updatedTodo.description
        });
        
        // Update state only if the API call is successful
        setTodos(todos.map(todo => (todo._id === updatedTodo._id ? updatedTodo : todo)));
        
        // Hide the modal
        const editModal = window.bootstrap.Modal.getInstance(document.getElementById('editTodoModal'));
        if (editModal) {
          editModal.hide();
        }
        
        console.log('Todo updated:', response.data);
      } catch (error) {
        console.error('Failed to update todo:', error);
      }
    }
  };
  

  return (
    <div className="container my-3">
      <TodoForm onAddTodo={handleAddTodo} />
      <hr className="my-4" />
      <h3>My Notes</h3>
      <div className="row my-3 mx-3">
        {todos.map(todo => (
          <div key={todo._id} className="col-md-3">
            <TodoItem
              todo={todo}
              onDelete={handleDeleteTodo}
              onUpdate={() => handleEditClick(todo)}
            />
          </div>
        ))}
      </div>

      {/* Bootstrap Modal for editing todos */}
      <div
        className="modal fade"
        id="editTodoModal"
        tabIndex="-1"
        aria-labelledby="editTodoModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="editTodoModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="editTitle" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="editTitle"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="editDescription" className="form-label">
                    Description
                  </label>
                  <textarea
                    id="editDescription"
                    className="form-control"
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleEditTodo}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
