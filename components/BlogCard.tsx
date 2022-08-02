import { FC } from "react";
import type { BlogPost } from "../@types/schema";
import dayjs from "dayjs";
import Link from "next/link";

type BlogCardProps = {
  post: BlogPost;
};

const localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);

const BlogCard: FC<BlogCardProps> = ({ post }) => {
  return (
    <Link href={`/post/${post.slug}`}>
      <a className="transition duration-300 hover:scale-105">
        <div className="flex flex-col rounded-xl shadow-lg overflow-hidden">
          <div className="flex-shrink-0">
            <img
              className="h-64 w-full object-fit"
              src={post.cover}
              alt="Cover"
            />
          </div>
          <div className="flex-1 bg-gray-50 pt-2 pb-6 px-4 flex flex-col justify-between">
            <div className="flex-1">
              <span className="block mt-2">
                <h4 className="text-xs font-medium text-gray-600">
                  {dayjs(post.date).format("LL")}
                </h4>
              </span>
              <span className="block mt-2">
                <h4 className="text-xl font-medium text-gray-900">
                  {post.title}
                </h4>
              </span>
              <span className="block mt-2">
                <h4 className="text-xs text-gray-600">{post.description}</h4>
              </span>

              <span className="block m-2 space-x-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="bg-green-300 text-green-800 px-2 py-1 text-xs rounded-lg"
                  >
                    #{tag.name}
                  </span>
                ))}
              </span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BlogCard;
