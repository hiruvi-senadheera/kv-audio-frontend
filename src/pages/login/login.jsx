// import axios from "axios"
// import "./login.css"

// import { useState } from "react"
// import toast from "react-hot-toast"
// import { useNavigate } from "react-router-dom"
// import { useGoogleLogin } from '@react-oauth/google';

// export default function LoginPage(){

//     const [email,setEmail] = useState("")
//     const [password,setPassword] = useState("")

//     const navigate = useNavigate()

//     const googleLogin = useGoogleLogin(
//         {
//             onSuccess : (res)=>{
//                 console.log(res)
//                 axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/google`,{
//                     accessToken : res.access_token
//                 }).then((res)=>{
//                     console.log(res)
//                     toast.success("Login Success")
//                     const user = res.data.user
//                     localStorage.setItem("token",res.data.token)

                    

//                     if(user.role === "admin"){
//                         navigate("/admin/")
//                     }else{
//                         navigate("/")
//                     }
//                 }).catch((err)=>{
//                     console.log(err)
//                 })
//             }
//         }
//     )

//     function handleOnSubmit(e){
//         e.preventDefault()
//         const backendUrl = import.meta.env.VITE_BACKEND_URL

//         axios.post(
//             `${backendUrl}/api/users/login`,
//             {
//                 email : email,
//                 password : password
//             }
//         ).then(
//             (res)=>{
//                 console.log(res)
//                 toast.success("login successfull");
//                 const user = res.data.user
//                 localStorage.setItem(
//                     "token",
//                     res.data.token
//                 )

//                 if(user.emailVerified === false){
//                         navigate("/verify-email")
//                         return
//                 }

//                 if(user.role == "admin"){
//                     navigate("/admin/")
//                 }else{
//                     navigate("/")
//                 }
//             }
//         ).catch(
//             (err)=>{
//                 console.log(err)
//                 toast.error(err.response?.data?.error || "Login failed!");
//             }
//         )

//     }

//     return(

//         // screen
//         <div className="w-full h-screen flex justify-center items-center bg-picture">
        
//           <form onSubmit={handleOnSubmit}>
//             {/* login screen */}
//             <div className=" w-[400px] h-[400px] backdrop-blur-xl rounded-2xl flex flex-col justify-center items-center">

//                 {/* logo */}
//                 <img src="/kv-logo.png" alt="logo" className="w-[200px] h-[200px] object-cover"/>

//                 {/* email */}
//                 <input type="email" placeholder="Email" className="w-[300px] h-[30px] bg-transparent border-b-2 border-white text-white text-xl outline-none"
//                 value={email} 
//                 onChange={
//                     (e)=>{
//                         setEmail(e.target.value)
//                     }
//                 }
//                 />

//                 {/* password */}
//                 <input type="password" placeholder="Password" className="mt-6 w-[300px] h-[30px] bg-transparent border-b-2 border-white text-white text-xl outline-none" 
//                 value={password}
//                 onChange={
//                     (e)=>{
//                         setPassword(e.target.value)
//                     }
//                 }
//                 />

//                 {/* login button */}
//                 <button className="my-8 w-[300px] h-[50px] bg-[#efac38] text-xl text-white rounded-lg">Login</button>

//                 <div className="my-8 w-[300px] h-[50px] bg-[#efac38] text-xl text-white rounded-lg cursor-pointer" onClick={googleLogin}>
//                     Login with Google
//                 </div>


//             </div>

//           </form>
//         </div>

//     )

// }



import axios from "axios"
import "./login.css"

import { useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { useGoogleLogin } from "@react-oauth/google"

import { FcGoogle } from "react-icons/fc"
import { MdEmail, MdLock, MdVisibility, MdVisibilityOff } from "react-icons/md"
import { FaArrowRight } from "react-icons/fa"

export default function LoginPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()

    const googleLogin = useGoogleLogin({
        onSuccess: (res) => {
            axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/google`, {
                accessToken: res.access_token
            }).then((res) => {

                toast.success("Login Success")

                const user = res.data.user

                localStorage.setItem("token", res.data.token)

                if (user.role === "admin") {
                    navigate("/admin/")
                } else {
                    navigate("/")
                }

            }).catch((err) => {
                console.log(err)
                toast.error(err.response?.data?.error || "Google login failed!")
            })
        },
        onError: () => toast.error("Google login failed!")
    })

    function handleOnSubmit(e) {

        e.preventDefault()

        axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/api/users/login`,
            {
                email,
                password
            }
        ).then((res) => {

            toast.success("Login successful!")

            const user = res.data.user

            localStorage.setItem("token", res.data.token)

            if (user.emailVerified === false) {
                navigate("/verify-email")
                return
            }

            if (user.role === "admin") {
                navigate("/admin/")
            } else {
                navigate("/")
            }

        }).catch((err) => {
            console.log(err)
            toast.error(err.response?.data?.error || "Login failed!")
        })
    }

    return (

        <div className="min-h-screen w-full flex items-center justify-center bg-secondary px-4 py-8">

            {/* Login Card */}
            <div className="w-full max-w-md bg-primary rounded-3xl shadow-2xl overflow-hidden">

                {/* Top Section */}
                <div className="bg-accent px-8 pt-8 pb-10 text-center rounded-b-[50px]">

                    <img
                        src="/kv-logo.png"
                        alt="KV Logo"
                        className="w-32 h-32 object-contain mx-auto mb-3"
                    />

                    <h1 className="text-3xl font-bold text-white tracking-wide">
                        Welcome Back!
                    </h1>

                    <p className="text-white/80 mt-2 text-sm">
                        Login to continue your journey with KV
                    </p>

                </div>

                {/* Form Section */}
                <form
                    onSubmit={handleOnSubmit}
                    className="px-8 py-8"
                >

                    <h2 className="text-2xl font-bold text-accent text-center mb-2">
                        Login
                    </h2>

                    <p className="text-gray-500 text-center text-sm mb-8">
                        Enter your credentials to access your account
                    </p>

                    {/* Email */}
                    <div className="mb-6">

                        <label className="block text-sm font-semibold text-accent mb-2">
                            Email Address
                        </label>

                        <div className="flex items-center gap-3 border-2 border-secondary rounded-xl px-4 h-12 focus-within:border-accent transition">

                            <MdEmail className="text-accent text-xl" />

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                        </div>

                    </div>

                    {/* Password */}
                    <div className="mb-4">

                        <label className="block text-sm font-semibold text-accent mb-2">
                            Password
                        </label>

                        <div className="flex items-center gap-3 border-2 border-secondary rounded-xl px-4 h-12 focus-within:border-accent transition">

                            <MdLock className="text-accent text-xl" />

                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
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

                    {/* Forgot Password */}
                    <div className="flex justify-end mb-7">

                        <button
                            type="button"
                            onClick={() => navigate("/forgot-password")}
                            className="text-sm text-accent font-semibold hover:underline"
                        >
                            Forgot Password?
                        </button>

                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full h-12 bg-accent text-white font-semibold rounded-xl flex items-center justify-center gap-3 hover:bg-[#285968] hover:shadow-lg hover:-translate-y-0.5 transition duration-300"
                    >
                        Login
                        <FaArrowRight />
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-7">

                        <div className="flex-1 h-px bg-gray-200"></div>

                        <span className="text-sm text-gray-400">
                            OR
                        </span>

                        <div className="flex-1 h-px bg-gray-200"></div>

                    </div>

                    {/* Google Login */}
                    <button
                        type="button"
                        onClick={() => googleLogin()}
                        className="w-full h-12 border-2 border-gray-200 rounded-xl flex items-center justify-center gap-3 text-gray-700 font-semibold hover:bg-secondary hover:border-accent transition duration-300"
                    >
                        <FcGoogle className="text-2xl" />
                        Continue with Google
                    </button>

                    {/* Register */}
                    <p className="text-center text-sm text-gray-500 mt-8">

                        Don't have an account?

                        <button
                            type="button"
                            onClick={() => navigate("/register")}
                            className="text-accent font-bold ml-1 hover:underline"
                        >
                            Register
                        </button>

                    </p>

                </form>

            </div>

        </div>
    )
}
