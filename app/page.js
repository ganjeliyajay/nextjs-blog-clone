import BlogInfo from "@/components/BlogInfo"
import Footer from "@/components/Footer"
import Header from "@/components/Header"


const page = () => {
  return (
    <div className="min-h-[200vh]">
      {/* blog content */}
      <section className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <BlogInfo />
      </section>
    </div>
  )
}

export default page
