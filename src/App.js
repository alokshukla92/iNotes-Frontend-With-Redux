// // src/App.js
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import LoginPage from './pages/LoginPage';
// import SignupPage from './pages/SignupPage';
// import PrivateRoute from './utils/PrivateRoute';
// import { AuthProvider } from './context/AuthContext';
// import Navbar from './components/utils/Navbar';

// function App() {
//   return (
//     <AuthProvider>
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />
//         <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
//       </Routes>
//     </Router>
//     </AuthProvider>
    
//   );
// }

// export default App;


// src/App.js
function App() {
  return (
    <div className="p-4 bg-gray-100">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl font-bold">Hello Tailwind CSS!</h1>
      </header>
      <main className="mt-4">
        <p className="text-lg text-gray-700">Welcome to your Tailwind CSS setup in React.</p>
      </main>
    </div>
  );
}

export default App;
