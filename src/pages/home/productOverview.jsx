// import axios from "axios"
// import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"
// import ImageSlider from "../../components/imageSlider"
// import { FaAddressCard } from "react-icons/fa6"
// import { addToCart, loadCart } from "../../utils/cart"
// import toast from "react-hot-toast"

// export default function ProductOverview(){

//     const params = useParams()
//     const key = params.key

//     const [loadingStatus, setLoadingStatus] = useState("loading")
//     const [product, setProduct] = useState({})

//     useEffect(()=>{

//             axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/${key}`).then((res)=>{
//                 console.log(res.data)
//                 setProduct(res.data)
//                 setLoadingStatus("loaded")
//             }).catch((err)=>{
//                 console.error(err)
//                 setLoadingStatus("error")
//             })     
//     },[key])

//     return(

//         <div className="w-full h-full pt-[200px] flex flex-col items-center">
//             {
//                 loadingStatus == "loading"&&
//                 <div className="w-full flex justify-center items-center">
//                     <div className="w-[70px] h-[70px] border-4 rounded-full border-b-accent animate-spin"/>
//                 </div>
//             }
//             {
//                 loadingStatus == "loaded"&&
//                 <div className="w-full h-full flex flex-col justify-center items-center">
//                     <h1 className="text-3xl font-bold text-accent">{product.name}</h1>
//                     <h2 className="text-xl font-semibold text-gray-800">{product.category}</h2>
//                     <div className="w-[49%] h-full">
//                         <ImageSlider images = {product.image}/>
//                     </div>
//                     <div className="w-[49%] h-full flex flex-col items-center p-5">
                        
//                         <p className="text-gray-700 mt-4">{product.description}</p>
//                         <p className="text-lg text-green-500 font-bold">{product.price}</p>
//                         <div className="mt-4 text-sm text-gray-600">
//                             <span className="font-medium">Dimensions:</span>
//                             {product.dimensions}
//                         </div>
//                         <button className="mt-4 bg-accent text-white px-4 py-2 rounded-md" onClick={
//                             ()=>{
//                                 addToCart(product.key, 1)
//                                 toast.success("Added to cart")
//                                 console.log(loadCart())
//                             }
//                         }>
//                             Add to Cart
//                         </button>
//                     </div>
                    
//                 </div>

//             }
//             {
//                 loadingStatus === "error" &&
//                 <div className="text-red-500">
//                     Failed to load product.
//                 </div>
//             }
//         </div>

//     )

// }

import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import ImageSlider from "../../components/imageSlider"
import { addToCart } from "../../utils/cart"
import toast from "react-hot-toast"

import {
    FaShoppingCart,
    FaRulerCombined,
    FaTag,
    FaCheckCircle,
    FaTimesCircle
} from "react-icons/fa"

export default function ProductOverview() {

    const params = useParams()
    const key = params.key

    const [loadingStatus, setLoadingStatus] = useState("loading")
    const [product, setProduct] = useState({})

    useEffect(() => {

        setLoadingStatus("loading")

        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/${key}`)
            .then((res) => {
                setProduct(res.data)
                setLoadingStatus("loaded")
            })
            .catch((err) => {
                console.error(err)
                setLoadingStatus("error")
            })

    }, [key])

    const handleAddToCart = () => {

        addToCart(product.key, 1)

        toast.success("Added to cart successfully!")

    }

    return (

        <div className="min-h-screen w-full bg-gray-50 pt-28 pb-16 px-4 sm:px-6 lg:px-12">

            {/* Loading */}

            {loadingStatus === "loading" && (

                <div className="flex min-h-[60vh] items-center justify-center">

                    <div className="h-14 w-14 animate-spin rounded-full border-4 border-gray-200 border-b-accent"></div>

                </div>

            )}

            {/* Error */}

            {loadingStatus === "error" && (

                <div className="flex min-h-[60vh] items-center justify-center">

                    <div className="rounded-xl bg-white p-10 text-center shadow-sm">

                        <h2 className="text-xl font-bold text-gray-800">
                            Product Not Found
                        </h2>

                        <p className="mt-2 text-gray-500">
                            Sorry, we couldn't load this product.
                        </p>

                    </div>

                </div>

            )}

            {/* Product Details */}

            {loadingStatus === "loaded" && (

                <div className="mx-auto max-w-7xl">

                    {/* Breadcrumb */}

                    <div className="mb-8 text-sm text-gray-500">

                        <Link to="/">Home </Link><span className="mx-2">/</span>

                        <Link to="/items">Products </Link><span className="mx-2">/</span>

                        <span className="font-semibold text-accent">
                            {product.name}
                        </span>

                    </div>


                    <div className="grid grid-cols-1 items-start gap-8 rounded-2xl bg-white p-5 shadow-sm sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10">

                        {/* LEFT SIDE - IMAGE */}

                        <div className="w-full min-w-0">

                            <div className="mb-5 flex items-center justify-between">

                                <span className="rounded-full bg-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-accent">
                                    Product Details
                                </span>

                                <span className={`flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold ${
                                    product.availability
                                    ? "bg-green-50 text-green-600"
                                    : "bg-red-50 text-red-500"
                                }`}>

                                    {product.availability
                                        ? <FaCheckCircle />
                                        : <FaTimesCircle />
                                    }

                                    {product.availability
                                        ? "Available"
                                        : "Currently Unavailable"
                                    }

                                </span>

                            </div>

                            <div className="overflow-hidden rounded-2xl bg-gray-50 p-2 sm:p-4">

                                <div className="w-full">

                                    <ImageSlider images={product.image} />

                                </div>

                            </div>

                        </div>


                        {/* RIGHT SIDE - INFORMATION */}

                        <div className="flex w-full flex-col py-2 lg:py-5">

                            {/* Category */}

                            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-accent">

                                <FaTag />

                                <span>{product.category}</span>

                            </div>


                            {/* Product Name */}

                            <h1 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">

                                {product.name}

                            </h1>


                            {/* Description */}

                            <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base">

                                {product.description}

                            </p>


                            {/* Price */}

                            <div className="my-7 rounded-xl border border-gray-100 bg-gray-50 p-5">

                                <p className="text-sm font-medium text-gray-500">
                                    Rental Price
                                </p>

                                <div className="mt-2 flex items-baseline gap-2">

                                    <span className="text-3xl font-extrabold text-accent sm:text-4xl">

                                        LKR {Number(product.price).toLocaleString("en-LK")}

                                    </span>

                                </div>

                            </div>


                            {/* Product Specifications */}

                            <div className="space-y-4">

                                <h3 className="text-lg font-bold text-gray-800">
                                    Product Information
                                </h3>

                                <div className="flex items-center gap-4 rounded-xl border border-gray-100 p-4">

                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-lg text-accent">

                                        <FaRulerCombined />

                                    </div>

                                    <div>

                                        <p className="text-xs font-medium text-gray-400">
                                            Dimensions
                                        </p>

                                        <p className="mt-1 font-semibold text-gray-700">
                                            {product.dimensions || "Not specified"}
                                        </p>

                                    </div>

                                </div>


                                <div className="flex items-center gap-4 rounded-xl border border-gray-100 p-4">

                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-lg text-accent">

                                        <FaTag />

                                    </div>

                                    <div>

                                        <p className="text-xs font-medium text-gray-400">
                                            Category
                                        </p>

                                        <p className="mt-1 font-semibold text-gray-700">
                                            {product.category}
                                        </p>

                                    </div>

                                </div>

                            </div>


                            {/* Add to Cart */}

                            <button

                                disabled={!product.availability}

                                onClick={handleAddToCart}

                                className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-accent px-6 py-4 font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"

                            >

                                <FaShoppingCart className="text-lg" />

                                {product.availability
                                    ? "Add to Cart"
                                    : "Currently Unavailable"
                                }

                            </button>


                            {/* Bottom Note */}

                            <p className="mt-4 text-center text-xs text-gray-400">

                                Quality audio equipment for your special occasions.

                            </p>

                        </div>

                    </div>

                </div>

            )}

        </div>

    )

}


