import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import xss from "xss";

export default function PostPage({
  frontmatter: { title, cover_image },
  content,
  slug,
}) {
  return (
    <>
      <Link legacyBehavior href="/">
        <a className="btn btn-back">Terug</a>
      </Link>
      <div className="card card-page">
        <h1 className="post-title">{title}</h1>
        <img alt="" src={cover_image} />
        <div className="post-body">
          {/* parse the content with marked, purify the content with xss */}
          <div
            dangerouslySetInnerHTML={{
              __html: xss(marked(content)),
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
