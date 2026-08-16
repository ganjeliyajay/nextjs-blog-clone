import Image from "next/image";
import Link from "next/link";

import Cover1 from "@/public/Images/content-image/cover1.jpg";
import Cover2 from "@/public/Images/content-image/cover2.jpg";

import TimImage from "@/public/Images/author/tim.jpeg";
import JoeImage from "@/public/Images/author/joe.jpeg";
import BlogData from "@/blog-data.json";

const BlogCard = () => {
  return (
    <>
      {BlogData.slice(1).map((blog) => (
        <div key={blog.blogLink}>
          <div className="mb-5">
            <Link href={blog.blogLink} aria-label={blog.blogTitle}>
              <div className="relative block overflow-hidden">
                <div className="block pt-[50%]" />

                <Image
                  src={blog.blogSrc}
                  alt={blog.blogTitle}
                  fill
                  sizes="100vw"
                  className="object-cover shadow-sm transition-shadow duration-200 hover:shadow-md"
                />
              </div>
            </Link>
          </div>

          <h3 className="mb-3 text-3xl leading-snug">
            <Link href={blog.blogLink} className="hover:underline">
              {blog.blogTitle}
            </Link>
          </h3>

          <div className="mb-4 text-lg">
            <time>{blog.date}</time>
          </div>

          <p className="mb-4 text-lg leading-relaxed">{blog.description1}</p>

          <div className="flex items-center">
            <Image
              src={blog.authorImg}
              alt={blog.authorName}
              width={48}
              height={48}
              className="mr-4 h-12 w-12 rounded-full object-cover"
            />

            <div className="text-xl font-bold">{blog.authorName}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogCard;
