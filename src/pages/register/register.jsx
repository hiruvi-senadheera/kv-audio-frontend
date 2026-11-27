// import axios from "axios"
// import "./register.css"
// import { useState } from "react"
// import toast from "react-hot-toast"
// import { useNavigate } from "react-router-dom"

// export default function RegisterPage(){

//     const [email,setEmail] = useState("")
//     const [password,setPassword] = useState("")
//     const [firstName,setFirstName] = useState("")
//     const [lastName,setLastName] = useState("")
//     const [address,setAddress] = useState("")
//     const [phone,setPhone] = useState("")

//     const navigate = useNavigate()

//     const handleOnSubmit = (e) => {
//         e.preventDefault()

//         console.log({
//             email,
//             password,
//             firstName,
//             lastName,
//             address,
//             phone
//         })

//         axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/`,
//             {
//                 email : email,
//                 firstName : firstName,
//                 lastName : lastName,
//                 password : password,
//                 address : address,
//                 phone : phone
//             }
//         ).then((res)=>{
//             toast.success("Registration success")
//             navigate("/login")
//         }).catch((err)=>{
//             toast.error(err?.response?.data?.error || "An error occured")
//         })
//     }

//     return(

//         // screen
//         <div className="w-full min-h-screen flex justify-center items-center bg-picture py-6">

//             <form onSubmit={handleOnSubmit}>

//                 {/* register screen */}
//                 <div className="w-[400px] min-h-[700px] backdrop-blur-xl rounded-2xl flex flex-col justify-center items-center py-6">

//                     {/* logo */}
//                     <img
//                         src="/kv-logo.png"
//                         alt="logo"
//                         className="w-[150px] h-[150px] object-cover"
//                     />

//                     <h1 className="text-3xl text-white font-bold mb-6">
//                         Register
//                     </h1>

//                     {/* first name */}
//                     <input
//                         type="text"
//                         placeholder="First Name"
//                         className="mb-5 w-[300px] h-[35px] bg-transparent border-b-2 border-white text-white text-lg outline-none placeholder:text-white"
//                         value={firstName}
//                         onChange={(e)=>{
//                             setFirstName(e.target.value)
//                         }}
//                     />

//                     {/* last name */}
//                     <input
//                         type="text"
//                         placeholder="Last Name"
//                         className="mb-5 w-[300px] h-[35px] bg-transparent border-b-2 border-white text-white text-lg outline-none placeholder:text-white"
//                         value={lastName}
//                         onChange={(e)=>{
//                             setLastName(e.target.value)
//                         }}
//                     />

//                     {/* email */}
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         className="mb-5 w-[300px] h-[35px] bg-transparent border-b-2 border-white text-white text-lg outline-none placeholder:text-white"
//                         value={email}
//                         onChange={(e)=>{
//                             setEmail(e.target.value)
//                         }}
//                     />

//                     {/* password */}
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         className="mb-5 w-[300px] h-[35px] bg-transparent border-b-2 border-white text-white text-lg outline-none placeholder:text-white"
//                         value={password}
//                         onChange={(e)=>{
//                             setPassword(e.target.value)
//                         }}
//                     />

//                     {/* address */}
//                     <input
//                         type="text"
//                         placeholder="Address"
//                         className="mb-5 w-[300px] h-[35px] bg-transparent border-b-2 border-white text-white text-lg outline-none placeholder:text-white"
//                         value={address}
//                         onChange={(e)=>{
//                             setAddress(e.target.value)
//                         }}
//                     />

//                     {/* phone */}
//                     <input
//                         type="tel"
//                         placeholder="Phone Number"
//                         className="mb-5 w-[300px] h-[35px] bg-transparent border-b-2 border-white text-white text-lg outline-none placeholder:text-white"
//                         value={phone}
//                         onChange={(e)=>{
//                             setPhone(e.target.value)
//                         }}
//                     />

//                     {/* register button */}
//                     <button
//                         type="submit"
//                         className="mt-5 w-[300px] h-[50px] bg-[#efac38] text-xl text-white rounded-lg"
//                     >
//                         Register
//                     </button>

//                 </div>

//             </form>

//         </div>

//     )

// }



import axios from "axios"
import "./register.css"

import { useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

import {
    MdPerson,
    MdEmail,
    MdLock,
    MdHome,
    MdPhone,
    MdVisibility,
    MdVisibilityOff
} from "react-icons/md"

import { FaArrowRight } from "react-icons/fa"

export default function RegisterPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()

    const handleOnSubmit = (e) => {
        e.preventDefault()

        axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/api/users/`,
            {
                email,
                firstName,
                lastName,
                password,
                address,
                phone
            }
        ).then((res) => {

            toast.success("Registration successful!")
            navigate("/login")

        }).catch((err) => {

            toast.error(
                err?.response?.data?.error || "An error occurred"
            )

        })
    }

    return (

        <div className="min-h-screen w-full flex justify-center items-center bg-secondary px-4 py-8">

            {/* Register Card */}
            <div className="w-full max-w-lg bg-primary rounded-3xl shadow-2xl overflow-hidden">

                {/* Header */}
                <div className="bg-accent px-8 pt-6 pb-8 text-center rounded-b-[50px]">

                    <img
                        src="/kv-logo.png"
                        alt="KV Logo"
                        className="w-28 h-28 object-contain mx-auto mb-2"
                    />

                    <h1 className="text-3xl font-bold text-white">
                        Create Account
                    </h1>

                    <p className="text-white/80 text-sm mt-2">
                        Join KV and get started today
                    </p>

                </div>

                {/* Form */}
                <form
                    onSubmit={handleOnSubmit}
                    className="px-8 py-7"
                >

                    <h2 className="text-2xl font-bold text-accent text-center mb-2">
                        Register
                    </h2>

                    <p className="text-gray-500 text-sm text-center mb-7">
                        Please fill in your details to create an account
                    </p>

                    {/* First Name & Last Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">

                        {/* First Name */}
                        <div>
                            <label className="block text-sm font-semibold text-accent mb-2">
                                First Name
                            </label>

                            <div className="flex items-center gap-2 border-2 border-secondary rounded-xl px-3 h-12 focus-within:border-accent transition">

                                <MdPerson className="text-accent text-xl shrink-0" />

                                <input
                                    type="text"
                                    placeholder="First name"
                                    className="w-full min-w-0 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />

                            </div>
                        </div>

                        {/* Last Name */}
                        <div>
                            <label className="block text-sm font-semibold text-accent mb-2">
                                Last Name
                            </label>

                            <div className="flex items-center gap-2 border-2 border-secondary rounded-xl px-3 h-12 focus-within:border-accent transition">

                                <MdPerson className="text-accent text-xl shrink-0" />

                                <input
                                    type="text"
                                    placeholder="Last name"
                                    className="w-full min-w-0 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />

                            </div>
                        </div>

                    </div>

                    {/* Email */}
                    <div className="mb-5">

                        <label className="block text-sm font-semibold text-accent mb-2">
                            Email Address
                        </label>

                        <div className="flex items-center gap-3 border-2 border-secondary rounded-xl px-4 h-12 focus-within:border-accent transition">

                            <MdEmail className="text-accent text-xl shrink-0" />

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full min-w-0 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                        </div>

                    </div>

                    {/* Password */}
                    <div className="mb-5">

                        <label className="block text-sm font-semibold text-accent mb-2">
                            Password
                        </label>

                        <div className="flex items-center gap-3 border-2 border-secondary rounded-xl px-4 h-12 focus-within:border-accent transition">

                            <MdLock className="text-accent text-xl shrink-0" />

                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Create a password"
                                className="w-full min-w-0 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="text-accent text-xl"
                            >
                                {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                            </button>

                        </div>

                    </div>

                    {/* Address */}
                    <div className="mb-5">

                        <label className="block text-sm font-semibold text-accent mb-2">
                            Address
                        </label>

                        <div className="flex items-center gap-3 border-2 border-secondary rounded-xl px-4 h-12 focus-within:border-accent transition">

                            <MdHome className="text-accent text-xl shrink-0" />

                            <input
                                type="text"
                                placeholder="Enter your address"
                                className="w-full min-w-0 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />

                        </div>

                    </div>

                    {/* Phone */}
                    <div className="mb-7">

                        <label className="block text-sm font-semibold text-accent mb-2">
                            Phone Number
                        </label>

                        <div className="flex items-center gap-3 border-2 border-secondary rounded-xl px-4 h-12 focus-within:border-accent transition">

                            <MdPhone className="text-accent text-xl shrink-0" />

                            <input
                                type="tel"
                                placeholder="Enter your phone number"
                                className="w-full min-w-0 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />

                        </div>

                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full h-12 bg-accent text-white font-semibold rounded-xl flex items-center justify-center gap-3 hover:bg-[#285968] hover:shadow-lg hover:-translate-y-0.5 transition duration-300"
                    >
                        Create Account
                        <FaArrowRight />
                    </button>

                    {/* Login Link */}
                    <p className="text-center text-sm text-gray-500 mt-7">

                        Already have an account?

                        <button
                            type="button"
                            onClick={() => navigate("/login")}
                            className="text-accent font-bold ml-1 hover:underline"
                        >
                            Login
                        </button>

                    </p>

                </form>

            </div>

        </div>

    )
}
