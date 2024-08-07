import Image from "next/image";
const Alumini = () => {
    return (
        <main>
            <div className="h-[500px] relative">
            <div className="text-center py-[250px]">
            <p className="text-[25px] font-semibold">Alumini is coming soon</p>
            <p>Please check back in some time</p>
            </div>
            <Image src="/aluminiassets/1.png" width={237} height={185} alt="" className='absolute top-[80%] md:top-[60%] right-[5%] md:right-[10%]'/>
            <Image src="/aluminiassets/2.png" width={92} height={92} alt="" className='absolute top-[15%] md:top-[25%] right-[10%] md:right-[20%]'/>
            <Image src="/aluminiassets/3.png" width={74} height={74} alt="" className='absolute top-[40%] md:top-[85%] md:left-[20%]'/>
            <Image src="/aluminiassets/4.png" width={115} height={115} alt="" className='absolute bottom-0 md:bottom-[-100px] md:left-[40%]'/>
            <Image src="/aluminiassets/5.png" width={52} height={52} alt="" className='absolute top-[10%] md:top-[30%] left-[15%] md:left-[30%]'/>
        </div>
        </main>
    );
}
 
export default Alumini;