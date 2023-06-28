import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card";
import Header from "./header";

const MyBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [res, setRes] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["token"] = `${token}`;
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:9000/user-blogs");
        setBlogs(response.data.blogs);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setRes(error.response.data.message);
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
      <h1>{res}</h1>
      {loading ? <h1>loading blogs...</h1> : <h1>{getBlogs}</h1>}
    </div>
  );
};

export default MyBlogs;
