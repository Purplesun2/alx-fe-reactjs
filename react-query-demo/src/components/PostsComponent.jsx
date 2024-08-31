import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

// Function to fetch posts
const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

// PostsComponent definition
function PostsComponent() {
  const { data, error, isLoading, isError, refetch, isFetching } = useQuery(
    'posts',
    fetchPosts,
    {
      cacheTime: 5 * 60 * 1000, // Cache data for 5 minutes
      staleTime: 1 * 60 * 1000,  // Consider data fresh for 1 minute
      refetchOnWindowFocus: true, // Refetch data when the window regains focus
      keepPreviousData: true,     // Keep previous data while fetching new data
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occurred: {error.message}</div>;

  return (
    <div>
      <button onClick={() => refetch()} disabled={isFetching}>Refetch Posts</button>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
