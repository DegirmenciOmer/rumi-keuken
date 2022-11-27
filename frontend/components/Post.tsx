import Link from "next/link";
import React, { FC } from "react";
import { Tpost } from "../pages";
type TPostProps = { post: Tpost };

const Post: FC<TPostProps> = ({ post }) => {
  return (
    <div className="card">
      <img
        alt="cover image"
        className="image"
        src={post.frontmatter.cover_image}
      />
      <h3>{post.frontmatter.title}</h3>
      <Link legacyBehavior href={`/blog/${post.slug}`}>
        <a className="btn">Read more</a>
      </Link>
    </div>
  );
};

export default Post;
