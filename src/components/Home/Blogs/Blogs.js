import React, { useEffect, useState } from "react";
import useServer from "../../../Hooks/useServer";
import Blog from "../Blog/Blog";
import "./Blogs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const { server } = useServer();

  useEffect(() => {
    fetch(server + "/fakeDB/main/fakeBlogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="Blogs">
      <div className="container">
        <h1>Latest Blogs</h1>
        <p>The process of our service</p>
        <div className="row g-3">
          {blogs.map((blog) => (
            <Blog key={blog?.id} blog={blog}></Blog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
