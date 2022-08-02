import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import type { BlogPost } from "../@types/schema";
import BlogCard from "../components/BlogCard";
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
              Notion Blog
            </h1>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-6 lg:grid-cols-2 lg:max-w-none">
            {posts.map((post: BlogPost) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
