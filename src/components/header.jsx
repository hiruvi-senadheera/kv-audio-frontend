import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Header(){

    return(

        <header className="w-full h-[100px] shadow-xl flex justify-center items-center relative bg-accent text-white px-10">

            <img src="/kv-logo.png" alt="logo" className="w-[100px] h-[100px] object-cover absolute left-1 border-[3px] rounded-full"/>
            <Link to="/" className="text-[25px] font-bold m-2">
                Home
            </Link>
            <Link to="/contact" className="text-[25px] font-bold m-2">
                Contact
            </Link>
            <Link to="/gallery" className="text-[25px] font-bold m-2">
                Gallery
            </Link>
            <Link to="/items" className="text-[25px] font-bold m-2">
                Items
            </Link>
            <Link to="/booking" className="text-[25px] font-bold m-2 absolute right-3">
                <FaCartShopping/>
            </Link>

        </header>

    )

}