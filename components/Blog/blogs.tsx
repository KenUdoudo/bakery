import Image from "next/image";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

async function getBlogs() {
  const res = await fetch("http://localhost:4000/item", {
    next: {
      revalidate: 30
    }
  });
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

      <div className="flex flex-wrap items-start justify-center gap-[24px] mt-[60px] shrink-0">
        {blogs.map((blog) => (
          <div key={blog.id} className="flex flex-col items-start gap-[25px] w-[416px]">
            <Image
              src={blog.image}
              alt={blog.title}
              width={416}
              height={350}
            />
            <p className="p-[10px] border-[1px] border-[#000] rounded-[50px] font-[700] text-[14px] tracking-[-0.42px] cursor-pointer">{blog.class}</p>
            <h2 className="text-[25px] font-[700] tracking-[-0.75px]">{blog.title}</h2>
            <p className="font-[300] tracking-[-0.48px]">{blog.description} <span className="underline font-[600] tracking-[-0.48px]">Read More</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};
