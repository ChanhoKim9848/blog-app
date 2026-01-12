import React from "react";

import Thumbnail1 from "../images/blog1.jpg";
import Thumbnail2 from "../images/blog2.jpg";
import Thumbnail3 from "../images/blog3.jpg";
import PostItem from "./PostItem";

const DUMMY_POSTS = [
  {
    id: "1",
    thumbnail: Thumbnail1,
    category: "Education",
    title: "The Future of Education: Trends to Watch in 2023",
    desc: "Explore the latest trends shaping the future of education in 2023, from AI integration to personalized learning experiences.",
    authorID: 3,
  },
  {
    id: "2",
    thumbnail: Thumbnail2,
    category: "Business",
    title: "Top 10 Business Strategies for Startups in 2023",
    desc: "Discover the top 10 business strategies that startups should consider in 2023 to ensure growth and success in a competitive market.",
    authorID: 1,
  },
  {
    id: "3",
    thumbnail: Thumbnail3,
    category: "Entertainment",
    title: "The Evolution of Streaming Services in 2023",
    desc: "An in-depth look at how streaming services have evolved in 2023, including new features, content trends, and market competition.",
    authorID: 2,
  },
];

const Posts = () => {
  const [posts, setPosts] = React.useState(DUMMY_POSTS);
  return (
    <section className="posts">
      <div className="container posts__container">
        {posts.map(({ id, thumbnail, category, title, desc, authorID }) => (
          <PostItem
            key={id}
            postID={id}
            thumbnail={thumbnail}
            category={category}
            title={title}
            desc={desc}
            authorID={authorID}
          />
        ))}
      </div>
    </section>
  );
};
export default Posts;
