// import { useEffect, useState } from "react"
// import { formatDate, loadCart } from "../../utils/cart"
// import BookingItem from "../../components/bookingItem"
// import axios from "axios"
// import toast from "react-hot-toast"

// export default function BookingPage() {

//     const [cart, setCart] = useState(loadCart())

//     const today = formatDate(new Date())
//     const tomorrow = formatDate(new Date(Date.now() + 24 * 60 * 60 * 1000))

//     const [startDate, setStartDate] = useState(today)
//     const [endDate, setEndDate] = useState(tomorrow)

//     const [total, setTotal] = useState(0)

//     function reloadCart() {
//         setCart(loadCart())
//         calculateTotal()
//     }

//     function calculateTotal(){
//         const cartInfo = loadCart()
//         cartInfo.startDate = startDate
//         cartInfo.endDate = endDate
//         cartInfo.days = totalDays
//         axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/orders/quotation`,
//             cartInfo
//         ).then((res)=>{
//             console.log(res.data)
//             setTotal(res.data.total)
//         }).catch((err)=>{
//             console.error(err)
//         })
//     }

//     useEffect(()=>{
//         calculateTotal()
//     },[startDate, endDate])

//     // Calculate booking days
//     function calculateDays() {
//         if (!startDate || !endDate) {
//             return 0
//         }

//         const start = new Date(startDate + "T00:00:00")
//         const end = new Date(endDate + "T00:00:00")

//         const difference = end - start

//         return Math.floor(difference / (1000 * 60 * 60 * 24)) + 1
//     }

//     const totalDays = calculateDays()

//     // handle Booking Creation
//     function handleBookingCreation(){
//         const cart = loadCart()
//         cart.startDate = startDate
//         cart.endDate = endDate
//         cart.days = totalDays

//         const token = localStorage.getItem("token")
//         axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/orders`, cart, {
//             headers : {
//                 Authorization: `Bearer ${token}`
//             }
//         }).then((res)=>{
//             console.log(res.data)
//             localStorage.removeItem("cart")
//             toast.success("Booking created")
//             setCart(loadCart())
//         }).catch((err)=>{
//             console.error(err)
//             toast.error("Failed to create booking")
//         })
//     }

//     return (
//     <div>

//         <div className="w-full h-[50px] items-center justify-center px-[600px] pt-3">
//             <h1 className="text-3xl font-bold">
//                 Create Booking
//             </h1>

//         </div>

//         <div className="w-full h-[vh-50px] flex">
            
//             <div className="w-[60%]">
//                 <div className="w-full min-h-screen flex flex-col items-center p-6">
                    

//                     {/* Booking Items */}
//                     <div className="flex flex-col items-center w-full">
//                         {
//                             cart.orderedItems.map((item) => {
//                                 return (
//                                     <BookingItem
//                                         key={item.key}
//                                         itemKey={item.key}
//                                         qty={item.qty}
//                                         refresh={reloadCart}
//                                     />
//                                 )
//                             })
//                         }
//                     </div>

//                 </div>
//             </div>


//             <div className="w-[40%]">

//                 <div className="w-full min-h-screen flex flex-col items-center p-6">

//                     {/* Booking Date Selection */}
//                     <div className="w-full max-w-md mt-8 p-6 bg-white shadow-md rounded-xl">

//                         <h2 className="text-xl font-semibold mb-5">
//                             Booking Duration
//                         </h2>

//                         {/* Starting Date */}
//                         <div className="flex flex-col mb-4">
//                             <label className="font-medium mb-2">
//                                 Starting Date
//                             </label>

//                             <input
//                                 type="date"
//                                 value={startDate}
//                                 min={today}
//                                 onChange={(e) => {
//                                     setStartDate(e.target.value)

//                                     if (endDate < e.target.value) {
//                                         setEndDate(e.target.value)
//                                     }
//                                 }}
//                                 className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                         </div>

//                         {/* Ending Date */}
//                         <div className="flex flex-col mb-5">
//                             <label className="font-medium mb-2">
//                                 Ending Date
//                             </label>

//                             <input
//                                 type="date"
//                                 value={endDate}
//                                 min={startDate || today}
//                                 onChange={(e) => setEndDate(e.target.value)}
//                                 className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                         </div>

//                         {/* Total Booking Days */}
//                         <div className=" rounded-lg p-4 flex justify-between items-center">

//                             <span className="font-medium text-gray-700">
//                                 Total Booking Days
//                             </span>

//                             <span className="text-lg font-normal text-gray-700">
//                                 {totalDays} {totalDays === 1 ? "Day" : "Days"}
//                             </span>

//                         </div>

//                         {/* Total Amount */}
//                         <div className="bg-blue-50 rounded-lg p-4 flex justify-between items-center">

//                             <span className="font-medium text-xl text-gray-700">
//                                 Total 
//                             </span>

//                             <span className="text-2xl font-bold text-accent">
//                                 {total.toFixed(2)}
//                             </span>

//                         </div>

//                     </div>
                    
//                     <div className="w-full flex justify-center mt-4">
//                         <button className="bg-accent text-white px-40 py-3 rounded-md" onClick={handleBookingCreation}>
//                                 Create Booking
//                         </button>
//                     </div>

//                 </div>

//             </div>

//         </div>   

//     </div>
//     )
// }


import { useEffect, useState } from "react"
import { formatDate, loadCart } from "../../utils/cart"
import BookingItem from "../../components/bookingItem"
import axios from "axios"
import toast from "react-hot-toast"

import {
    MdOutlineShoppingCart,
    MdCalendarMonth,
    MdEventAvailable,
    MdPayments,
    MdArrowForward
} from "react-icons/md"

export default function BookingPage() {

    const [cart, setCart] = useState(loadCart())

    const today = formatDate(new Date())
    const tomorrow = formatDate(
        new Date(Date.now() + 24 * 60 * 60 * 1000)
    )

    const [startDate, setStartDate] = useState(today)
    const [endDate, setEndDate] = useState(tomorrow)

    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(false)

    // Calculate Booking Days
    function calculateDays() {

        if (!startDate || !endDate) {
            return 0
        }

        const start = new Date(startDate + "T00:00:00")
        const end = new Date(endDate + "T00:00:00")

        const difference = end - start

        return Math.floor(
            difference / (1000 * 60 * 60 * 24)
        ) + 1
    }

    const totalDays = calculateDays()

    // Calculate Total
    function calculateTotal() {

        const cartInfo = loadCart()

        cartInfo.startDate = startDate
        cartInfo.endDate = endDate
        cartInfo.days = totalDays

        if (!cartInfo.orderedItems?.length || totalDays < 1) {
            setTotal(0)
            return
        }

        axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/api/orders/quotation`,
            cartInfo
        ).then((res) => {

            setTotal(res.data.total)

        }).catch((err) => {

            console.error(err)
            toast.error("Failed to calculate quotation")

        })
    }

    useEffect(() => {
        calculateTotal()
    }, [startDate, endDate, cart])

    // Reload Cart
    function reloadCart() {
        setCart(loadCart())
    }

    // Create Booking
    function handleBookingCreation() {

        if (!cart.orderedItems?.length) {
            toast.error("Your cart is empty")
            return
        }

        if (totalDays < 1) {
            toast.error("Please select valid booking dates")
            return
        }

        const cartInfo = loadCart()

        cartInfo.startDate = startDate
        cartInfo.endDate = endDate
        cartInfo.days = totalDays

        const token = localStorage.getItem("token")

        setLoading(true)

        axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/api/orders`,
            cartInfo,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        ).then((res) => {

            console.log(res.data)

            localStorage.removeItem("cart")

            toast.success("Booking created successfully!")

            setCart(loadCart())
            setTotal(0)

        }).catch((err) => {

            console.error(err)

            toast.error(
                err?.response?.data?.error || "Failed to create booking"
            )

        }).finally(() => {
            setLoading(false)
        })
    }

    return (

        <div className="min-h-screen w-full bg-[#E8F9FF] px-4 py-10 sm:px-8 lg:px-16">

            {/* Page Header */}
            <div className="max-w-7xl mx-auto mb-10 text-center">

                <span className="inline-block bg-white text-[#367485] px-5 py-2 rounded-full text-sm font-semibold shadow-sm mb-4">
                    KV RENTAL SERVICE
                </span>

                <h1 className="text-3xl sm:text-4xl font-bold text-[#367485]">
                    Create Your Booking
                </h1>

                <p className="text-gray-500 mt-3">
                    Select your rental duration and review your selected items.
                </p>

                <div className="w-20 h-1 bg-[#367485] rounded-full mx-auto mt-5"></div>

            </div>


            {/* Main Content */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8">


                {/* LEFT SIDE - Booking Items */}
                <div>

                    <div className="bg-[#FBFBFB] rounded-2xl shadow-md p-6">

                        {/* Section Header */}
                        <div className="flex items-center justify-between mb-7">

                            <div className="flex items-center gap-3">

                                <div className="w-11 h-11 bg-[#E8F9FF] rounded-xl flex items-center justify-center">

                                    <MdOutlineShoppingCart className="text-2xl text-[#367485]" />

                                </div>

                                <div>

                                    <h2 className="text-xl font-bold text-[#367485]">
                                        Selected Items
                                    </h2>

                                    <p className="text-sm text-gray-400">
                                        Your rental products
                                    </p>

                                </div>

                            </div>

                            <span className="bg-[#E8F9FF] text-[#367485] px-4 py-2 rounded-full text-sm font-bold">
                                {cart.orderedItems?.length || 0} Items
                            </span>

                        </div>


                        {/* Booking Items */}
                        {
                            cart.orderedItems?.length > 0 ? (

                                <div className="flex flex-col gap-5">

                                    {
                                        cart.orderedItems.map((item) => (

                                            <BookingItem
                                                key={item.key}
                                                itemKey={item.key}
                                                qty={item.qty}
                                                refresh={reloadCart}
                                            />

                                        ))
                                    }

                                </div>

                            ) : (

                                <div className="min-h-[350px] flex flex-col justify-center items-center text-center">

                                    <MdOutlineShoppingCart className="text-7xl text-[#367485]/40 mb-5" />

                                    <h2 className="text-xl font-bold text-[#367485]">
                                        Your Cart is Empty
                                    </h2>

                                    <p className="text-gray-400 mt-2">
                                        Add some rental products to create a booking.
                                    </p>

                                </div>

                            )
                        }

                    </div>

                </div>



                {/* RIGHT SIDE - Booking Summary */}
                <div>

                    <div className="bg-[#FBFBFB] rounded-2xl shadow-md p-6 sticky top-6">

                        {/* Summary Header */}
                        <div className="flex items-center gap-3 mb-7">

                            <div className="w-11 h-11 bg-[#E8F9FF] rounded-xl flex items-center justify-center">

                                <MdCalendarMonth className="text-2xl text-[#367485]" />

                            </div>

                            <div>

                                <h2 className="text-xl font-bold text-[#367485]">
                                    Booking Summary
                                </h2>

                                <p className="text-sm text-gray-400">
                                    Select your rental duration
                                </p>

                            </div>

                        </div>


                        {/* Booking Date Selection */}
                        <div className="space-y-5">

                            {/* Starting Date */}
                            <div>

                                <label className="block text-sm font-semibold text-gray-700 mb-2">

                                    Starting Date

                                </label>

                                <div className="relative">

                                    <MdCalendarMonth className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-[#367485]" />

                                    <input
                                        type="date"
                                        value={startDate}
                                        min={today}
                                        onChange={(e) => {

                                            setStartDate(e.target.value)

                                            if (endDate < e.target.value) {
                                                setEndDate(e.target.value)
                                            }

                                        }}
                                        className="w-full h-12 pl-12 pr-4 border-2 border-[#E8F9FF] rounded-xl outline-none text-gray-700 focus:border-[#367485] transition"
                                    />

                                </div>

                            </div>


                            {/* Ending Date */}
                            <div>

                                <label className="block text-sm font-semibold text-gray-700 mb-2">

                                    Ending Date

                                </label>

                                <div className="relative">

                                    <MdEventAvailable className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-[#367485]" />

                                    <input
                                        type="date"
                                        value={endDate}
                                        min={startDate || today}
                                        onChange={(e) => setEndDate(e.target.value)}
                                        className="w-full h-12 pl-12 pr-4 border-2 border-[#E8F9FF] rounded-xl outline-none text-gray-700 focus:border-[#367485] transition"
                                    />

                                </div>

                            </div>

                        </div>


                        {/* Booking Duration */}
                        <div className="bg-[#E8F9FF] rounded-xl p-5 mt-7">

                            <div className="flex justify-between items-center">

                                <div>

                                    <p className="text-sm text-gray-500">
                                        Total Booking Duration
                                    </p>

                                    <h3 className="text-2xl font-bold text-[#367485] mt-1">
                                        {totalDays} {totalDays === 1 ? "Day" : "Days"}
                                    </h3>

                                </div>

                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">

                                    <MdCalendarMonth className="text-2xl text-[#367485]" />

                                </div>

                            </div>

                        </div>


                        {/* Price Summary */}
                        <div className="border-t border-gray-200 mt-7 pt-6">

                            <div className="flex justify-between items-center mb-4">

                                <span className="text-gray-500 font-medium">
                                    Selected Items
                                </span>

                                <span className="font-semibold text-gray-700">
                                    {cart.orderedItems?.length || 0}
                                </span>

                            </div>

                            <div className="flex justify-between items-center mb-5">

                                <span className="text-gray-500 font-medium">
                                    Rental Duration
                                </span>

                                <span className="font-semibold text-gray-700">
                                    {totalDays} Days
                                </span>

                            </div>


                            {/* Total */}
                            <div className="bg-[#367485] rounded-xl p-5">

                                <div className="flex items-center justify-between">

                                    <div>

                                        <p className="text-white/70 text-sm">
                                            Total Rental Amount
                                        </p>

                                        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">

                                            LKR {Number(total).toLocaleString("en-LK", {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2
                                            })}

                                        </h2>

                                    </div>

                                    <MdPayments className="text-4xl text-white/80" />

                                </div>

                            </div>


                            {/* Create Booking Button */}
                            <button
                                onClick={handleBookingCreation}
                                disabled={
                                    loading ||
                                    !cart.orderedItems?.length ||
                                    totalDays < 1
                                }
                                className="w-full h-14 mt-6 bg-[#367485] text-white font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-[#285968] hover:shadow-lg hover:-translate-y-0.5 transition duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                            >

                                {loading ? "Creating Booking..." : "Create Booking"}

                                {!loading && (
                                    <MdArrowForward className="text-xl" />
                                )}

                            </button>


                            <p className="text-center text-xs text-gray-400 mt-4">
                                Please review your booking details before confirming.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}