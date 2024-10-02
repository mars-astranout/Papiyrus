import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useTransition } from 'react';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import CreateBlog from './pages/CreateBlog';
import SignUp from './pages/SignUp';
import Login from './pages/Login';


function App() {
  const [loggedIn, setLoggedIn] =useState(false);
  const [username, setUsername] =useState('');
  const [user, setUser] = useState(null);
  const [users, setUsers] =useState([]);
  const [posts, setPosts] = useState([
    { id: 1, title: 'First Blog Post', content: 'This is the first post content.' },
    { id: 2, title: 'Second Blog Post', content: 'This is the second post content.' }
  ]);

  const addNewPost = (newPost) => {
    setPosts((prevPosts) => [prevPosts[0], prevPosts[1], newPost, ...prevPosts.slice(2)]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/post/:id" element={<BlogPost posts={posts} />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp setUsers={setUsers} setUser={setUser} users={users} />} />
        <Route path="/login" element={<Login setUser={setUser} users={users} />} />
        <Route path="/create" element={<CreateBlog addNewPost={addNewPost} />} />
      </Routes>
      {loggedIn && (
          <button onClick={() => window.location.href = "/create"} className="create-button">
            Create
          </button>
        )}
    </Router>
  );
}

export default App;
