import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; // Example component
import BlogPost from './components/BlogPost'; // Component for dynamic blog posts
import Profile from './components/Profile'; // Component for the profile page
import ProtectedRoute from './components/ProtectedRoute'; // Component for protected routes

// Simulate an authentication status for demonstration purposes
const isAuthenticated = true; // Change this to simulate authentication

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route
          path="/profile"
          element={<ProtectedRoute element={<Profile />} isAuthenticated={isAuthenticated} />}
        />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
