import Image from "next/image";
import Link from "next/link";
import React from "react";
import MainImage from "@/public/Images/content-image/cover.jpg";
import JJImage from "@/public/Images/author/jj.jpeg";
import BlogCard from "./BlogCard";
import MainContent from "./MainContent";

const BlogInfo = () => {
  return (
    <div className="w-full">
      <section className="flex flex-col text-center gap-6 py-12  sm:py-16 md:flex-row md:items-center md:justify-between">
        <h1 className="text-6xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
          Blog.
        </h1>

        <p className="max-w-full text-base text-gray-600 sm:text-lg">
          A statically generated blog example using{" "}
          <Link
            href="https://nextjs.org/"
            className="font-medium text-black underline underline-offset-4 hover:text-blue-600"
          >
            Next.js
          </Link>{" "}
          and Markdown.
        </p>
      </section>

      {/* Content */}
      <MainContent />
      {/* more content */}
      <section>
        <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
          More Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
          <BlogCard />
        </div>
      </section>
    </div>
  );
};

export default BlogInfo;
