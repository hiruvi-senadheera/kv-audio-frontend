// const sampleArr = [
//     {
//         key: "AUD001",
//         name: "JBL PartyBox 310",
//         price: 8500,
//         category: "audio",
//         dimensions: "32.6 x 68.8 x 36.8 cm",
//         description: "Powerful portable party speaker with dynamic light effects and deep bass. Ideal for parties and outdoor events.",
//         availability: true,
//         image: [
//             "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500"
//         ]
//     },
//     {
//         key: "AUD002",
//         name: "Wireless Microphone",
//         price: 2500,
//         category: "microphone",
//         dimensions: "25 x 5 x 5 cm",
//         description: "High-quality wireless microphone suitable for speeches, presentations, karaoke and live performances.",
//         availability: true,
//         image: [
//             "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500"
//         ]
//     },
//     {
//         key: "AUD003",
//         name: "Professional DJ Mixer",
//         price: 6500,
//         category: "audio",
//         dimensions: "52 x 32 x 10 cm",
//         description: "Professional DJ mixer with multiple audio channels, sound control and connectivity options. Perfect for DJ events.",
//         availability: true,
//         image: [
//             "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500"
//         ]
//     },
//     {
//         key: "AUD004",
//         name: "Studio Headphones",
//         price: 1500,
//         category: "accessories",
//         dimensions: "20 x 18 x 9 cm",
//         description: "Comfortable professional studio headphones with clear sound quality. Suitable for music production and audio monitoring.",
//         availability: true,
//         image: [
//             "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
//         ]
//     },
//     {
//         key: "AUD005",
//         name: "Professional PA Speaker",
//         price: 7000,
//         category: "speakers",
//         dimensions: "40 x 35 x 65 cm",
//         description: "High-powered PA speaker suitable for weddings, parties, conferences and outdoor events.",
//         availability: false,
//         image: [
//             "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
//         ]
//     }
// ]

import axios from "axios";
import { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function AdminItemPage() {

    const [items, setItems] = useState([]);
    const [itemsLoaded, SetItemsLoaded] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {

        if(!itemsLoaded){
            const token = localStorage.getItem("token");

            axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
            })
            .then((res) => {
                setItems(res.data);
                SetItemsLoaded(true)
            })
            .catch((err) => {
                console.error(err)
                toast.error("Failed to load products");
            });
        }
    }, [itemsLoaded]);

    const handleDelete = (key) => {

        if(window.confirm("Are you sure you want to delete this item?")){
            setItems(items.filter((item)=> item.key !== key))
            const token = localStorage.getItem("token");
            axios.delete(
            `${import.meta.env.VITE_BACKEND_URL}/api/products/${key}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            )
            .then((res) => {
                console.log(res.data)
                toast.success("Product deleted successfully");
                SetItemsLoaded(false);
            })
            .catch((err) => {
                console.error(err);
                toast.error("Failed to delete product");
            });

        }
    }

    return (

        <div className="w-full min-h-full bg-gray-50 p-4 md:p-8">

            {/* Header */}

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">

                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        Products
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Manage your audio equipment and rental products.
                    </p>
                </div>

                {!itemsLoaded &&<div className="border-4 border-b-green-500 w-100px w-[100px] h-[100px] rounded-full animate-spin"></div>}


                <div className="bg-white px-5 py-3 rounded-xl shadow-sm border">
                    <p className="text-sm text-gray-500">
                        Total Products
                    </p>

                    <p className="text-2xl font-bold text-blue-600">
                        {items.length}
                    </p>
                </div>

            </div>

        
            {/* Product Table */}
        {itemsLoaded &&
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">

                    <table className="w-full text-left">

                        <thead className="bg-gray-100 border-b border-gray-200">
                            <tr className="text-gray-600 text-sm uppercase">
                                <th className="px-6 py-4">Key</th>
                                <th className="px-6 py-4">Product Name</th>
                                <th className="px-6 py-4">Price</th>
                                <th className="px-6 py-4">Category</th>
                                <th className="px-6 py-4">Dimensions</th>
                                <th className="px-6 py-4">Availability</th>
                                <th className="px-6 py-4 text-center">Actions</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-100">
                            {
                                items.map((product) => {

                                    return (

                                        <tr
                                            key={product.key}
                                            className="hover:bg-gray-50 transition duration-200"
                                        >
                                            <td className="px-6 py-4 font-medium text-gray-500">
                                                {product.key}
                                            </td>
                                            <td className="px-6 py-4 font-semibold text-gray-800">
                                                {product.name}
                                            </td>
                                            <td className="px-6 py-4 font-medium text-gray-700">
                                                LKR {product.price.toLocaleString()}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold capitalize">
                                                    {product.category}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-gray-600 text-sm">
                                                {product.dimensions}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                    product.availability
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-red-100 text-red-700"
                                                }`}>
                                                    {product.availability
                                                        ? "Available"
                                                        : "Not Available"
                                                    }
                                                </span>
                                            </td>


                                            {/* Action Buttons */}

                                            <td className="px-6 py-4">

                                                <div className="flex justify-center items-center gap-3">

                                                    {/* Edit Button */}

                                                    {/* <Link to={`/admin/items/edit/${product.key}`}> */}

                                                        <button className="bg-blue-100 text-blue-600 p-2.5 rounded-lg hover:bg-blue-600 hover:text-white transition duration-200"
                                                        onClick={
                                                            ()=>{
                                                                navigate("/admin/items/edit",{state:product})
                                                            }
                                                        }>
                                                            <FaEdit />
                                                        </button>

                                                    {/* </Link> */}


                                                    {/* Delete Button */}

                                                    <button
                                                        onClick={() => handleDelete(product.key)}
                                                        className="bg-red-100 text-red-600 p-2.5 rounded-lg hover:bg-red-600 hover:text-white transition duration-200"
                                                    >
                                                        <FaTrash />
                                                    </button>

                                                </div>

                                            </td>

                                        </tr>

                                    );

                                })
                            }

                        </tbody>

                    </table>

                    {/* Empty State */}

                    {
                        items.length === 0 && (

                            <div className="text-center py-12">

                                <p className="text-gray-400 text-lg">
                                    No products found.
                                </p>

                                <p className="text-gray-400 text-sm mt-2">
                                    Add your first product to get started.
                                </p>

                            </div>

                        )
                    }

                </div>

            </div>
            }

            {/* Add Product Button */}

            <Link
                to="/admin/items/add"
                className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 hover:scale-110 transition duration-300"
            >
                <CiCirclePlus className="text-4xl" />
            </Link>

        </div>

    );

}