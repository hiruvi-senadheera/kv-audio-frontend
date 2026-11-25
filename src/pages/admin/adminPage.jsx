import { BsGraphDown } from "react-icons/bs";
import { FaRegBookmark, FaRegUser } from "react-icons/fa";
import { MdOutlineSpeaker, MdOutlineStarBorder,} from 'react-icons/md';
import { Link, Route, Routes } from "react-router-dom";
import AdminItemPage from "./adminItemPage";
import AddItemPage from "./addItemPage";
import UpdateItemPage from "./updateItemPage";
import AdminUsersPage from "./adminUsersPage";
import AdminBookingPage from "./adminBookingPage";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminPage(){

    const [userValidated, setUserValidated] = useState(false)
    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(!token){
            window.location.href = "/login"
        }
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            console.log(res.data)
            const user = res.data
            if(user.role == "admin"){
                setUserValidated(true)
            }else{
                window.location.href = "/"
            }
        }).catch((err) => {
            console.error("Error: ", err.response?.data || err.message)
            setUserValidated(false)
        })
    })

    return(
        <div className='w-full h-screen flex'>

            <div className='w-[200px] h-full bg-green-200'>

                <button className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center'>
                    <BsGraphDown />
                    Dashboard
                </button>
                <Link to="/admin/bookings" className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center'>
                    <FaRegBookmark />
                    Bookings
                </Link>
                <Link to="/admin/items" className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center'>
                    <MdOutlineSpeaker />
                    Items
                </Link>
                <button className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center'>
                    <MdOutlineStarBorder />
                    Reviews
                </button>
                <Link to="/admin/users" className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center'>
                    <FaRegUser />
                    Users
                </Link>

            </div>

            {/* -------------------------------------------------------------------------------------------- */}


            <div className='w-[calc(100vw-200px)]'>
                {userValidated&&<Routes path="/*">
                    <Route path="/bookings" element={<AdminBookingPage/>}/>
                    <Route path="/items" element={<AdminItemPage/>}/>
                    <Route path="/items/add" element={<AddItemPage/>}/>
                    <Route path="/items/edit" element={<UpdateItemPage/>}/>
                    <Route path="/reviews" element={<h1>Reviews</h1>}/>
                    <Route path="/users" element={<AdminUsersPage/>}/>
                </Routes>}
            </div>

        </div>
    )

}