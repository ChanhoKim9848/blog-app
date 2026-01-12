import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../images/avatar1.jpg";

const PostAuthor = () => {
  return (
    <Link to={`/posts/users/1`} className="post__author">
      <div className="post__author-avatar">
        <img src={Avatar} alt="" />
      </div>
      <div className="post__author-details">
        <h5>Author Name</h5>
        <small>June 15, 2023</small>
      </div>
    </Link>
  );
};

export default PostAuthor;
