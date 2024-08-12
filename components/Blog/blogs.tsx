import { BsArrowUpRightCircleFill } from "react-icons/bs";
const Blogs = () => {
    return (
        <div className="mt-[64px] px-[50px]">
            <div className="flex items-center justify-between">
                <p className="font-[700] text-[35px]">Recent Blogs</p>
                <div className="flex justify-center items-center border-[1px] bg-[#1B6535] border-[#FFF] rounded-[50px] py-[10px] pr-[12px] pl-[24px] gap-[12px] cursor-pointer">
                    <p className="font-[700] text-[14px] text-[#fff]">View All</p>
                    <BsArrowUpRightCircleFill className="w-[32px] h-[32px] bg-white rounded-full"/>
                </div>
            </div>
        </div>
    );
}
 
export default Blogs;