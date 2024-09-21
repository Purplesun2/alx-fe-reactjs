import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

export const fetchAdvancedUserData = async (username, location, minRepos) => {
  let query = `q=${username}`;
  if (location) {
    query += `+location:${location}`;
  }
  if (minRepos) {
    query += `+repos:>${minRepos}`;
  }

  const response = await axios.get(`${GITHUB_API_URL}/search/users?${query}`);
  return response.data;
};
