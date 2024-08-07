import logo from './assets/whitelogo.png';
import { HiOutlineSignal } from "react-icons/hi2";
const Sec6home = () => {
    return (  
        <div className="px-[20px] md:px-[50px] mt-[100px] font-pop">
            <div className="flex flex-row justify-start items-start w-full">
                <div className='flex flex-row items-center gap-[10px]'>
                    <div className='h-[50px] w-[50px] bg-[#d7fec8] rounded-full shadow-xl flex justify-center items-center'><HiOutlineSignal className='text-[#1b6535] w-[25px] h-[25px]'/></div>
                    <div>
                        <p className='text-[28px] font-bold'>Adverts</p>
                        <p className='text-[18px]'>Bring Deals, guy!</p>
                    </div>
                </div>
            </div> 

            <div className="w-full bg-black pt-[30px] pb-[20px] pl-[40px] pr-[30px] mt-[30px]">
                <div className='w-full flex flex-row justify-between items-center pr-[20px] md:pr-[50px]'>
                    <p className="text-[13px] text-white"><span className="text-[#e9e9e971]">../csc/nascos/</span>hackathon2024</p>
                    <img src={ logo } className='w-[50px] aspect-w-full md:w-[70px]'/>
                </div>

                <div className="flex flex-col justify-start items-start w-full my-[70px]">
                            <p className='text-[30px] md:text-[45px] text-white font-bold'>Ctrl + Alt + Compete</p>
                            <p className='text-[15px] md:text-[30px] text-white font-light'>Show workings, guy!</p>    
                </div>

                <div className="flex flex-col-reverse justify-end items-end w-full leading-[1]">
                            <p className=' text-white font-extrabold'>Coming Soon</p>
                            <p className='text-[13px] text-white font-light'>An in-house Hackathon Event</p>    
                </div>
            </div>
        </div>
    );
}
 
export default Sec6home;