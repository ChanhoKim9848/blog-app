import React from "react";
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";
import Thumbnail from "../images/blog22.jpg";

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={`posts/werwer/edit`} className="btn sm primary">
              Edit
            </Link>
            <Link to={`posts/werwer/edit`} className="btn sm danger">
              Delete
            </Link>
          </div>
        </div>
        <h1>This is the post title!</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cumque
          nisi corporis neque ipsum facere, eveniet consectetur, in quidem
          ducimus obcaecati nihil voluptatem doloremque ratione eius dolore. Quo
          atque molestias libero saepe nesciunt minus cum earum tempora eaque
          inventore quod quam accusantium itaque dignissimos possimus maxime sed
          est cupiditate, reprehenderit eligendi eius pariatur eos. Itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cumque
          nisi corporis neque ipsum facere, eveniet consectetur, in quidem
          ducimus obcaecati nihil voluptatem doloremque ratione eius dolore. Quo
          atque molestias libero saepe nesciunt minus cum earum tempora eaque
          inventore quod quam accusantium itaque dignissimos possimus maxime sed
          est cupiditate, reprehenderit eligendi eius pariatur eos. Itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cumque
          nisi corporis neque ipsum facere, eveniet consectetur, in quidem
          ducimus obcaecati nihil voluptatem doloremque ratione eius dolore. Quo
          atque molestias libero saepe nesciunt minus cum earum tempora eaque
          inventore quod quam accusantium itaque dignissimos possimus maxime sed
          est cupiditate, reprehenderit eligendi eius pariatur eos. Itaque.
        </p>
      </div>
    </section>
  );
};

export default PostDetail;
