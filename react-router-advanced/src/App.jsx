import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';  // Example component
import Profile from './components/Profile';  // Profile component with nested routes
import BlogPost from './components/BlogPost';  // Example dynamic route component
import ProtectedRoute from './components/ProtectedRoute';  // Protected route component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<ProtectedRoute isAuthenticated={true} element={<Profile />} />} />
        <Route path="/blog/:id" element
