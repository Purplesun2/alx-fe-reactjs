import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((error) => console.error('Error fetching recipe:', error));
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg mb-4" />
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Summary</h2>
        <p className="mt-2 text-gray-700">{recipe.summary}</p>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Ingredients</h2>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          {/* Example ingredients */}
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Cooking Steps</h2>
        <ol className="list-decimal list-inside mt-2 text-gray-700">
          {/* Example cooking steps */}
          <li>Step 1</li>
          <li>Step 2</li>
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
