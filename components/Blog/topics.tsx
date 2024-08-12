import Image from "next/image";
const Topics = () => {
    return (
        <div className="mt-[150px] px-[50px]">
            <div className="flex justify-center items-center gap-[13px]">
                <p className="font-[700] text-[14px] tracking-[-0.42px]">Explore Topics</p>
                <p className="p-[10px] border-[1px] border-[#000] rounded-[50px] font-[700] text-[14px] tracking-[-0.42px] cursor-pointer">Programming</p>
                <p className="p-[10px] border-[1px] border-[#000] rounded-[50px] font-[700] text-[14px] tracking-[-0.42px] cursor-pointer">Photography</p>
                <p className="p-[10px] border-[1px] border-[#000] rounded-[50px] font-[700] text-[14px] tracking-[-0.42px] cursor-pointer">Dev-Ops</p>
                <p className="p-[10px] border-[1px] border-[#000] rounded-[50px] font-[700] text-[14px] tracking-[-0.42px] cursor-pointer">UI/UX Design</p>
                <p className="p-[10px] border-[1px] border-[#000] rounded-[50px] font-[700] text-[14px] tracking-[-0.42px] cursor-pointer">Academics</p>
            </div>

            <div className="flex justify-between items-start gap-[24px] mt-[100px]">
                <div className="flex flex-col items-start self-stretch gap-[15px]">
                    <Image 
                        src='/blogassets/unlock.png'
                        width={746}
                        height={477}
                        quality={100}
                        alt=""
                    />
                    <div className="flex flex-col items-start self-stretch gap-[10px]">
                        <p className="p-[10px] border-[1px] border-[#000] rounded-[50px] font-[700] text-[14px] tracking-[-0.42px] cursor-pointer">UI/UX Design</p>
                        <p className="text-[25px] font-[700] tracking-[-0.75px]">Unlocking Creativity: The Key to Better UI Designs</p>

                        <div className="flex gap-[5px]">
                            <Image
                                src='/aboutassets/15.png'
                                width={45} 
                                height={45}
                                quality={100}
                                alt=""
                                
                                className="rounded-[28px]"/>
                            <div className="flex flex-col items-start">
                                <p className="font-[700] tracking-[-0.42px]">Daniel Adeleke</p>
                                <p className="font-[500] text-[14px] tracking-[-0.42px]">Oct 24 2023 • 4 min read</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-between items-center self-stretch">
                    <div className="flex gap-[24px] items-center">
                        <Image 
                            src='/blogassets/maximize.png'
                            width={194}
                            height={142}
                            quality={100}
                            alt=""
                        />
                        <div className="flex flex-col gap-[35px] justify-center items-start self-stretch">
                            <p className="text-[25px] font-[700] tracking-[-0.75px] leading-[27px]">Maximizing your productivity for academic excellence</p>
                            <p className="text-[18px] font-[400] tracking-[-0.54px]">John Okafor</p>
                        </div>
                    </div>
                    <div className="flex gap-[24px] items-center">
                        <Image 
                            src='/blogassets/how.png'
                            width={194}
                            height={142}
                            quality={100}
                            alt=""
                        />
                        <div className="flex flex-col gap-[35px] justify-center items-start self-stretch">
                            <p className="text-[25px] font-[700] tracking-[-0.75px] leading-[27px]">How to be a force to reckon with at hackathons</p>
                            <p className="text-[18px] font-[400] tracking-[-0.54px]">Matthew Johnson</p>
                        </div>
                    </div>
                    <div className="flex gap-[24px] items-center">
                        <Image 
                            src='/blogassets/will.png'
                            width={194}
                            height={142}
                            quality={100}
                            alt=""
                        />
                        <div className="flex flex-col gap-[35px] justify-center items-start self-stretch">
                            <p className="text-[25px] font-[700] tracking-[-0.75px] leading-[27px]">Will my department be the end of me?</p>
                            <p className="text-[18px] font-[400] tracking-[-0.54px]">Nathaniel Chukwuka</p>
                        </div>
                    </div>
                    <div className="flex gap-[24px] items-center">
                        <Image 
                            src='/blogassets/surviving.png'
                            width={194}
                            height={142}
                            quality={100}
                            alt=""
                        />
                        <div className="flex flex-col gap-[35px] justify-center items-start self-stretch">
                            <p className="text-[25px] font-[700] tracking-[-0.75px] leading-[27px]">Surviving MTU</p>
                            <p className="text-[18px] font-[400] tracking-[-0.54px]">Jessica Adetola</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Topics;