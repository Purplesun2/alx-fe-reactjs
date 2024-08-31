// src/components/BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams();

  return (
    <div>
      <h1>Blog Post {id}</h1>
      {/* Fetch and display blog post based on id */}
    </div>
  );
}

export default BlogPost;
