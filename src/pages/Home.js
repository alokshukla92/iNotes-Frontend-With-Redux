// src/pages/Home.js
import TodoList from '../components/Todos/TodoList';

const Home = () => {
  return (
    <div className='container my-3'>
      <div className='text-center my-3'>
        <h1>iNotes</h1>
      </div>
      <TodoList />
    </div>
  );
};

export default Home;
