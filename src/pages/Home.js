import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ posts, user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (setUser) {
      setUser(null);
    }
    navigate('/login');
  };

  return (
    <div>
      <h1>Welcome to the Blog!</h1>
      {user ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <button onClick={handleLogout}>Logout</button>
          <button onClick={() => navigate('/create')}>Create a New Post</button>
        </div>
      ) : (
        <div>
          <button onClick={() => navigate('/login')}>Login</button>
          <button onClick={() => navigate('/signup')}>Sign Up</button>
        </div>
      )}
      <div>
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id}>
              <h2
                onClick={() => navigate(`/post/${post.id}`)}
                style={{ cursor: 'pointer' }}
              >
                {post.title}
              </h2>
            </div>
          ))
        ) : (
          <p>No posts available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
