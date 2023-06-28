import { Routes, Route } from "react-router-dom";
import RegisterForm from "./components/register";
import Home from "./components/home";
import Blog from "./components/Blog";
import LoginForm from "./components/login";
import Profile from "./components/profile";
import MyBlogs from "./components/myBlogs";
import Favorites from "./components/favorites";
import PostBlogs from "./components/post";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="blog/:id" element={<Blog />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="profile" element={<Profile />} />
        <Route path="myblogs" element={<MyBlogs />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="postblog" element={<PostBlogs />} />
      </Routes>
    </div>
  );
}

export default App;
