import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Header = () => {
  const [user, setUser] = useState("");
  const [res, setRes] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["token"] = `${token}`;
    const getUsername = async () => {
      try {
        const response = await axios.get("http://localhost:9000/validate");
        setUser(response.data.username);
        setRes(response.data.message);

        setLoading(false);
      } catch (error) {
        setRes(error.response.data.message);
        setLoading(false);
      }
    };

    getUsername();
  }, []);
  return (
    <div>
      {loading ? (
        <div></div>
      ) : (
        <div className=" flex p-10 justify-between border-b-red-100 border-b-4">
          <div className=" items-start align-middle text-4xl">
            <Link to="/profile">{user}</Link>
          </div>
          <div className=" items-end align-middle space-x-4 ">
            <Link className=" text-red-400" to="/">
              Home
            </Link>
            <Link to="/postblog">Post Blogs</Link>
            <Link to="/myblogs">My Blogs</Link>
            <Link to="/favorites">Favorite Blogs</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
