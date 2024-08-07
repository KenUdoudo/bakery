import { useState } from "react";
import one from './assets/1.svg';
import two from './assets/2.svg';
import three from './assets/3.svg';
import four from './assets/4.svg';
import { CgProfile } from "react-icons/cg";
import { LiaArrowRightSolid } from "react-icons/lia";
const Sec3home = () => {
    const [tab, setTab] = useState(0);
    return (  
        <div className="px-[20px] md:px-[50px] mt-[100px] font-pop">
            <div className="flex flex-row justify-between items-center w-full">
                <div className='flex flex-row items-center gap-[10px]'>
                    <div className='w-[35px] md:w-[50px] h-[35px] md:h-[50px] bg-[#d7fec8] rounded-full shadow-xl flex justify-center items-center'><CgProfile className='text-[#1b6535] w-[15px] md:w-[25px] h-[15px] md:h-[25px]'/></div>
                    <div>
                        <p className='text-[25px] md:text-[28px] font-bold'>Executives</p>
                        <p className='text-[18px]'>Meet the Executive Committee</p>
                    </div>
                </div>
                <div className='w-[35px] md:w-[50px] h-[35px] md:h-[50px] bg-[#1b6535] rounded-full shadow-xl cursor-pointer hover:bg-[#30854e] transition-all duration-500 flex justify-center items-center'><LiaArrowRightSolid className='text-white w-[15px] md:w-[25px] h-[15px] md:h-[25px]'/></div>
            </div>

            <div className="flex flex-row w-full h-[200px] md:h-[300px] lg:h-[500px] gap-x-[10px] mt-[50px]">
                <div className={`${tab === 0 ? "w-[60%]" : "w-[30%]"}  transition-all duration-500 relative`} onClick={()=> setTab(0)}>
                    <img src={ one } className={`${tab === 0 ? "" : "filter grayscale"}  object-cover w-full h-full`}/>
                    <div className={`${tab === 0 ? "text-black" : "text-white text-center"} absolute bottom-[5px] md:bottom-[10px] lg:bottom-[20px] left-[5px] md:left-[10px] lg:left-[20px] transition-all duration-500 leading-[1]`}>
                        <p className="text-[13px] md:text-[18px] lg:text-[20px] font-medium">Merit Mohammed</p>
                        <p className="text-[16px] md:text-[25px] lg:text-[30px] font-semibold">President</p>
                    </div>
                </div>
                <div className={`${tab === 1 ? "w-[60%]" : "w-[30%]"}  transition-all duration-500 relative`} onClick={()=> setTab(1)}>
                    <img src={ two } className={`${tab === 1 ? "" : "filter grayscale"}  object-cover w-full h-full`}/>
                    <div className={`${tab === 1 ? "text-black" : "text-white text-center"} absolute bottom-[5px] md:bottom-[10px] lg:bottom-[20px] left-[5px] md:left-[10px] lg:left-[20px] transition-all duration-500 leading-[1]`}>
                        <p className="text-[13px] md:text-[18px] lg:text-[20px] font-medium">Damilola Adesina</p>
                        <p className="text-[16px] md:text-[25px] lg:text-[30px] font-semibold">Vice President</p>
                    </div>
                </div>
                <div className={`${tab === 2 ? "w-[60%]" : "w-[30%]"}  transition-all duration-500 relative`} onClick={()=> setTab(2)}>
                    <img src={ three } className={`${tab === 2 ? "" : "filter grayscale"}  object-cover w-full h-full`}/>
                    <div className={`${tab === 2 ? "text-black" : "text-white text-center"} absolute bottom-[5px] md:bottom-[10px] lg:bottom-[20px] left-[5px] md:left-[10px] lg:left-[20px] transition-all duration-500 leading-[1]`}>
                        <p className="text-[13px] md:text-[18px] lg:text-[20px] font-medium">Oluwayomi Apata</p>
                        <p className="text-[16px] md:text-[25px] lg:text-[30px] font-semibold">Gen. Secretary</p>
                    </div>
                </div>
                <div className={`${tab === 3 ? "w-[60%]" : "w-[30%]"}  transition-all duration-500 relative`} onClick={()=> setTab(3)}>
                    <img src={ four } className={`${tab === 3 ? "" : "filter grayscale"}  object-cover w-full h-full`}/>
                    <div className={`${tab === 3 ? "text-black" : "text-white text-center"} absolute bottom-[5px] md:bottom-[10px] lg:bottom-[20px] left-[5px] md:left-[10px] lg:left-[20px] transition-all duration-500 leading-[1]`}>
                        <p className="text-[13px] md:text-[18px] lg:text-[20px] font-medium">Ikemefuna Daniel</p>
                        <p className="text-[16px] md:text-[25px] lg:text-[30px] font-semibold">Fin. Secretary</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Sec3home;