import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from "../components/Post";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Webdev Next</title>
      </Head>
      <ul className="posts">
        {posts
          .sort((a, b) =>
            new Date(b.frontmatter.date) > new Date(a.frontmatter.date) ? 1 : -1
          )
          .map((post) => (
            <Post key={post.slug} post={post} />
          ))}
      </ul>
    </>
  );
}

export async function getStaticProps(context) {
  //get files from the posts directory
  const files = fs.readdirSync(path.join("posts"));

  //Get slug andfrontmatter from posts
  const posts = files.map((filename) => {
    //create slug
    const slug = filename.replace(".md", "");
    //frontmatter
    const mdWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8");
    const { data: frontmatter } = matter(mdWithMeta);

    return { slug, frontmatter };
  });

  if (!files) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts }, // will be passed to the page component as props
  };
}
