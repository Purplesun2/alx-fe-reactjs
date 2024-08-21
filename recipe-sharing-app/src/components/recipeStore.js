import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [], // Ensure recipes are initialized properly
  filteredRecipes: [],
  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe],
    filteredRecipes: [...state.filteredRecipes, newRecipe] // Update filtered recipes
  })),
  setRecipes: (recipes) => set({ 
    recipes,
    filteredRecipes: recipes
  }),
  setSearchTerm: (term) => set(state => {
    const filtered = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
    return { 
      searchTerm: term, 
      filteredRecipes: filtered
    };
  }),
  filteredRecipes: [],
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
}));

export default useRecipeStore;
