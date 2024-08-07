
import Image from 'next/image';
const Sec1home = () => {
    return (  
        <div>
            <div className='relative'>
            <Image src="/homeassets/mainbg.svg" width={1440} height={1024} alt="logo"  className='object-cover'/>
            <div className='absolute top-[30%] md:top-[35%] z-10 flex flex-col items-start gap-y-[10px] px-[20px] md:px-[50px]'>
                <p className='text-[30px] md:text-[45px] text-white font-extrabold'>POWERED BY <br />COMPUTER SCIENCE</p>
                <p className='text-[20px] md:text-[30px] text-white'>Empowered to Excel</p>
                <p className='bg-[#1b6535] text-white text-[13px] md:text-[16px] py-[10px] px-[30px] cursor-pointer hover:bg-[#30854e] rounded-xl transition-all duration-500'>Learn About</p>
            </div>
            <div className='flex flex-row items-center gap-[15px] absolute bottom-[10px] left-[20px] md:left-[50px]'>
                <div className='flex flex-row items-center gap-[5px] md:gap-[10px]'>
                    <Image src="/homeassets/NNL2.png" width={68} height={68} alt="logo"/>
                    <span className='w-[3px] h-[35px] md:h-[50px] bg-white'></span>
                    <Image src="/homeassets/schoollogo.png" width={68} height={68} alt="logo"/>
                </div>
                <p className='text-white text-[10px] md:text-[14px] leading-[0.9]'>IN ASSOCIATION WITH <br />THE NIGERIAN ASSOCIATION OF COMPUTING STUDENTS <br />AND MOUNTAIN TOP UNIVERSITY</p>
            </div>
            </div>

        </div>
    );
}
 
export default Sec1home;