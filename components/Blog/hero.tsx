const Hero = () => {
    return (
        <div className="px-[50px]  pt-[70px] lg:pt-[120px]">
            <div className="flex items-center gap-[12px]">
                <p className="text-[14px] font-normal">Home</p>
                <span className="h-[2px] w-[2px] bg-[#F00]"></span>
                <p className="text-[14px] font-normal">Resources</p>
                <span className="h-[2px] w-[2px] bg-[#F00]"></span>
                <p className="text-[14px] font-normal">Blog</p>
            </div>

            <div className="flex justify-between items-center mt-[30px]">
                <p className="text-[70px] font-[700] leading-[77px] tracking-[-2.1px]">Introducing Blogs: The New Way for Students to Express Themselves</p>
                <div className="flex flex-col gap-[20px]">
                    <p className="text-[25px] font-[400] text-justify tracking-[-0.75px]">Blogs are a neat friendly way for students to share their thoughts with one another and foster good relations while building up their skills in writing. Students are now able to submit entries and have their write-ups published on the site.</p>
                    <p className="text-[25px] font-[500] text-justify tracking-[-0.75px]">Welcome to the world of content writing in Computer Science.</p>
                </div>
            </div>
        </div>
    );
}
 
export default Hero;