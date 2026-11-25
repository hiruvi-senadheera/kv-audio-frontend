import { useState } from "react"
import { formatDate, loadCart } from "../../utils/cart"
import BookingItem from "../../components/bookingItem"

export default function BookingPage() {

    const [cart, setCart] = useState(loadCart())

    const today = formatDate(new Date())
    const tomorrow = formatDate(new Date(Date.now() + 24 * 60 * 60 * 1000))

    const [startDate, setStartDate] = useState(today)
    const [endDate, setEndDate] = useState(tomorrow)

    function reloadCart() {
        setCart(loadCart())
    }

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
                        <div className="bg-blue-50 rounded-lg p-4 flex justify-between items-center">

                            <span className="font-medium text-gray-700">
                                Total Booking Days
                            </span>

                            <span className="text-2xl font-bold text-accent">
                                {totalDays} {totalDays === 1 ? "Day" : "Days"}
                            </span>

                        </div>

                    </div>
                    
                    <div className="w-full flex justify-center mt-4">
                        <button className="bg-accent text-white px-40 py-3 rounded-md">
                                Create Booking
                        </button>
                    </div>

                </div>

            </div>

        </div>   

    </div>
    )
}