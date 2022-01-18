import React from "react";
import "./Blog.css";

const Blog = ({ blog }) => {
  return (
    <div className="col-lg-4 col-sm-6 col-6">
      <div className="blog_card">
        <img src={blog?.blogImg} alt="" className="w-100" />
        <div className="blog_info">
          <h3>{blog?.title}</h3>
          <h5>1st Feb, 2021</h5>
          <p>{blog?.description.slice(0, 100)}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
