import { useEffect, useState } from "react"
import { formatDate, loadCart } from "../../utils/cart"
import BookingItem from "../../components/bookingItem"
import axios from "axios"
import toast from "react-hot-toast"

export default function BookingPage() {

    const [cart, setCart] = useState(loadCart())

    const today = formatDate(new Date())
    const tomorrow = formatDate(new Date(Date.now() + 24 * 60 * 60 * 1000))

    const [startDate, setStartDate] = useState(today)
    const [endDate, setEndDate] = useState(tomorrow)

    const [total, setTotal] = useState(0)

    function reloadCart() {
        setCart(loadCart())
        calculateTotal()
    }

    function calculateTotal(){
        const cartInfo = loadCart()
        cartInfo.startDate = startDate
        cartInfo.endDate = endDate
        cartInfo.days = totalDays
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/orders/quotation`,
            cartInfo
        ).then((res)=>{
            console.log(res.data)
            setTotal(res.data.total)
        }).catch((err)=>{
            console.error(err)
        })
    }

    useEffect(()=>{
        calculateTotal()
    },[startDate, endDate])

    // Calculate booking days
    function calculateDays() {
        if (!startDate || !endDate) {
            return 0
        }

        const start = new Date(startDate + "T00:00:00")
        const end = new Date(endDate + "T00:00:00")

        const difference = end - start

        return Math.floor(difference / (1000 * 60 * 60 * 24)) + 1
    }

    const totalDays = calculateDays()

    // handle Booking Creation
    function handleBookingCreation(){
        const cart = loadCart()
        cart.startDate = startDate
        cart.endDate = endDate
        cart.days = totalDays

        const token = localStorage.getItem("token")
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/orders`, cart, {
            headers : {
                Authorization: `Bearer ${token}`
            }
        }).then((res)=>{
            console.log(res.data)
            localStorage.removeItem("cart")
            toast.success("Booking created")
            setCart(loadCart())
        }).catch((err)=>{
            console.error(err)
            toast.error("Failed to create booking")
        })
    }

    return (
    <div>

        <div className="w-full h-[50px] items-center justify-center px-[600px] pt-3">
            <h1 className="text-3xl font-bold">
                Create Booking
            </h1>

        </div>

        <div className="w-full h-[vh-50px] flex">
            
            <div className="w-[60%]">
                <div className="w-full min-h-screen flex flex-col items-center p-6">
                    

                    {/* Booking Items */}
                    <div className="flex flex-col items-center w-full">
                        {
                            cart.orderedItems.map((item) => {
                                return (
                                    <BookingItem
                                        key={item.key}
                                        itemKey={item.key}
                                        qty={item.qty}
                                        refresh={reloadCart}
                                    />
                                )
                            })
                        }
                    </div>

                </div>
            </div>


            <div className="w-[40%]">

                <div className="w-full min-h-screen flex flex-col items-center p-6">

                    {/* Booking Date Selection */}
                    <div className="w-full max-w-md mt-8 p-6 bg-white shadow-md rounded-xl">

                        <h2 className="text-xl font-semibold mb-5">
                            Booking Duration
                        </h2>

                        {/* Starting Date */}
                        <div className="flex flex-col mb-4">
                            <label className="font-medium mb-2">
                                Starting Date
                            </label>

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
                                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Ending Date */}
                        <div className="flex flex-col mb-5">
                            <label className="font-medium mb-2">
                                Ending Date
                            </label>

                            <input
                                type="date"
                                value={endDate}
                                min={startDate || today}
                                onChange={(e) => setEndDate(e.target.value)}
                                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Total Booking Days */}
                        <div className=" rounded-lg p-4 flex justify-between items-center">

                            <span className="font-medium text-gray-700">
                                Total Booking Days
                            </span>

                            <span className="text-lg font-normal text-gray-700">
                                {totalDays} {totalDays === 1 ? "Day" : "Days"}
                            </span>

                        </div>

                        {/* Total Amount */}
                        <div className="bg-blue-50 rounded-lg p-4 flex justify-between items-center">

                            <span className="font-medium text-xl text-gray-700">
                                Total 
                            </span>

                            <span className="text-2xl font-bold text-accent">
                                {total.toFixed(2)}
                            </span>

                        </div>

                    </div>
                    
                    <div className="w-full flex justify-center mt-4">
                        <button className="bg-accent text-white px-40 py-3 rounded-md" onClick={handleBookingCreation}>
                                Create Booking
                        </button>
                    </div>

                </div>

            </div>

        </div>   

    </div>
    )
}