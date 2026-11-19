
import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { useLocation, useNavigate } from "react-router-dom"

export default function UpdateItemPage() {

    const location = useLocation()

    const [itemKey, setItemKey] = useState(location.state.key)
    const [itemName, setItemName] = useState(location.state.name)
    const [itemPrice, setItemPrice] = useState(location.state.price)
    const [itemCategory, setItemCategory] = useState(location.state.category)
    const [itemDimensions, setItemDimensions] = useState(location.state.dimensions)
    const [itemDescription, setItemDescription] = useState(location.state.description)
    const navigate = useNavigate()
    

    async function handleUpdate() {

        console.log(itemKey,itemName,itemPrice,itemCategory,itemDimensions,itemDescription)
        const token = localStorage.getItem("token")

        if(token){
            try{
            const result = await axios.put("http://localhost:3000/api/products/"+itemKey,{
                name: itemName,
                price: itemPrice,
                category: itemCategory,
                dimensions: itemDimensions,
                description: itemDescription
            },{
                headers : {
                    Authorization : "Bearer " + token
                },
            });
            toast.success(result.data.message)
            navigate("/admin/items")
        }catch(err){
            toast.error(err.response.data.error)
        }
           
        }else{
            toast.error("You are not authorized to add item")
        }

    
    }

    return (

        <div className="w-full min-h-screen bg-gray-100 flex justify-center items-center p-6">

            <div className="w-full max-w-[650px] bg-white rounded-xl shadow-lg p-8">

                {/* Heading */}
                <div className="mb-8 text-center">

                    <h1 className="text-3xl font-bold text-gray-800">
                        Update Item
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Edit the item details below
                    </p>

                </div>


                {/* Form */}
                {/* <form onSubmit={handleAdd} className="flex flex-col gap-5"> */}
                <div className="w-full h-full flex flex-col gap-5">

                    {/* Item Key */}
                    <div className="flex flex-col gap-2">

                        <label className="font-semibold text-gray-700">
                            Item Key
                        </label>

                        <input
                            disabled
                            type="text"
                            placeholder="Enter item key"
                            value={itemKey}
                            onChange={(e) => setItemKey(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />

                    </div>


                    {/* Item Name */}
                    <div className="flex flex-col gap-2">

                        <label className="font-semibold text-gray-700">
                            Item Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter item name"
                            value={itemName}
                            onChange={(e) => setItemName(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />

                    </div>


                    {/* Item Price */}
                    <div className="flex flex-col gap-2">

                        <label className="font-semibold text-gray-700">
                            Item Price (LKR)
                        </label>

                        <input
                            type="number"
                            placeholder="Enter item price"
                            min="0"
                            value={itemPrice}
                            onChange={(e) => setItemPrice(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />

                    </div>


                    {/* Item Category */}
                    <div className="flex flex-col gap-2">

                        <label className="font-semibold text-gray-700">
                            Item Category
                        </label>

                        <select
                            value={itemCategory}
                            onChange={(e) => setItemCategory(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-3 bg-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        >

                            <option value="audio">Audio</option>
                            <option value="lights">Lights</option>

                        </select>

                    </div>


                    {/* Item Dimensions */}
                    <div className="flex flex-col gap-2">

                        <label className="font-semibold text-gray-700">
                            Item Dimensions
                        </label>

                        <input
                            type="text"
                            placeholder="Enter item dimensions"
                            value={itemDimensions}
                            onChange={(e) => setItemDimensions(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />

                    </div>


                    {/* Item Description */}
                    <div className="flex flex-col gap-2">

                        <label className="font-semibold text-gray-700">
                            Item Description
                        </label>

                        <textarea
                            placeholder="Enter item description"
                            rows="4"
                            value={itemDescription}
                            onChange={(e) => setItemDescription(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-3 outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />

                    </div>


                    {/* Add Button */}
                    <button
                        onClick={handleUpdate}
                        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
                    >
                        Edit
                    </button>

                    {/* Cancel Button */}
                    <button
                        onClick={
                            ()=>{
                                navigate("/admin/items")
                            }
                        }
                        className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition duration-300 shadow-md"
                    >
                        Cancel
                    </button>

                </div>

            </div>

        </div>

    )
}
