import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./header";
import AddFavorite from "./addFavorite";
import RemoveFavorite from "./removeFavorite";
import RemoveBlog from "./removeBlog";

const Blog = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState([]);
  const [apiResponse, setApiResponse] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:9000/blog/" + id);
        setBlog(response.data.blog);
        console.log(blog);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setApiResponse(error.response.data.message);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <div>
      <Header></Header>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <h1>{apiResponse}</h1>
          <h1 className=" text-4xl text-center p-5">{blog.title}</h1>
          <p className=" text-lg font-thin text-center">{blog.content}</p>
          <h1 className=" text-center text-xl">written by {blog.user}</h1>
          <h1 className=" font-thin text-center">{blog.date}</h1>
        </div>
      )}
      <AddFavorite title={blog.title}></AddFavorite>
      <RemoveFavorite title={blog.title}></RemoveFavorite>
      <RemoveBlog title={blog.title}></RemoveBlog>
    </div>
  );
};

export default Blog;
