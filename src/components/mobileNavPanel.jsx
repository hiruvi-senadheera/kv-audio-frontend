// import { CiHome } from "react-icons/ci"
// import { IoMdClose } from "react-icons/io"
// import { useNavigate } from "react-router-dom"

// export default function MobileNavPanel(props){

//     const isOpen = props.isOpen
//     const setOpen = props.setOpen
//     const navigate = useNavigate()

//     function goTo(route){
//         navigate(route)
//         setOpen(false)
//     }

//     return(
//         <>
//             {isOpen&&<div className="w-full h-screen bg-[#00000070] fixed top-0 left-0">
//                 <div className="h-full bg-white w-[300px]">
//                     <div className="bg-accent w-full h-[70px] flex justify-center items-center relative">
//                         <img src="/kv-logo.png" alt="logo" className="w-[50px] h-[50px] object-cover absolute left-1 border-[3px] rounded-full"/>
//                         <IoMdClose className="absolute right-3 text-3xl cursor-pointer" onClick={
//                             ()=>{setOpen(false)}
//                         }/>
//                     </div>

//                     <div onClick={()=>{goTo("/")}} className="text-[20px] text-accent m-1 cursor-pointer">
//                         <CiHome/>Home
//                     </div>
                    
                        
//                 </div>
//             </div>}
//         </>
//     )
// }


import { useNavigate, useLocation } from "react-router-dom"

import { IoMdClose } from "react-icons/io"
import {
    CiHome,
    CiPhone,
    CiImageOn,
    CiShoppingTag,
    CiCalendar
} from "react-icons/ci"

import { FaArrowRight } from "react-icons/fa"

export default function MobileNavPanel(props) {

    const isOpen = props.isOpen
    const setOpen = props.setOpen

    const navigate = useNavigate()
    const location = useLocation()

    const navItems = [
        {
            name: "Home",
            path: "/",
            icon: <CiHome />
        },
        {
            name: "Contact",
            path: "/contact",
            icon: <CiPhone />
        },
        {
            name: "Gallery",
            path: "/gallery",
            icon: <CiImageOn />
        },
        {
            name: "Items",
            path: "/items",
            icon: <CiShoppingTag />
        },
        {
            name: "Booking",
            path: "/booking",
            icon: <CiCalendar />
        }
    ]

    function goTo(route) {
        navigate(route)
        setOpen(false)
    }

    return (

        <div
            className={`fixed inset-0 z-[100] transition-all duration-300 ${
                isOpen
                    ? "visible bg-black/50"
                    : "invisible bg-black/0"
            }`}
            onClick={() => setOpen(false)}
        >

            {/* Navigation Drawer */}

            <div
                onClick={(e) => e.stopPropagation()}
                className={`fixed left-0 top-0 flex h-full w-[300px] max-w-[85%] flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
                    isOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                }`}
            >

                {/* Header */}

                <div className="relative flex h-[85px] shrink-0 items-center justify-between bg-accent px-5">

                    <div className="flex items-center gap-3">

                        <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-[3px] border-white bg-white shadow-md">

                            <img
                                src="/kv-logo.png"
                                alt="KV Logo"
                                className="h-full w-full object-cover"
                            />

                        </div>

                        <div>

                            <h2 className="text-xl font-extrabold tracking-wide text-white">
                                KV AUDIO
                            </h2>

                            <p className="text-[10px] font-medium tracking-[2px] text-white/80">
                                EQUIPMENT RENTALS
                            </p>

                        </div>

                    </div>

                    <button
                        onClick={() => setOpen(false)}
                        className="rounded-full p-2 text-white transition hover:bg-white/20"
                    >
                        <IoMdClose className="text-3xl" />
                    </button>

                </div>


                {/* Navigation */}

                <div className="flex-1 overflow-y-auto px-4 py-7">

                    <p className="mb-5 ml-3 text-xs font-bold uppercase tracking-[2px] text-gray-400">
                        Main Menu
                    </p>

                    <nav className="flex flex-col gap-2">

                        {navItems.map((item, index) => {

                            const isActive = location.pathname === item.path

                            return (

                                <button
                                    key={index}
                                    onClick={() => goTo(item.path)}
                                    className={`group flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left transition-all duration-200 ${
                                        isActive
                                            ? "bg-accent text-white shadow-md"
                                            : "text-gray-600 hover:bg-accent/10 hover:text-accent"
                                    }`}
                                >

                                    <div className="flex items-center gap-4">

                                        <span className="text-2xl">
                                            {item.icon}
                                        </span>

                                        <span className="text-[15px] font-semibold">
                                            {item.name}
                                        </span>

                                    </div>

                                    <FaArrowRight
                                        className={`text-xs transition-transform duration-200 ${
                                            isActive
                                                ? "text-white"
                                                : "text-gray-300 group-hover:translate-x-1 group-hover:text-accent"
                                        }`}
                                    />

                                </button>

                            )

                        })}

                    </nav>


                    {/* Contact Card */}

                    <div className="mt-10 rounded-2xl bg-gray-50 p-5">

                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-xl text-accent">

                            <CiPhone />

                        </div>

                        <h3 className="font-bold text-gray-800">
                            Need Assistance?
                        </h3>

                        <p className="mt-2 text-xs leading-5 text-gray-500">
                            Looking for quality audio equipment for your next event? Contact us for more information.
                        </p>

                        <button
                            onClick={() => goTo("/contact")}
                            className="mt-4 flex items-center gap-2 text-sm font-bold text-accent"
                        >
                            Contact Us
                            <FaArrowRight className="text-xs" />
                        </button>

                    </div>

                </div>


                {/* Footer */}

                <div className="shrink-0 border-t border-gray-100 px-5 py-5">

                    <p className="text-center text-xs font-medium text-gray-400">
                        © {new Date().getFullYear()} KV Audio Rentals
                    </p>

                    <p className="mt-1 text-center text-[10px] text-gray-300">
                        Quality Sound. Memorable Moments.
                    </p>

                </div>

            </div>

        </div>

    )

}





