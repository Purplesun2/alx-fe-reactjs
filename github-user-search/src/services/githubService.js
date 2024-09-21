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

    // API call to GitHub Search API
    const response = await axios.get(`https://api.github.com/search/users?${query}`);
    
    return response.data.items;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
