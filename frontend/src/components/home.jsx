import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card";
import Header from "./header";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    const fetchBlogs = async () => {
      try {
        if (token == null) {
          navigate("/login");
        }
        const response = await axios.get("http://localhost:9000/blogs");
        setBlogs(response.data.blogs);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const getBlogs = blogs.map((blog) => {
    return (
      <Card
        title={blog.title}
        user={blog.user}
        date={blog.date}
        id={blog._id}
      ></Card>
    );
  });

  return (
    <div>
      <div>
        <Header></Header>
      </div>
      {loading ? <h1>loading blogs...</h1> : <h1>{getBlogs}</h1>}
    </div>
  );
};

export default Home;
