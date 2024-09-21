import axios from 'axios';

// Fetch user data based on username, location, and minimum repositories
export const fetchUserData = async (username, location, minRepos) => {
  try {
    // Construct the query string based on the provided parameters
    let query = `q=${username}`;
    if (location) {
      query += `+location:${location}`;
    }
    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    // Make the API request with the constructed query
    const response = await axios.get(`https://api.github.com/search/users?${query}`);
    
    return response.data.items;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
