import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!title || !ingredients || !steps) {
      setError('All fields are required!');
      return;
    }
    
    setError('');
    // Logic to handle form submission
    const newRecipe = { title, ingredients, steps };
    console.log(newRecipe);

    // Clear the form
    setTitle('');
    setIngredients('');
    setSteps('');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Add New Recipe</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="3"
            className="mt-
