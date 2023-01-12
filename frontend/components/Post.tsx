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
      <Link legacyBehavior href={`/blog/${post.slug}`}>
        <a className="btn">{post.frontmatter.title}</a>
      </Link>
    </div>
  );
};

export default Post;
