import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './Pages/SIgnIn';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;


// import Register from './Pages/Register';
// import SignIn from './Pages/SIgnIn';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// function App() {

//   return (
//     <>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<SignIn />} />
//         <Route path="/register" element={<Register />} />
//       </Routes>
//     </BrowserRouter>
//     </>
//   )
// }

// export default App;
