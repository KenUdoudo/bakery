'use client'
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from 'react';
const Navbar = () =>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="absolute top-[10px] px-[10px] w-full z-20 font-pop">
            <div className='bg-white px-[20px] md:px-[40px] py-[7px] rounded-xl flex flex-row justify-between items-center'>
             <div className='flex flex-row items-center gap-[5px] lg:gap-[10px] cursor-pointer'>
                <Image
                    src="./blacklogo.svg"
                    width={50}
                    height={50}
                    alt="logo"
                />
                <p className='text-[#1b6535] text-[16px] lg:text-[24px] font-bold'>NACOS MTU</p>
             </div>

             <button onClick={toggleMenu} className='block md:hidden z-30'><HiOutlineMenu className="h-[25px] w-[25px]"/></button>

             <div className={`fixed top-0 right-0 h-full bg-[#e9e9e9] w-[75%] transform ${isOpen ? '-translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out overflow-hidden`}>
                <div className='flex flex-col items-start gap-y-[20px] px-[20px] py-[20px]'>
                    <Link href="/" className='hover:text-[#e9e9e9] cursor-pointer transition-all duration-500 text-[20px] font-semibold'>Home</Link>
                    <Link href="/about" className='hover:text-[#e9e9e9] cursor-pointer transition-all duration-500 text-[20px] font-semibold'>About</Link>
                    <Link href="/events" className='hover:text-[#e9e9e9] cursor-pointer transition-all duration-500 text-[20px] font-semibold'>Events</Link>
                    <p className='hover:text-[#e9e9e9] cursor-pointer transition-all duration-500 text-[20px] font-semibold'>Library</p>
                    <p className='hover:text-[#e9e9e9] cursor-pointer transition-all duration-500 text-[20px] font-semibold'>QHub</p>
                    <div>
                        <p className='hover:text-[#e9e9e9] cursor-pointer transition-all duration-500 text-[20px] font-semibold'>Resources</p>

                    </div>
                    <Link href="/alumini" className='hover:text-[#e9e9e9] cursor-pointer transition-all duration-500 text-[20px] font-semibold'>Alumini</Link>
                    <p className='bg-[#1b6535] text-white py-[10px] px-[20px] cursor-pointer hover:bg-[#30854e] rounded-lg transition-all duration-500'>Contact Us</p>
                </div>
             </div>

             <div className='hidden md:flex flex-row justify-center items-center gap-x-[10px] lg:gap-x-[30px] xl:gap-x-[40px]'>
                <Link href="/" className='hover:text-[#e9e9e9] text-[13px] lg:text-[16px] cursor-pointer transition-all duration-500'>Home</Link>
                <Link href="/about" className='hover:text-[#e9e9e9] text-[13px] lg:text-[16px] cursor-pointer transition-all duration-500'>About</Link>
                <Link href="/events" className='hover:text-[#e9e9e9] text-[13px] lg:text-[16px] cursor-pointer transition-all duration-500'>Events</Link>
                <p className='hover:text-[#e9e9e9] text-[13px] lg:text-[16px] cursor-pointer transition-all duration-500'>Library</p>
                <p className='hover:text-[#e9e9e9] text-[13px] lg:text-[16px] cursor-pointer transition-all duration-500'>QHub</p>
                <div>
                    <p className='hover:text-[#e9e9e9] text-[13px] lg:text-[16px] cursor-pointer transition-all duration-500'>Resources</p>

                </div>
                <Link href="/alumini" className='hover:text-[#e9e9e9] text-[13px] lg:text-[16px] cursor-pointer transition-all duration-500'>Alumini</Link>
             </div>

             <p className='hidden md:block bg-[#1b6535] text-white py-[10px] px-[20px] cursor-pointer hover:bg-[#30854e] rounded-lg transition-all duration-500'>Contact Us</p>
           </div>
        </div>
    )
}

export default Navbar;