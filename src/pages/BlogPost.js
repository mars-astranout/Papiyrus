import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <h1>Post not found!</h1>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p><strong>By:</strong> {post.username}</p>
      <div>{post.content}</div>
      {post.image && <img src={URL.createObjectURL(post.image)} alt={post.title} />}
    </div>
  );
};

export default BlogPost;
