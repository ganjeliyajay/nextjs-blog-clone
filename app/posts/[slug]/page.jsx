import BlogData from "@/blog-data.json";
import Image from "next/image";
import Link from "next/link";

const page = async ({ params }) => {
  const { slug } = await params;

  const url = `/posts/${slug}`;

  const SingleData = BlogData.find((blog) => blog.blogLink === url);

  if (!SingleData) {
    return (
      <main className="min-h-screen">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight">Blog Not Found</h1>

          <Link
            href="/"
            className="mt-6 inline-block text-lg font-medium underline underline-offset-4 transition-opacity hover:opacity-60"
          >
            ← Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <h2 className="mb-16 mt-8 text-2xl font-bold leading-tight tracking-tight md:mb-20 md:text-4xl">
          <Link href="/" className="transition-opacity hover:opacity-60">
            Blog
          </Link>
          .
        </h2>

        <article className="mb-32">
          {/* ================= Blog Title ================= */}
          <h1 className="mb-10 text-center text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:mb-12 md:text-left md:text-7xl lg:text-8xl lg:leading-none">
            {SingleData.blogTitle}
          </h1>

          {/* ================= Desktop Author ================= */}
          <div className="mb-10 hidden md:block md:mb-12">
            <div className="flex items-center">
              <Image
                src={SingleData.authorImg}
                alt={SingleData.authorName}
                width={48}
                height={48}
                className="mr-4 h-12 w-12 rounded-full object-cover"
              />

              <div className="text-xl font-bold">{SingleData.authorName}</div>
            </div>
          </div>

          <div className="mb-10 overflow-hidden md:mb-16">
            <Image
              src={SingleData.blogSrc}
              alt={SingleData.blogTitle}
              width={1600}
              height={800}
              priority
              className="h-auto w-full object-cover shadow-sm"
            />
          </div>

          <div className="mx-auto max-w-2xl">
            <div className="mb-6 block md:hidden">
              <div className="flex items-center">
                <Image
                  src={SingleData.authorImg}
                  alt={SingleData.authorName}
                  width={48}
                  height={48}
                  className="mr-4 h-12 w-12 rounded-full object-cover"
                />

                <div className="text-xl font-bold">{SingleData.authorName}</div>
              </div>
            </div>

            <div className="mb-8 text-lg text-gray-600">
              <time dateTime="2020-03-16">{SingleData.date}</time>
            </div>

            <div className="text-lg leading-relaxed text-gray-800">
              <p className="mb-8">{SingleData.description1}</p>

              <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-black">
                {SingleData.descriptionTitle}
              </h2>

              <p className="mb-8">{SingleData.description2}</p>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
};

export default page;
