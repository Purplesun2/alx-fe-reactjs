import axios from 'axios';

// Fetch user data based on the username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/search/users?q=${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
