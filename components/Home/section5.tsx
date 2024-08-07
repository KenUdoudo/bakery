import { HiOutlineSpeakerphone } from "react-icons/hi";
const Sec5home = () => {
    return (  
        <div className="px-[20px] md:px-[50px] mt-[100px]">
            <div className="flex flex-row justify-start items-start w-full">
                <div className='flex flex-row items-center gap-[10px]'>
                    <div className='h-[50px] w-[50px] bg-[#d7fec8] rounded-full shadow-xl flex justify-center items-center'><HiOutlineSpeakerphone className='text-[#1b6535] w-[25px] h-[25px]'/></div>
                    <div>
                        <p className='text-[28px] font-bold'>Announcements</p>
                        <p className='text-[18px]'>Be the first to know</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-y-[20px] px-[30px] py-[40px] w-full">
                <div className="flex flex-row justify-between items-center px-[10px] md:px-[30px] py-[20px] rounded-xl w-full bg-white cursor-pointer shadow-xl">
                    <div className="flex flex-row items-center gap-x-[10px]">
                        <div className="w-[10px] h-[10px] bg-red-700 rounded-full flex-shrink-0"></div>
                        <p className="leading-[1] text-[13px] md:text-[16px] md:w-[60%]">We're up and running! Tell your friends to visit <span className="cursor-pointer text-[#1b6535] hover:text-[#30854e]">www.mtu.edu.ng/mtunacos</span> to use our site. You can also follow us on all our socials</p>
                    </div>
                    <p className="text-[13px] md:text-[20px] leading-[1] text-right">30th January <br /><span className="font-bold">2024</span></p>
                </div>

                <div className="flex flex-row justify-between items-center px-[10px] md:px-[30px] py-[20px] rounded-xl w-full bg-white cursor-pointer shadow-xl">
                    <div className="flex flex-row items-center gap-x-[10px]">
                        <div className="w-[10px] h-[10px] bg-red-700 rounded-full flex-shrink-0"></div>
                        <p className="leading-[1] text-[13px] md:text-[16px] md:w-[60%]">We're up and running! Tell your friends to visit <span className="cursor-pointer text-[#1b6535] hover:text-[#30854e]">www.mtu.edu.ng/mtunacos</span> to use our site. You can also follow us on all our socials</p>
                    </div>
                    <p className="text-[13px] md:text-[20px] leading-[1] text-right">30th January <br /><span className="font-bold">2024</span></p>
                </div>
            </div>

        </div>
    );
}
 
export default Sec5home;