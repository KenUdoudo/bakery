import one from './assets/1.png'
import two from './assets/2.png'
import three from './assets/3.png'
import four from './assets/4.png'
import five from './assets/5.png'
const Alumini = () => {
    return (
        <div className="h-[500px] relative font-pop">
            <div className="text-center py-[250px]">
            <p className="text-[25px] font-semibold">Alumini is coming soon</p>
            <p>Please check back in some time</p>
            </div>
            <img src={ one } className='absolute top-[80%] md:top-[60%] right-[5%] md:right-[10%]'/>
            <img src={ two } className='absolute top-[15%] md:top-[25%] right-[10%] md:right-[20%]'/>
            <img src={ three } className='absolute top-[40%] md:top-[85%] md:left-[20%]'/>
            <img src={ four } className='absolute bottom-0 md:bottom-[-100px] md:left-[40%]'/>
            <img src={ five } className='absolute top-[10%] md:top-[30%] left-[15%] md:left-[30%]'/>
        </div>
    );
}
 
export default Alumini;