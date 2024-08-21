import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import required components
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar'; // Ensure to import SearchBar if used

const App = () => {
  return (
    <Router>
      <div>
        <SearchBar /> {/* Ensure SearchBar is used if needed */}
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/add" element={<AddRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
