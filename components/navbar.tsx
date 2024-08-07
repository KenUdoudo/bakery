import { FiSearch } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { TfiShoppingCart } from "react-icons/tfi";
import { TbMinusVertical } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
    return ( 
        <div className='w-full flex flex-row justify-between items-center px-[50px] pt-[20px]'>
            <h2 className="text-[34px] font-semibold">Bakery</h2>
            <div className="flex flex-row gap-[30px]">
                <a>manufacturing</a>
                <a>packaging</a>
                <a>farms</a>
                <a>delivery</a>
            </div>
            <div className="flex flex-row gap-[30px]">
                <FiSearch className="w-[20px] h-[20px]" />
                <GoPerson className="w-[20px] h-[20px]" />
                <TfiShoppingCart className="w-[20px] h-[20px]" />
                <p>$225.00</p>
                <TbMinusVertical className="w-[20px] h-[20px]" />
                <RxHamburgerMenu className="w-[20px] h-[20px]" />
            </div>
        </div>
    );
}
 
export default Navbar;