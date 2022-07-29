import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import type { BlogPost } from "../@types/schema";
import NotionService from "../services/notion-service";

export const getStaticProps: GetStaticProps = async (context) => {
  const notionService = new NotionService();

  const posts = await notionService.getPublishedBlogPosts();

  return {
    props: {
      posts,
    },
  };
};

const Home: NextPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const title = "Test Blog";
  const description = "Welcome to my Notion Blog";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" title="description" content={description} />
      </Head>

      <main className="min-h-screen">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center">
            <h1 className="font-extrabold text-xl md:text-4xl text-black text-center">
              NotionBlog
            </h1>
          </div>
          {posts.map((post: BlogPost) => (
            <p key={post.id}>Blog Post Component will go here: {post.title}</p>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
