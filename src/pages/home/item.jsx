// import axios from "axios"
// import { useEffect, useState } from "react"
// import toast from "react-hot-toast"
// import ProductCard from "../../components/productCard"

// export default function Item(){

//     const [state, setState] = useState("loading") //loading, success, error
//     const [items, setItems] = useState([])

//     useEffect(()=>{

//         if(state == "loading"){
//             axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products`).then((res)=>{
//                 console.log(res.data)
//                 setItems(res.data)
//                 setState("success")
//             }).catch((err)=>{
//                 toast.error(err?.response?.data?.error||"An error occured")
//                 setState("error")
//             })
//         }      
//     },[])

//     return(

//         <div className="w-full h-full flex flex-wrap justify-center p-[50px]">

//             {
//                 state == "loading"&&
//                 <div className="w-full h-full flex justify-center items-center">
//                     <div className="w-[50px] h-[50px] border-4 rounded-full border-t-green-500 animate-spin">

//                     </div>

//                 </div>
//             }

//             {
//                 state == "success"&&
//                 items.map((item)=>{
//                     return(
//                         <ProductCard key={item.key} item={item}/>
//                         // <h1 key={item.key}>{item.name}</h1>
//                     )
//                 })
//             }

//         </div>

//     )

// }



import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import ProductCard from "../../components/productCard"

import { MdOutlineInventory2, MdRefresh } from "react-icons/md"

export default function Item() {

    const [state, setState] = useState("loading")
    const [items, setItems] = useState([])

    function fetchItems() {

        setState("loading")

        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products`)
            .then((res) => {
                console.log(res.data)
                setItems(res.data)
                setState("success")
            })
            .catch((err) => {
                toast.error(err?.response?.data?.error || "An error occurred")
                setState("error")
            })
    }

    useEffect(() => {
        fetchItems()
    }, [])

    return (

        <div className="min-h-screen w-full bg-[#E8F9FF] px-5 py-12 sm:px-10 lg:px-16">

            {/* Page Header */}
            <div className="max-w-7xl mx-auto mb-12 text-center">

                <span className="inline-block bg-white text-[#367485] px-5 py-2 rounded-full text-sm font-semibold shadow-sm mb-4">
                    KV COLLECTION
                </span>

                <h1 className="text-4xl sm:text-5xl font-bold text-[#367485] mb-4">
                    Explore Our Products
                </h1>

                <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
                    Discover our collection of quality audio equipment
                    available for your next event or special occasion.
                </p>

                <div className="w-20 h-1 bg-[#367485] rounded-full mx-auto mt-6"></div>

            </div>

            {/* Product Count */}
            {
                state === "success" && items.length > 0 &&
                <div className="max-w-7xl mx-auto mb-8">

                    <p className="text-[#367485] font-semibold">
                        Showing {items.length} products
                    </p>

                </div>
            }

            {/* Loading */}
            {
                state === "loading" &&
                <div className="w-full min-h-[300px] flex flex-col justify-center items-center gap-5">

                    <div className="w-14 h-14 border-4 border-[#B8DFE9] border-t-[#367485] rounded-full animate-spin"></div>

                    <p className="text-[#367485] font-medium animate-pulse">
                        Loading products...
                    </p>

                </div>
            }

            {/* Products */}
            {
                state === "success" && items.length > 0 &&
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">

                    {
                        items.map((item) => (
                            <ProductCard
                                key={item.key}
                                item={item}
                            />
                        )
                        )
                    }

                </div>
            }

            {/* Empty State */}
            {
                state === "success" && items.length === 0 &&
                <div className="min-h-[300px] flex flex-col justify-center items-center text-center">

                    <MdOutlineInventory2 className="text-7xl text-[#367485] mb-4" />

                    <h2 className="text-2xl font-bold text-[#367485] mb-2">
                        No Products Available
                    </h2>

                    <p className="text-gray-500">
                        We couldn't find any products at the moment.
                    </p>

                </div>
            }

            {/* Error State */}
            {
                state === "error" &&
                <div className="min-h-[300px] flex flex-col justify-center items-center text-center">

                    <h2 className="text-2xl font-bold text-[#367485] mb-3">
                        Something Went Wrong!
                    </h2>

                    <p className="text-gray-500 mb-6">
                        Unable to load products. Please try again.
                    </p>

                    <button
                        onClick={fetchItems}
                        className="flex items-center gap-2 bg-[#367485] text-white px-6 py-3 rounded-xl hover:bg-[#285968] transition shadow-md"
                    >
                        <MdRefresh className="text-xl" />
                        Try Again
                    </button>

                </div>
            }

        </div>

    )
}
