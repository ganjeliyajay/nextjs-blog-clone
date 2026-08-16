import Image from "next/image";
import React from "react";
import BlogData from "@/blog-data.json";
import Link from "next/link";

const MainContent = () => {
  const Blog = BlogData[0];
  return (
    <section className="mt-4 w-full sm:mt-6">
      <div className=" mb-8 md:mb-16">
        <Link href={Blog.blogLink}>
          {" "}
          <Image
            width={500}
            height={500}
            src={Blog.blogSrc}
            alt={Blog.blogTitle}
            className="h-auto w-full object-cover cursor-pointer"
            priority
          />
        </Link>
      </div>
      {/* content-heading */}
      <section className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            {" "}
            <Link href={Blog.blogLink} className="hover:underline">
              Dynamic Routing and Static Generation
            </Link>
          </h3>
          {/* content-date */}
          <div className="mb-4 md:mb-0 text-lg">
            <time>{Blog.date}</time>
          </div>
        </div>

        <div>
          {/* content-info */}
          <p className="text-lg leading-relaxed mb-4">{Blog.description1}</p>
          <div className="flex items-center">
            <Image
              width={500}
              height={500}
              src={Blog.authorImg}
              alt={Blog.authorName}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="text-xl font-bold">{Blog.authorName}</div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default MainContent;
