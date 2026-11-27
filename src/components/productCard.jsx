// import { Link } from "react-router-dom"

// export default function ProductCard(props) {

//     const item = props.item

//     return (

//         <div className="bg-white rounded-2xl shadow-md hover:shadow-xl 
//                         transition-all duration-300 overflow-hidden 
//                         border border-gray-100 w-full mx-5 max-w-sm">

//             {/* Product Image */}
//             <div className="relative h-56 bg-gray-100">

//                 <img
//                     src={item.image[0]}
//                     alt={item.name}
//                     className="w-full h-full object-cover"
//                 />

//                 {/* Availability Badge */}
//                 <span className={`absolute top-3 right-3 px-3 py-1 
//                     rounded-full text-xs font-semibold
//                     ${item.availability
//                         ? "bg-green-100 text-green-700"
//                         : "bg-red-100 text-red-700"
//                     }`}>

//                     {item.availability ? "Available" : "Unavailable"}

//                 </span>

//             </div>


//             {/* Product Details */}
//             <div className="p-5">

//                 {/* Category and Product ID */}
//                 <div className="flex justify-between items-center mb-2">

//                     <span className="text-xs font-semibold text-blue-600 
//                                      bg-blue-50 px-3 py-1 rounded-full">
//                         {item.category}
//                     </span>

//                     <span className="text-xs text-gray-400">
//                         {item.key}
//                     </span>

//                 </div>


//                 {/* Product Name */}
//                 <h2 className="text-xl font-bold text-gray-800 mb-2">
//                     {item.name}
//                 </h2>


//                 {/* Description */}
//                 <p className="text-sm text-gray-500 leading-relaxed 
//                               line-clamp-3 mb-4">
//                     {item.description}
//                 </p>


//                 {/* Dimensions */}
//                 <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">

//                     <span className="font-medium">Dimensions:</span>

//                     <span>{item.dimensions}</span>

//                 </div>


//                 {/* Price */}
//                 <div className="border-t border-gray-100 pt-4 
//                                 flex justify-between items-center">

//                     <div>
//                         <p className="text-xs text-gray-400">
//                             Rental Price
//                         </p>

//                         <h3 className="text-2xl font-bold text-blue-600">
//                             LKR {item.price.toLocaleString()}
//                         </h3>
//                     </div>


//                     {/* Rent Button */}
//                     <Link to={"/items/"+item.key}
//                         disabled={!item.availability}
//                         className={`px-5 py-2.5 rounded-xl font-semibold 
//                             text-sm transition-all duration-300
//                             ${item.availability
//                                 ? "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105"
//                                 : "bg-gray-300 text-gray-500 cursor-not-allowed"
//                             }`}
//                     >
//                         {item.availability ? "Rent Now" : "Unavailable"}
//                     </Link>

//                 </div>

//             </div>

//         </div>

//     )
// }



import { Link } from "react-router-dom"

import {
    MdOutlineStraighten,
    MdArrowOutward,
    MdOutlineInventory2
} from "react-icons/md"

import { FaTag } from "react-icons/fa"

export default function ProductCard(props) {

    const item = props.item

    return (

        <div className="group bg-[#FBFBFB] rounded-2xl overflow-hidden
                        shadow-md hover:shadow-2xl transition-all duration-300
                        border border-[#E8F9FF] w-full max-w-sm
                        hover:-translate-y-2">

            {/* Product Image */}
            <div className="relative h-60 bg-[#E8F9FF] overflow-hidden">

                <img
                    src={item.image?.[0] || "/placeholder.png"}
                    alt={item.name}
                    className="w-full h-full object-cover
                               group-hover:scale-110 transition-transform
                               duration-500"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t
                                from-black/30 to-transparent">
                </div>

                {/* Availability Badge */}
                <span className={`absolute top-4 right-4 px-4 py-1.5
                    rounded-full text-xs font-bold shadow-md
                    ${item.availability
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}>

                    <span className={`inline-block w-2 h-2 rounded-full mr-2
                        ${item.availability ? "bg-green-500" : "bg-red-500"}`}>
                    </span>

                    {item.availability ? "Available" : "Unavailable"}

                </span>

                {/* Product Key */}
                <span className="absolute bottom-4 left-4 text-white
                                 text-xs font-semibold bg-black/40
                                 backdrop-blur-md px-3 py-1.5 rounded-lg">

                    ID: {item.key}

                </span>

            </div>


            {/* Product Details */}
            <div className="p-6">

                {/* Category */}
                <div className="flex items-center gap-2 mb-3">

                    <FaTag className="text-[#367485] text-sm" />

                    <span className="text-xs font-bold uppercase
                                     tracking-wider text-[#367485]">

                        {item.category || "Uncategorized"}

                    </span>

                </div>


                {/* Product Name */}
                <h2 className="text-xl font-bold text-gray-800 mb-3
                               group-hover:text-[#367485] transition-colors
                               line-clamp-1">

                    {item.name}

                </h2>


                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed
                              line-clamp-3 min-h-[63px] mb-5">

                    {item.description}

                </p>


                {/* Dimensions */}
                <div className="flex items-center gap-2 text-sm
                                text-gray-600 bg-[#E8F9FF]/70
                                rounded-xl px-3 py-3 mb-5">

                    <MdOutlineStraighten className="text-[#367485] text-xl" />

                    <span className="font-semibold text-gray-700">
                        Dimensions:
                    </span>

                    <span className="text-gray-500">
                        {item.dimensions || "Not specified"}
                    </span>

                </div>


                {/* Price and Button */}
                <div className="border-t border-gray-100 pt-5
                                flex justify-between items-center gap-3">

                    {/* Price */}
                    <div>

                        <p className="text-xs text-gray-400 font-medium mb-1">
                            Rental Price
                        </p>

                        <h3 className="text-2xl font-extrabold text-[#367485]">

                            LKR {Number(item.price).toLocaleString("en-LK")}

                        </h3>

                    </div>


                    {/* Rent Button */}
                    <Link
                        to={item.availability ? `/items/${item.key}` : "#"}
                        onClick={(e) => {
                            if (!item.availability) e.preventDefault()
                        }}
                        aria-disabled={!item.availability}
                        className={`flex items-center gap-2 px-4 py-3
                            rounded-xl font-bold text-sm transition-all
                            duration-300 whitespace-nowrap
                            ${item.availability
                                ? "bg-[#367485] text-white hover:bg-[#285968] hover:shadow-lg hover:scale-105"
                                : "bg-gray-200 text-gray-400 cursor-not-allowed"
                            }`}
                    >

                        {item.availability ? "Rent Now" : "Unavailable"}

                        {item.availability && (
                            <MdArrowOutward className="text-lg" />
                        )}

                    </Link>

                </div>

            </div>

        </div>

    )
}
