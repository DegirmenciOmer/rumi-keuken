import Link from "next/link";
import React from "react";

const Post = ({ post }) => {
  return (
    <div className="card">
      <img alt="cover image" src={post.frontmatter.cover_image} />
      <p className="post-date">Posted on {post.frontmatter.date}</p>
      <h3>{post.frontmatter.title}</h3>
      <p className="">{post.frontmatter.excerpt}</p>
      <Link legacyBehavior href={`/blog/${post.slug}`}>
        <a className="btn">Read more</a>
      </Link>
    </div>
  );
};

export default Post;
