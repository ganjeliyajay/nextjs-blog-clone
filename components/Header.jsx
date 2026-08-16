import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-[#FAFBFB] text-center shadow-sm  text-[14px] p-2">
      <p>
        The source code for this blog is{" "}
        <Link
          className=" cursor-pointer  hover:text-blue-900 hover:underline"
          href="https://github.com/vercel/next.js/tree/canary/examples/blog-starter"
        >
          {" "}
          available on GitHub.
        </Link>
      </p>
    </div>
  );
};

export default Header;
