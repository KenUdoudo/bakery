const Sec1About = () => {
    return (  
        <div className="pt-[70px] lg:pt-[120px] px-[20px] lg:px-[50px]">
            <p className="text-center text-[20px] md:text-[25px] font-bold">About NACOS</p>

            <div className="flex flex-col md:flex-row w-full mt-[20px] gap-y-[30px] md:gap-x-[40px]">
                <div className="md:w-[60%]">
                    <p className="text-[18px] font-semibold">History</p>
                    <p className="text-justify"><span className="ml-[20px]">The</span> Nigerian Association of Computing Students (NACOS) is a student professional body with presence in almost all tertiary institutions in Nigeria (both private and government owned). NACOS was founded by groups of students in July 1993 with the backing of Nigerian Computer Society (NCS) as its parent body. It provides avenues for students (in any IT related field) to highlight and champion issues of interest in a coordinated and organized manner. <br /><span className="ml-[20px]">NACOS</span> members (NACOSites) are students studying in tertiary institutions in computer related disciplines including: Computer Science, Computer Engineering, Software Engineering, Cybersecurity, Information Technology, etc. Each member is essentially a member of the Association's local chapter in his or her institution. As at April 2012, NACOS stated that it is the largest and most organized student body in West Africa, with registered members of about Two Hundred and Fifty thousand (250 000) in well over One Hundred and fifty local chapters (and more unregistered) in different Institutions (Universities, Polytechnics and Colleges of Education) across the six (6) Geo-political zones of Nigeria at the time.</p>
                </div>
                <div className="flex flex-col justify-start gap-[10px] md:w-[35%]">
                    <p className="text-[18px] font-semibold">Milestones</p>
                    <div className="p-[30px] bg-white flex flex-row justify-between items-center rounded-lg shadow-md">
                        <p className="font-semibold leading-[0.9]">NACOS <br />National</p>
                        <p className="font-semibold leading-[0.9]">Est. <br />1993</p>
                    </div>
                    <div className="p-[30px] bg-white flex flex-row justify-between items-center rounded-lg shadow-md">
                        <p className="font-semibold leading-[0.9]">NACOS <br />South-West</p>
                        <p className="font-semibold leading-[0.9]">Est. <br />2010</p>
                    </div>
                    <div className="p-[30px] bg-white flex flex-row justify-between items-center rounded-lg shadow-md">
                        <p className="font-semibold leading-[0.9]">NACOS <br />MTU Chapter</p>
                        <p className="font-semibold leading-[0.9]">Est. <br />2021</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Sec1About;