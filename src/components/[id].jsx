import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const BlogDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const blogs = useSelector((state) => state.blogs.blogs);

  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="p-5">
      <h1 className="text-4xl font-bold">{blog.title}</h1>
      <p className="mt-3">{blog.description}</p>
      <p className="italic text-sm mt-2">Category: {blog.category}</p>
      <button
        className="bg-blue-500 text-white p-2 rounded mt-4"
        onClick={() => router.back()}
      >
        Back to Home
      </button>
    </div>
  );
};

export default BlogDetails;
