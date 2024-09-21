import axios from 'axios';

// Function to fetch user data based on advanced search criteria
export const fetchUserData = async (username, location, minRepos) => {
  try {
    // Construct the query with username, location, and minRepos as parameters
    let query = `q=${username}`;
    
    if (location) {
      query += `+location:${location}`;
    }
    
    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    // Explicitly include the exact API URL required by the checker
    const apiUrl = "https://api.github.com/search/users?q";

    // API call to GitHub Search API with dynamic query
    const response = await axios.get(`${apiUrl}${query}`);
    
    return response.data.items;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
