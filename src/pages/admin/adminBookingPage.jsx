

import axios from "axios"
import { useEffect, useState } from "react"
import { IoMdCloseCircleOutline } from "react-icons/io"

export default function AdminBookingPage() {

    const [bookings, setBookings] = useState([])
    const [loading, setLoading] = useState(true)
    const [activeOrder, setActiveOrder] = useState(null)
    const [modalOpened, setModelOpened] = useState(false)

    useEffect(() => {

    if(loading){

        const token = localStorage.getItem("token")

        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/orders/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            console.log(res.data)
            setBookings(res.data)
            setLoading(false)
        }).catch((err) => {
            console.error("Error: ", err.response?.data || err.message)
            setLoading(false)
        })
    }
        

    }, [loading])

    function handleOrderStatusChange(orderId,status){
        const token = localStorage.getItem("token")
        

        axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/orders/status/${orderId}`, 
            {
                status : status
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        ).then(() => {
            setModelOpened(false)
            setLoading(true)
        }).catch((err) => {
            console.error("Error: ", err.response?.data || err.message)
            // setLoading(false)
        })
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6">

            <h1 className="text-3xl font-bold text-gray-800 mb-6">
                Booking Management
            </h1>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">

                <div className="overflow-x-auto">

                    <table className="w-full text-sm text-left">

                        <thead className="bg-gray-100 text-gray-700 uppercase text-xs">

                            <tr>
                                <th className="px-6 py-4">Order ID</th>
                                <th className="px-6 py-4">Customer Email</th>
                                <th className="px-6 py-4">Order Date</th>
                                <th className="px-6 py-4">Starting Date</th>
                                <th className="px-6 py-4">Ending Date</th>
                                <th className="px-6 py-4">Days</th>
                                <th className="px-6 py-4">Total Amount</th>
                                <th className="px-6 py-4">Status</th>
                            </tr>

                        </thead>

                        <tbody className="divide-y divide-gray-200">

                            {loading ? (

                                <tr>
                                    <td colSpan="8" className="text-center py-8 text-gray-500">
                                        Loading bookings...
                                    </td>
                                </tr>

                            ) : bookings.length === 0 ? (

                                <tr>
                                    <td colSpan="8" className="text-center py-8 text-gray-500">
                                        No bookings found.
                                    </td>
                                </tr>

                            ) : (

                                bookings.map((booking) => (

                                    <tr key={booking.orderId} className="hover:bg-gray-50 cursor-pointer" onClick={()=>{
                                        setActiveOrder(booking)
                                        setModelOpened(true)
                                    }}>

                                        <td className="px-6 py-4 font-semibold text-gray-800">
                                            {booking.orderId}
                                        </td>

                                        <td className="px-6 py-4 text-gray-600">
                                            {booking.email}
                                        </td>

                                        <td className="px-6 py-4 text-gray-600">
                                            {new Date(booking.orderDate).toLocaleDateString()}
                                        </td>

                                        <td className="px-6 py-4 text-gray-600">
                                            {new Date(booking.startingDate).toLocaleDateString()}
                                        </td>

                                        <td className="px-6 py-4 text-gray-600">
                                            {new Date(booking.endingDate).toLocaleDateString()}
                                        </td>

                                        <td className="px-6 py-4 text-gray-600">
                                            {booking.days}
                                        </td>

                                        <td className="px-6 py-4 font-semibold text-gray-800">
                                            LKR {booking.totalAmount.toLocaleString()}
                                        </td>

                                        <td className="px-6 py-4">

                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                booking.status ==="Approved"
                                                    ? "bg-green-100 text-green-700"
                                                    : booking.status === "Rejected"
                                                    ?"bg-red-100 text-red-700"
                                                    :"bg-yellow-100 text-yellow-700"
                                            }`}>
                                                {booking.status || "Pending"}
                                            </span>

                                        </td>

                                    </tr>

                                ))

                            )}

                        </tbody>
                        

                    </table>
                    

                </div>

                {
                    modalOpened && (
                        <div className="fixed top-0 left-0 w-full h-full bg-[#00000075] flex justify-center items-center">
                            <div className="w-[500px] bg-white p-4 rounded-lg shadow-lg relative">
                                <IoMdCloseCircleOutline className="absolute top-2 right-2 text-3xl cursor-pointer" onClick={() => setModelOpened(false)}/>
                                <h1 className="text-2xl font-semibold mb-4">Booking Details</h1>
                                <div className="flex flex-col gap-2">
                                    <p><span className="font-semibold">Order ID : </span>{activeOrder.orderId}</p>
                                    <p><span className="font-semibold">Email : </span>{activeOrder.email}</p>
                                    <p><span className="font-semibold">Days : </span>{activeOrder.days}</p>
                                    <p><span className="font-semibold">Starting Date : </span>{new Date(activeOrder.startingDate).toLocaleDateString()}</p>
                                    <p><span className="font-semibold">Ending Date : </span>{new Date(activeOrder.endingDate).toLocaleDateString()}</p>
                                    <p><span className="font-semibold">Total Amount : </span>{activeOrder.totalAmount}</p>
                                    <p><span className="font-semibold">Approval Status : </span>{activeOrder.status}</p>
                                    <p><span className="font-semibold">Order Date : </span>{new Date(activeOrder.orderDate).toLocaleDateString()}</p>
                                    
                                </div>

                                {/* Approve or declined button */}
                                <div className="w-full flex justify-start items-center my-3 gap-1">
                                    <button className="flex bg-green-500 text-white px-4 py-2 rounded-md" onClick={()=>{
                                        handleOrderStatusChange(activeOrder.orderId, "Approved")
                                    }}>
                                        Approve
                                    </button>
                                    <button className="flex bg-red-500 text-white px-4 py-2 rounded-md"  onClick={()=>{
                                        handleOrderStatusChange(activeOrder.orderId, "Rejected")
                                    }}>
                                        Reject
                                    </button>
                                </div>

                                {/* Ordered Products */}
                                <div className="mt-6">

                                    <h2 className="text-lg font-semibold mb-3">
                                        Ordered Products
                                    </h2>

                                    <div className="flex flex-col gap-3">

                                        {activeOrder.orderedItems.map((item, index) => (

                                            <div
                                                key={item.Product.key || index}
                                                className="flex items-center gap-4 bg-gray-50 p-3 rounded-lg border"
                                            >

                                                <img
                                                    src={item.Product.image}
                                                    alt={item.Product.name}
                                                    className="w-20 h-20 object-cover rounded-lg"
                                                />

                                                <div className="flex flex-col gap-1">

                                                    <p className="font-semibold text-gray-800">
                                                        {item.Product.name}
                                                    </p>

                                                    <p className="text-sm text-gray-600">
                                                        Quantity: {item.quantity}
                                                    </p>

                                                    <p className="text-sm text-gray-600">
                                                        Price: LKR {item.Product.price.toLocaleString()}
                                                    </p>

                                                    <p className="text-sm font-semibold text-green-700">
                                                        Subtotal: LKR {(item.Product.price * item.quantity).toLocaleString()}
                                                    </p>

                                                </div>

                                        </div>

                                        ))}

                                </div>

                            </div>
                                
                            </div>
                            
                        </div>

                )
                }
                

            </div>

        </div>
    )
}
