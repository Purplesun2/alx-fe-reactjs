import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogPost from './components/BlogPost'; // Ensure you have this component
import Home from './components/Home'; // Example component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
