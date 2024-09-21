import React, { useState } from 'react';
import { fetchUserData } from '../services/githubApi';

const SearchBar = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState(0);
  const [userData, setUserData] = useState([]);

  const handleSearch = async () => {
    const results = await fetchUserData(username, location, minRepos);
    setUserData(results);
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
      />
      <input
        type="number"
        value={minRepos}
        onChange={(e) => setMinRepos(Number(e.target.value))}
        placeholder="Minimum Repositories"
      />
      <button onClick={handleSearch}>Search</button>

      {/* Display user data here */}
      <div>
        {userData.map((user) => (
          <div key={user.id}>{user.login}</div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
