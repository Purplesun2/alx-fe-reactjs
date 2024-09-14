import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error('Error fetching recipes:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white p-6 rounded-lg shadow-lg">
            {/* Wrap the recipe card in a Link to the RecipeDetail page */}
            <Link to={`/recipe/${recipe.id}`}>
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">{recipe.title}</h2>
              <p className="text-gray-700">{recipe.summary}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
