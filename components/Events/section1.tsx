const Sec1Event = () => {
    return (  
        <div className="pt-[70px] lg:pt-[90px] px-[20px] md:px-[50px] font-pop">
            <p className="font-semibold">Upcoming Events</p>

            <div className="px-[10px] flex flex-col w-full mt-[20px] gap-[10px]">
                <div className="flex flex-row justify-between items-center w-full">
                    <div className="bg-[#d7fec8] w-[70%] lg:w-[80%] flex flex-row items-center justify-between p-[10px] md:p-[20px] rounded-lg">
                        <p><span className="font-bold">Repair Day,</span><br />for all students</p>
                        <p>LTB, CBAS</p>
                    </div>
                    <div className="bg-[#d7fec8] w-[20%] lg:w-[10%] text-center p-[10px] md:p-[20px] rounded-lg">
                        <p className="font-bold"><span className="text-[13px] font-normal">Apr</span><br />31st</p>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <div className="bg-[#d7fec8] w-[70%] lg:w-[80%] flex flex-row items-center justify-between p-[10px] md:p-[20px] rounded-lg">
                        <p><span className="font-bold">Programming Club,</span><br />All levels</p>
                        <p>LTB, CBAS</p>
                    </div>
                    <div className="bg-[#d7fec8] w-[20%] lg:w-[10%] text-center p-[10px] md:p-[20px] rounded-lg">
                        <p className="font-bold"><span className="text-[13px] font-normal">Apr</span><br />13th</p>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <div className="bg-[#d7fec8] w-[70%] lg:w-[80%] flex flex-row items-center justify-between p-[10px] md:p-[20px] rounded-lg">
                        <p><span className="font-bold">Statistics Tutorial,</span><br />for 100 level</p>
                        <p>LTB, CBAS</p>
                    </div>
                    <div className="bg-[#d7fec8] w-[20%] lg:w-[10%] text-center p-[10px] md:p-[20px] rounded-lg">
                        <p className="font-bold"><span className="text-[13px] font-normal">Apr</span><br />15th</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Sec1Event;