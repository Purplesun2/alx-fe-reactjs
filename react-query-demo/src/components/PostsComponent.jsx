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
  const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occurred: {error.message}</div>;

  return (
    <div>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
