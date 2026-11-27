// export default function Home(){

//     return(

//         <div>
//             <h1>Home</h1>
//         </div>

//     )

// }


import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

import ProductCard from "../../components/productCard"

import {
    MdOutlineVerified,
    MdDeliveryDining,
    MdSupportAgent,
    MdOutlinePayments,
    MdArrowForward,
    MdOutlineEventAvailable
} from "react-icons/md"

import {
    FaHeadphones,
    FaStar,
    FaMusic
} from "react-icons/fa"

export default function Home() {

    const [items, setItems] = useState([])
    const [reviews, setReviews] = useState([])

    useEffect(() => {

        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products`)
            .then((res) => {
                setItems(res.data.slice(0, 4))
            })
            .catch((err) => {
                console.log(err)
            })

        // Connect this section to your reviews API when available.

    }, [])


    const features = [
        {
            icon: <MdOutlineVerified />,
            title: "Quality Equipment",
            description: "Well-maintained and reliable audio equipment for your events."
        },
        {
            icon: <MdDeliveryDining />,
            title: "Easy Rentals",
            description: "A simple and convenient equipment rental experience."
        },
        {
            icon: <MdSupportAgent />,
            title: "Customer Support",
            description: "Friendly support to help you choose the right equipment."
        },
        {
            icon: <MdOutlinePayments />,
            title: "Affordable Prices",
            description: "Flexible rental options at reasonable prices."
        }
    ]


    const steps = [
        {
            number: "01",
            title: "Explore Equipment",
            description: "Browse our collection and find the equipment you need."
        },
        {
            number: "02",
            title: "Select Your Dates",
            description: "Choose your preferred rental dates and equipment."
        },
        {
            number: "03",
            title: "Confirm Booking",
            description: "Complete your booking and get ready for your event."
        }
    ]


    return (

        <div className="w-full bg-[#E8F9FF]">

            {/* HERO BANNER */}

            <section className="relative min-h-[550px] flex items-center overflow-hidden bg-[#367485]">

                <div className="absolute inset-0">

                    <img
                        src="https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2000"
                        alt="Live music event"
                        className="w-full h-full object-cover opacity-30"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-[#183D48]/95 via-[#367485]/75 to-transparent"></div>

                </div>


                <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">

                    <div className="max-w-2xl">

                        <div className="inline-flex items-center gap-2 bg-white/15 text-white px-5 py-2 rounded-full mb-6 backdrop-blur-sm">

                            <FaMusic />

                            <span className="text-sm font-medium">
                                Professional Audio Equipment Rentals
                            </span>

                        </div>


                        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">

                            Make Every Event
                            <span className="text-[#BDEEFF]"> Sound Amazing!</span>

                        </h1>


                        <p className="text-white/85 text-lg md:text-xl leading-relaxed mb-9">

                            Find the perfect audio equipment for your events.
                            Explore our collection and enjoy a simple,
                            affordable rental experience.

                        </p>


                        <div className="flex flex-wrap gap-4">

                            <Link
                                to="/items"
                                className="bg-white text-[#367485] px-8 py-4 rounded-xl font-bold hover:bg-[#E8F9FF] transition flex items-center gap-2"
                            >
                                Explore Equipment
                                <MdArrowForward className="text-xl" />
                            </Link>


                            <Link
                                to="/contact"
                                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#367485] transition"
                            >
                                Contact Us
                            </Link>

                        </div>

                    </div>

                </div>

            </section>



            {/* WHY CHOOSE US */}

            <section className="max-w-7xl mx-auto px-6 py-20">

                <div className="text-center mb-14">

                    <p className="text-[#367485] font-semibold uppercase tracking-widest text-sm mb-3">
                        Why Choose KV?
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Everything You Need for Great Sound
                    </h2>

                    <p className="text-gray-500 max-w-2xl mx-auto">
                        We make renting audio equipment simple, convenient
                        and reliable for every occasion.
                    </p>

                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {features.map((feature, index) => (

                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
                        >

                            <div className="text-5xl text-[#367485] mb-5 flex justify-center">
                                {feature.icon}
                            </div>

                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                {feature.title}
                            </h3>

                            <p className="text-gray-500 leading-relaxed">
                                {feature.description}
                            </p>

                        </div>

                    ))}

                </div>

            </section>



            {/* FEATURED ITEMS */}

            <section className="bg-white py-20 px-6">

                <div className="max-w-7xl mx-auto">

                    <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-12">

                        <div>

                            <p className="text-[#367485] font-semibold uppercase tracking-widest text-sm mb-3">
                                Our Collection
                            </p>

                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                                Featured Equipment
                            </h2>

                            <p className="text-gray-500 mt-3">
                                Explore some of our popular rental equipment.
                            </p>

                        </div>


                        <Link
                            to="/items"
                            className="bg-[#367485] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#285967] transition flex items-center gap-2"
                        >
                            View All Items
                            <MdArrowForward className="text-xl" />
                        </Link>

                    </div>


                    {items.length > 0 ? (

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

                            {items.map((item) => (
                                <ProductCard
                                    key={item.key}
                                    item={item}
                                />
                            ))}

                        </div>

                    ) : (

                        <div className="text-center py-16 text-gray-500">
                            <FaHeadphones className="text-5xl mx-auto mb-4 text-[#367485]" />
                            <p>Equipment will be displayed here soon.</p>
                        </div>

                    )}

                </div>

            </section>



            {/* HOW IT WORKS */}

            <section className="max-w-7xl mx-auto px-6 py-20">

                <div className="text-center mb-14">

                    <p className="text-[#367485] font-semibold uppercase tracking-widest text-sm mb-3">
                        Simple Process
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        How It Works
                    </h2>

                    <p className="text-gray-500 mt-4">
                        Rent your favourite equipment in three easy steps.
                    </p>

                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {steps.map((step, index) => (

                        <div
                            key={index}
                            className="bg-white rounded-2xl p-9 shadow-sm text-center relative"
                        >

                            <div className="text-5xl font-bold text-[#367485]/20 mb-5">
                                {step.number}
                            </div>

                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                {step.title}
                            </h3>

                            <p className="text-gray-500 leading-relaxed">
                                {step.description}
                            </p>

                        </div>

                    ))}

                </div>

            </section>



            {/* GALLERY */}

            <section className="bg-white py-20 px-6">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-12">

                        <p className="text-[#367485] font-semibold uppercase tracking-widest text-sm mb-3">
                            Our Moments
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                            Explore Our Gallery
                        </h2>

                        <p className="text-gray-500 mt-4">
                            A glimpse of audio equipment and amazing events.
                        </p>

                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

                        {[
                            "photo-1470229722913-7c0e2dbbafd3",
                            "photo-1506157786151-b8491531f063",
                            "photo-1492684223066-81342ee5ff30"
                        ].map((photo, index) => (

                            <div
                                key={index}
                                className="h-64 rounded-2xl overflow-hidden group"
                            >

                                <img
                                    src={`https://images.unsplash.com/${photo}?q=80&w=800`}
                                    alt="KV event gallery"
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                />

                            </div>

                        ))}

                    </div>


                    <div className="text-center mt-10">

                        <Link
                            to="/gallery"
                            className="inline-flex items-center gap-2 text-[#367485] font-bold hover:gap-4 transition-all"
                        >
                            View Full Gallery
                            <MdArrowForward className="text-xl" />
                        </Link>

                    </div>

                </div>

            </section>



            {/* CUSTOMER FEEDBACK */}

            <section className="max-w-7xl mx-auto px-6 py-20">

                <div className="text-center mb-12">

                    <p className="text-[#367485] font-semibold uppercase tracking-widest text-sm mb-3">
                        Testimonials
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        What Our Customers Say
                    </h2>

                    <p className="text-gray-500 mt-4">
                        Customer satisfaction is important to us.
                    </p>

                </div>


                {reviews.length > 0 ? (

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-7">

                        {reviews.slice(0, 3).map((review, index) => (

                            <div
                                key={review._id || index}
                                className="bg-white p-8 rounded-2xl shadow-sm"
                            >

                                <div className="flex gap-1 text-yellow-400 mb-5">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                </div>

                                <p className="text-gray-600 mb-6">
                                    {review.comment}
                                </p>

                                <h3 className="font-bold text-gray-800">
                                    {review.name}
                                </h3>

                            </div>

                        ))}

                    </div>

                ) : (

                    <div className="bg-white rounded-2xl p-10 text-center shadow-sm">

                        <FaStar className="text-4xl text-yellow-400 mx-auto mb-4" />

                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                            Your Feedback Matters!
                        </h3>

                        <p className="text-gray-500 mb-6">
                            Have you rented equipment from us?
                            Share your experience with us.
                        </p>

                        <Link
                            to="/feedback"
                            className="inline-block bg-[#367485] text-white px-7 py-3 rounded-xl font-semibold hover:bg-[#285967] transition"
                        >
                            Share Your Feedback
                        </Link>

                    </div>

                )}

            </section>



            {/* CONTACT BANNER */}

            <section className="px-6 pb-20">

                <div className="max-w-7xl mx-auto bg-[#367485] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">

                    <MdOutlineEventAvailable className="text-6xl text-white/30 mx-auto mb-5" />

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                        Planning Your Next Event?
                    </h2>

                    <p className="text-white/80 max-w-2xl mx-auto mb-9">
                        Let us help you find the perfect audio equipment.
                        Get in touch with our team and make your event unforgettable.
                    </p>


                    <div className="flex flex-wrap justify-center gap-4">

                        <Link
                            to="/items"
                            className="bg-white text-[#367485] px-8 py-4 rounded-xl font-bold hover:bg-[#E8F9FF] transition"
                        >
                            Rent Equipment
                        </Link>

                        <Link
                            to="/contact"
                            className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#367485] transition"
                        >
                            Contact Us
                        </Link>

                    </div>

                </div>

            </section>

        </div>

    )
}
