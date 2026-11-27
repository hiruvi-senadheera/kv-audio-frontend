// export default function Contact(){

//     return(

//         <div>
//             <h1>Contact</h1>
//         </div>

//     )

// }


import { useState } from "react"
import {
    MdEmail,
    MdPhone,
    MdLocationOn,
    MdAccessTime,
    MdSend
} from "react-icons/md"
import { FaHeadphones } from "react-icons/fa"

export default function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        console.log(formData)

        // Connect this form to your backend API to send messages.
    }

    return (
        <div className="min-h-screen bg-[#E8F9FF]">

            {/* Hero Section */}
            <section className="bg-[#367485] text-white py-16 px-6 text-center">

                <div className="max-w-3xl mx-auto">

                    <FaHeadphones className="text-5xl mx-auto mb-5" />

                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Get In Touch
                    </h1>

                    <p className="text-white/80 text-lg">
                        Have questions about our audio equipment or rental services?
                        We'd love to hear from you.
                    </p>

                </div>

            </section>


            {/* Contact Content */}
            <section className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* Contact Information */}
                    <div>

                        <h2 className="text-3xl font-bold text-[#367485] mb-4">
                            Contact Information
                        </h2>

                        <p className="text-gray-600 mb-10 leading-relaxed">
                            Reach out to us for bookings, equipment details,
                            pricing information, or any other inquiries.
                            Our team is happy to help.
                        </p>


                        <div className="space-y-6">

                            <div className="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-sm">

                                <div className="bg-[#E8F9FF] p-4 rounded-xl">
                                    <MdPhone className="text-3xl text-[#367485]" />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-800">
                                        Phone
                                    </h3>

                                    <p className="text-gray-500">
                                        +94 XX XXX XXXX
                                    </p>
                                </div>

                            </div>


                            <div className="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-sm">

                                <div className="bg-[#E8F9FF] p-4 rounded-xl">
                                    <MdEmail className="text-3xl text-[#367485]" />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-800">
                                        Email
                                    </h3>

                                    <p className="text-gray-500">
                                        info@kv.com
                                    </p>
                                </div>

                            </div>


                            <div className="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-sm">

                                <div className="bg-[#E8F9FF] p-4 rounded-xl">
                                    <MdLocationOn className="text-3xl text-[#367485]" />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-800">
                                        Location
                                    </h3>

                                    <p className="text-gray-500">
                                        Sri Lanka
                                    </p>
                                </div>

                            </div>


                            <div className="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-sm">

                                <div className="bg-[#E8F9FF] p-4 rounded-xl">
                                    <MdAccessTime className="text-3xl text-[#367485]" />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-800">
                                        Working Hours
                                    </h3>

                                    <p className="text-gray-500">
                                        Monday - Saturday
                                    </p>

                                    <p className="text-gray-500">
                                        9.00 AM - 6.00 PM
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">

                        <h2 className="text-2xl font-bold text-[#367485] mb-2">
                            Send Us a Message
                        </h2>

                        <p className="text-gray-500 mb-8">
                            Fill out the form below and we'll get back to you.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-5">

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Your Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    required
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#367485] focus:ring-2 focus:ring-[#367485]/10 transition"
                                />
                            </div>


                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#367485] focus:ring-2 focus:ring-[#367485]/10 transition"
                                />
                            </div>


                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Enter message subject"
                                    required
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#367485] focus:ring-2 focus:ring-[#367485]/10 transition"
                                />
                            </div>


                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Message
                                </label>

                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message here..."
                                    rows="5"
                                    required
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#367485] focus:ring-2 focus:ring-[#367485]/10 transition resize-none"
                                />
                            </div>


                            <button
                                type="submit"
                                className="w-full bg-[#367485] hover:bg-[#285967] text-white font-semibold py-4 rounded-xl flex justify-center items-center gap-3 transition duration-300 shadow-md"
                            >
                                Send Message
                                <MdSend className="text-xl" />
                            </button>

                        </form>

                    </div>

                </div>

            </section>


            {/* Bottom Banner */}
            <section className="px-6 pb-16">

                <div className="max-w-7xl mx-auto bg-white rounded-2xl p-10 text-center shadow-sm">

                    <h2 className="text-2xl md:text-3xl font-bold text-[#367485] mb-3">
                        Let's Make Your Event Sound Amazing!
                    </h2>

                    <p className="text-gray-500">
                        Explore our audio equipment collection and find the
                        perfect equipment for your next event.
                    </p>

                </div>

            </section>

        </div>
    )
}
