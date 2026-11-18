import axios from "axios"
import "./login.css"

import { useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export default function LoginPage(){

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const navigate = useNavigate()

    function handleOnSubmit(e){
        e.preventDefault()

        axios.post(
            "http://localhost:3000/api/users/login",
            {
                email : email,
                password : password
            }
        ).then(
            (res)=>{
                console.log(res)
                toast.success("login successfull");
                const user = res.data.user
                localStorage.setItem(
                    "token",
                    res.data.token
                )
                if(user.role == "admin"){
                    navigate("/admin/")
                }else{
                    navigate("/")
                }
            }
        ).catch(
            (err)=>{
                console.log(err)
                toast.error(err.response?.data?.error || "Login failed!");
            }
        )

    }

    return(

        // screen
        <div className="w-full h-screen flex justify-center items-center bg-picture">
        
          <form onSubmit={handleOnSubmit}>
            {/* login screen */}
            <div className=" w-[400px] h-[400px] backdrop-blur-xl rounded-2xl flex flex-col justify-center items-center">

                {/* logo */}
                <img src="/kv-logo.png" alt="logo" className="w-[200px] h-[200px] object-cover"/>

                {/* email */}
                <input type="email" placeholder="Email" className="w-[300px] h-[30px] bg-transparent border-b-2 border-white text-white text-xl outline-none"
                value={email} 
                onChange={
                    (e)=>{
                        setEmail(e.target.value)
                    }
                }
                />

                {/* password */}
                <input type="password" placeholder="Password" className="mt-6 w-[300px] h-[30px] bg-transparent border-b-2 border-white text-white text-xl outline-none" 
                value={password}
                onChange={
                    (e)=>{
                        setPassword(e.target.value)
                    }
                }
                />

                {/* login button */}
                <button className="my-8 w-[300px] h-[50px] bg-[#efac38] text-xl text-white rounded-lg">Login</button>


            </div>

          </form>
        </div>

    )

}