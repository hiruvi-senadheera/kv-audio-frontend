import axios from "axios"
import "./register.css"
import { useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export default function RegisterPage(){

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [address,setAddress] = useState("")
    const [phone,setPhone] = useState("")

    const navigate = useNavigate()

    const handleOnSubmit = (e) => {
        e.preventDefault()

        console.log({
            email,
            password,
            firstName,
            lastName,
            address,
            phone
        })

        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/`,
            {
                email : email,
                firstName : firstName,
                lastName : lastName,
                password : password,
                address : address,
                phone : phone
            }
        ).then((res)=>{
            toast.success("Registration success")
            navigate("/login")
        }).catch((err)=>{
            toast.error(err?.response?.data?.error || "An error occured")
        })
    }

    return(

        // screen
        <div className="w-full min-h-screen flex justify-center items-center bg-picture py-6">

            <form onSubmit={handleOnSubmit}>

                {/* register screen */}
                <div className="w-[400px] min-h-[700px] backdrop-blur-xl rounded-2xl flex flex-col justify-center items-center py-6">

                    {/* logo */}
                    <img
                        src="/kv-logo.png"
                        alt="logo"
                        className="w-[150px] h-[150px] object-cover"
                    />

                    <h1 className="text-3xl text-white font-bold mb-6">
                        Register
                    </h1>

                    {/* first name */}
                    <input
                        type="text"
                        placeholder="First Name"
                        className="mb-5 w-[300px] h-[35px] bg-transparent border-b-2 border-white text-white text-lg outline-none placeholder:text-white"
                        value={firstName}
                        onChange={(e)=>{
                            setFirstName(e.target.value)
                        }}
                    />

                    {/* last name */}
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="mb-5 w-[300px] h-[35px] bg-transparent border-b-2 border-white text-white text-lg outline-none placeholder:text-white"
                        value={lastName}
                        onChange={(e)=>{
                            setLastName(e.target.value)
                        }}
                    />

                    {/* email */}
                    <input
                        type="email"
                        placeholder="Email"
                        className="mb-5 w-[300px] h-[35px] bg-transparent border-b-2 border-white text-white text-lg outline-none placeholder:text-white"
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                    />

                    {/* password */}
                    <input
                        type="password"
                        placeholder="Password"
                        className="mb-5 w-[300px] h-[35px] bg-transparent border-b-2 border-white text-white text-lg outline-none placeholder:text-white"
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                    />

                    {/* address */}
                    <input
                        type="text"
                        placeholder="Address"
                        className="mb-5 w-[300px] h-[35px] bg-transparent border-b-2 border-white text-white text-lg outline-none placeholder:text-white"
                        value={address}
                        onChange={(e)=>{
                            setAddress(e.target.value)
                        }}
                    />

                    {/* phone */}
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="mb-5 w-[300px] h-[35px] bg-transparent border-b-2 border-white text-white text-lg outline-none placeholder:text-white"
                        value={phone}
                        onChange={(e)=>{
                            setPhone(e.target.value)
                        }}
                    />

                    {/* register button */}
                    <button
                        type="submit"
                        className="mt-5 w-[300px] h-[50px] bg-[#efac38] text-xl text-white rounded-lg"
                    >
                        Register
                    </button>

                </div>

            </form>

        </div>

    )

}