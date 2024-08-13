
import { BsArrowUpRightCircleFill } from "react-icons/bs";

async function getBlogs() {
  const res = await fetch("http://localhost:4000/item");
  return res.json();
}

export default async function Blogs() {
  const blogs = await getBlogs()

  return (
    <div className="mt-[64px] px-[50px]">
      <div className="flex items-center justify-between">
        <p className="font-[700] text-[35px]">Recent Blogs</p>
        <div className="flex justify-center items-center border-[1px] bg-[#1B6535] border-[#FFF] rounded-[50px] py-[10px] pr-[12px] pl-[24px] gap-[12px] cursor-pointer">
          <p className="font-[700] text-[14px] text-[#fff]">View All</p>
          <BsArrowUpRightCircleFill className="w-[32px] h-[32px] bg-white rounded-full" />
        </div>
      </div>

      <div className="flex flex-wrap items-start justify-between shrink-0">
        {blogs.map((blog) => (
          <div key={blog.id} className="p-4 border rounded-md mb-4">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-auto mb-2"
            />
            <h2 className="text-xl font-bold">{blog.title}</h2>
            <p>{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
