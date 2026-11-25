
import { useEffect, useState } from "react"
import { addToCart, removeFromCart } from "../utils/cart"
import axios from "axios"
import toast from "react-hot-toast"
import { FaArrowDown, FaArrowUp, FaArrowUp19 } from "react-icons/fa6"

export default function BookingItem({ itemKey, qty, refresh }) {

    const [item, setItem] = useState(null)
    const [status, setStatus] = useState("loading")

    useEffect(() => {

        let isMounted = true

        axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/api/products/${itemKey}`
        )
        .then((res) => {
            if (isMounted) {
                setItem(res.data)
                setStatus("success")
            }
        })
        .catch((err) => {
            console.error(err)

            if (isMounted) {
                setStatus("error")
                removeFromCart(itemKey)
                refresh()
            }
        })

        return () => {
            isMounted = false
        }

    }, [itemKey])

    function handleRemove() {
        removeFromCart(itemKey)
        toast.success("Item removed from cart")
        refresh()
    }

    // Loading UI
    if (status === "loading") {
        return (
            <div className="w-full flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 animate-pulse">

                <div className="w-24 h-24 bg-gray-200 rounded-lg"></div>

                <div className="flex-1 space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                </div>

            </div>
        )
    }

    if (status === "error" || !item) {
        return null
    }

    const subtotal = item.price * qty

    return (
        <div className="w-full bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300">

            <div className="flex flex-col sm:flex-row gap-4">

                {/* Product Image */}
                <div className="w-full sm:w-32 h-40 sm:h-32 bg-secondary rounded-xl flex items-center justify-center overflow-hidden shrink-0">

                    <img
                        src={item.image?.[0]}
                        alt={item.name}
                        className="w-full h-full object-contain p-2"
                    />

                </div>

                {/* Product Information */}
                <div className="flex-1 flex flex-col justify-between min-w-0">

                    <div>

                        <div className="flex justify-between items-start gap-3">

                            <div>
                                <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                                    {item.category}
                                </span>

                                <h3 className="text-lg font-bold text-gray-800 mt-1">
                                    {item.name}
                                </h3>

                                <p className="text-xs text-gray-400 mt-1">
                                    Product ID: {item.key}
                                </p>
                            </div>

                            {/* Remove Button */}
                            <button
                                onClick={handleRemove}
                                className="text-gray-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-lg transition"
                                title="Remove item"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.8}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 7h12m-10 0V5h8v2m-9 0 1 13h6l1-13M10 11v5m4-5v5"
                                    />
                                </svg>
                            </button>

                        </div>

                        

                    </div>

                    {/* Pricing Information */}
                    <div className="flex flex-wrap justify-between items-end gap-3 mt-4">

                        <div className="flex items-center gap-2">

                            <div className="gap-0 flex items-center">
                                <button className="hover:text-accent" onClick={
                                    ()=>{
                                        addToCart(itemKey, 1)
                                        refresh()
                                    }
                                }>
                                    <FaArrowUp/>
                                </button>
                                <div className="bg-secondary text-accent px-0 py-1.5 rounded-lg text-sm font-semibold">
                                Qty: {qty}
                                </div>
                                <button className="hover:text-accent" onClick={
                                    ()=>{
                                            if(qty ==1){
                                                removeFromCart(itemKey)
                                                refresh()
                                            }else{
                                                addToCart(itemKey, -1)
                                                refresh()
                                            }
                                        
                                    }
                                }>
                                    <FaArrowDown/>
                                </button>
                            </div>
                            

                            <span className="text-xs text-gray-400">
                                LKR {item.price.toLocaleString()} / item
                            </span>

                        </div>

                        <div className="text-right">

                            <p className="text-xs text-gray-400 mb-1">
                                Subtotal
                            </p>

                            <p className="text-xl font-bold text-accent">
                                LKR {subtotal.toLocaleString()}
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}