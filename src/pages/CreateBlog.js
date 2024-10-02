import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CreateBlog.css';

const CreateBlog = ({ addNewPost }) => {
  const [title, setTitle] = useState('');
  const [username, setUsername] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [wordCount, setWordCount] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(), // Unique ID for the post
      title,
      username,
      content,
      image,
    };

    addNewPost(newPost);
    console.log('Blog post created:', { title, content, author: username });
    navigate('/'); // Redirect to the homepage after submitting
  };

  return (
    <div>
      <h1>Create a New Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Enter the title"
          />
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Enter your username"
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => {
              const contentValue = e.target.value;
              const words = contentValue.split(/\s+/).filter((word) => word.length > 0);
              if (words.length <= 4000) {
                setContent(contentValue);
                setWordCount(words.length);
              }
            }}
            required
            placeholder="Write your blog post here (max 4000 words)"
          />
          <p>{wordCount} / 4000 words</p>
        </div>
        <div>
          <label>Upload Image:</label>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} accept="image/*" />
        </div>
        <p>Author: {username}</p>
        <button type="submit">Submit Blog Post</button>
      </form>
    </div>
  );
};

export default CreateBlog;
