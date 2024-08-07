import { LiaArrowRightSolid } from "react-icons/lia";
import { FiCalendar } from "react-icons/fi";
const Sec4home = () => {
    return (  
        <div className=" mt-[100px]">
            <div className="flex flex-row justify-between items-center w-full px-[20px] md:px-[50px]">
                <div className='flex flex-row items-center gap-[10px]'>
                    <div className='w-[35px] md:w-[50px] h-[35px] md:h-[50px] bg-[#d7fec8] rounded-full shadow-xl flex justify-center items-center'><FiCalendar className='text-[#1b6535] w-[15px] md:w-[25px] h-[15px] md:h-[25px]'/></div>
                    <div>
                        <p className='text-[25px] md:text-[28px] font-bold'>Events</p>
                        <p className='text-[18px]'>Stay up to date</p>
                    </div>
                </div>
                <div className='w-[35px] md:w-[50px] h-[35px] md:h-[50px] bg-[#1b6535] rounded-full shadow-xl cursor-pointer hover:bg-[#30854e] transition-all duration-500 flex justify-center items-center'><LiaArrowRightSolid className='text-white w-[15px] md:w-[25px] h-[15px] md:h-[25px]'/></div>
            </div>
            <div className="overflow-auto scroll-smooth duration-500">
                <div className="flex flex-row items-center gap-x-[30px] mt-[30px] w-max pl-[50px]">
                    <div className="flex flex-col gap-[30px]">
                        <div className="w-[330px] h-[200px] shadow-2xl rounded-xl bg-white relative">
                            <div className="absolute bottom-[10px] flex flex-row justify-between items-center w-full  px-[10px]">
                                <p className="leading-[0.9]"><span className="text-[22px] font-bold">16th</span><br />January</p>
                                <p className="text-[22px] text-right font-bold leading-[0.9]">Freshers<br />Orientation</p>
                            </div>
                        </div>
                        <div className="w-[330px] h-[300px] shadow-2xl rounded-xl bg-white relative">
                            <div className="absolute bottom-[10px] flex flex-row justify-between items-center w-full  px-[10px]">
                                <p className="leading-[0.9]"><span className="text-[22px] font-bold">3rd</span><br />February</p>
                                <p className="text-[22px] text-right font-bold leading-[0.9]">EXAM WEEK</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[600px] h-[450px] shadow-2xl rounded-xl bg-white relative">
                        <div className="absolute bottom-[10px] flex flex-row justify-between items-center w-full  px-[10px]">
                            <p className="leading-[0.9]"><span className="text-[22px] font-bold">4th - 11th</span><br />June</p>
                            <p className="text-[22px] text-right font-bold leading-[0.9]">NACOS WEEK <br />2024</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[30px]">
                        <div className="w-[500px] h-[300px] shadow-2xl rounded-xl bg-white relative">
                            <div className="absolute bottom-[10px] flex flex-row justify-between items-center w-full  px-[10px]">
                                <p className="leading-[0.9]"><span className="text-[22px] font-bold">17th</span><br />February</p>
                                <p className="text-[22px] text-right font-bold leading-[0.9]">Freshers<br />Orientation</p>
                            </div>
                        </div>
                        <div className="w-[500px] h-[200px] shadow-2xl rounded-xl bg-white relative">
                            <div className="absolute bottom-[10px] flex flex-row justify-between items-center w-full  px-[10px]">
                                <p className="leading-[0.9]"><span className="text-[22px] font-bold">18th</span><br />February</p>
                                <p className="text-[22px] text-right font-bold leading-[0.9]">EXAM WEEK</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    );
}
 
export default Sec4home;