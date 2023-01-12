import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from "../components/Post";
import { FC } from "react";
import {
  AiFillLinkedin,
  AiFillGooglePlusCircle,
  AiFillGithub,
} from "react-icons/ai";

export type Tpost = {
  slug: string;
  date: string;
  frontmatter: {
    cover_image: string;
    date: string;
    excerpt: string;
    title: string;
  };
};

type TPostProps = {
  posts: Tpost[];
};

export const Home: FC<TPostProps> = ({ posts }) => {
  console.log(posts);

  return (
    <>
      <Head>
        <title>Webdev Next</title>
      </Head>
      <div className="showcase">
        <h4>
          Welkom bij Rumi's keuken! Hierbij kun je heerlijke maaltijden met
          heerlijke goedkope prijzen vinden!
        </h4>
      </div>
      <div className="post-card">
        <h1>Onze Menu</h1>
        <ul className="posts">
          {posts
            .sort((a, b) =>
              new Date(b.frontmatter.date) > new Date(a.frontmatter.date)
                ? 1
                : -1
            )
            .map((post) => (
              <Post key={post.slug} post={post} />
            ))}
        </ul>
      </div>
    </>
  );
};

export async function getStaticProps() {
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

export default Home;
