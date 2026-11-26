// import { useState } from "react";
// import { FaCartShopping } from "react-icons/fa6";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { Link } from "react-router-dom";
// import MobileNavPanel from "./mobileNavPanel";


// export default function Header(){

//     const [navPanelOpen, setNavPanelOpen] = useState(false)

//     return(

//         <header className="w-full h-[100px] shadow-xl flex justify-center items-center relative bg-accent text-white px-10">

//             <img src="/kv-logo.png" alt="logo" className="w-[100px] h-[100px] object-cover absolute left-1 border-[3px] rounded-full"/>
//             <Link to="/" className="hidden md:block text-[25px] font-bold m-2">
//                 Home
//             </Link>
//             <Link to="/contact" className="hidden md:block text-[25px] font-bold m-2">
//                 Contact
//             </Link>
//             <Link to="/gallery" className="hidden md:block text-[25px] font-bold m-2">
//                 Gallery
//             </Link>
//             <Link to="/items" className="hidden md:block text-[25px] font-bold m-2">
//                 Items
//             </Link>
//             <Link to="/booking" className="hidden md:block text-[25px] font-bold m-2 absolute right-3">
//                 <FaCartShopping/>
//             </Link>

//             <GiHamburgerMenu className="md:hidden absolute right-6 text-[24px]" onClick={
//                 ()=>{
//                     setNavPanelOpen(true)
//                 }
//             }/>
//             <MobileNavPanel isOpen = {navPanelOpen} setOpen = {setNavPanelOpen}/>

//         </header>

//     )

// }


import { useState } from "react"
import { FaCartShopping } from "react-icons/fa6"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoClose } from "react-icons/io5"
import { Link, useLocation } from "react-router-dom"
import MobileNavPanel from "./mobileNavPanel"

export default function Header() {

    const [navPanelOpen, setNavPanelOpen] = useState(false)

    const location = useLocation()

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
        { name: "Gallery", path: "/gallery" },
        { name: "Items", path: "/items" }
    ]

    return (

        <header className="sticky top-0 z-50 w-full bg-accent text-white shadow-lg">

            <div className="mx-auto flex h-[100px] max-w-[1500px] items-center justify-between px-4 sm:px-8 lg:px-12">

                {/* Logo and Brand */}

                <Link to="/" className="flex shrink-0 items-center gap-3">

                    <div className="h-[55px] w-[55px] overflow-hidden rounded-full border-2 border-white bg-white shadow-md">

                        <img
                            src="/kv-logo.png"
                            alt="KV Audio Logo"
                            className="h-full w-full object-cover"
                        />

                    </div>

                    <div className="hidden sm:block">

                        <h1 className="text-xl font-extrabold tracking-wide">
                            KV AUDIO
                        </h1>

                        <p className="text-[9px] font-semibold tracking-[3px] text-white/70">
                            EQUIPMENT RENTALS
                        </p>

                    </div>

                </Link>


                {/* Desktop Navigation */}

                <nav className="hidden items-center gap-2 md:flex lg:gap-5">

                    {navItems.map((item) => {

                        const isActive = location.pathname === item.path

                        return (

                            <Link
                                key={item.path}
                                to={item.path}
                                className={`relative rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300 lg:text-base ${
                                    isActive
                                        ? "bg-white/20 text-white"
                                        : "text-white/80 hover:bg-white/10 hover:text-white"
                                }`}
                            >

                                {item.name}

                                <span className={`absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-white transition-transform duration-300 ${
                                    isActive
                                        ? "scale-x-100"
                                        : "scale-x-0"
                                }`} />

                            </Link>

                        )

                    })}

                </nav>


                {/* Right Side */}

                <div className="flex items-center gap-3">

                    {/* Booking / Cart */}

                    <Link
                        to="/booking"
                        className={`relative flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 hover:bg-white/20 ${
                            location.pathname === "/booking"
                                ? "bg-white/20"
                                : ""
                        }`}
                        title="My Cart"
                    >

                        <FaCartShopping className="text-xl" />

                    </Link>


                    {/* Mobile Menu Button */}

                    <button
                        onClick={() => setNavPanelOpen(true)}
                        className="flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 hover:bg-white/20 md:hidden"
                        aria-label="Open navigation menu"
                    >

                        <GiHamburgerMenu className="text-2xl" />

                    </button>

                </div>

            </div>


            {/* Mobile Navigation */}

            <MobileNavPanel
                isOpen={navPanelOpen}
                setOpen={setNavPanelOpen}
            />

        </header>

    )

}
