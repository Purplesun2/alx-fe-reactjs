import React, { useState } from 'react';

const AddRecipeForm = () => {
  // State to store form values
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');

  // State to store validation errors
  const [errors, setErrors] = useState({});

  // Validate the form input
  const validate = () => {
    const validationErrors = {};

    // Validate title
    if (!title.trim()) {
      validationErrors.title = 'Title is required';
    }

    // Validate ingredients
    if (!ingredients.trim()) {
      validationErrors.ingredients = 'Ingredients are required';
    } else if (ingredients.split(',').length < 2) {
      validationErrors.ingredients = 'Please list at least two ingredients';
    }

    // Validate steps
    if (!steps.trim()) {
      validationErrors.steps = 'Preparation steps are required';
    }

    // Return errors if found
    return validationErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Run validation
    const validationErrors = validate();

    // If validation fails, set errors
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Form is valid, proceed with form submission
    console.log('Form submitted:', { title, ingredients, steps });

    // Reset the form fields and errors
    setTitle('');
    setIngredients('');
    setSteps('');
    setErrors({});
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipe Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium">Recipe Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label htmlFor="ingredients" className="block text-sm font-medium">Ingredients (comma-separated)</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        {/* Preparation Steps */}
        <div>
          <label htmlFor="steps" className="block text-sm font-medium">Preparation Steps</label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          ></textarea>
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
