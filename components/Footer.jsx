import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col items-center py-20 lg:flex-row lg:py-28">
          {/* Footer Heading */}
          <h3 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:mb-0 lg:w-1/2 lg:pr-4 lg:text-left">
            Statically Generated with Next.js.
          </h3>

          {/* Footer Links */}
          <div className="flex flex-col items-center justify-center lg:w-1/2 lg:flex-row lg:pl-4">
            <Link
              href="https://nextjs.org/docs/basic-features/pages"
              target="_blank"
              className="mb-6 border border-black bg-black px-8 py-3 font-bold text-white transition-colors duration-200 hover:bg-white hover:text-black lg:mb-0"
            >
              Read Documentation
            </Link>

            <Link
              href="https://github.com/vercel/next.js/tree/canary/examples/blog-starter"
              target="_blank"
              className="font-bold hover:underline lg:ml-6"
            >
              View on GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
