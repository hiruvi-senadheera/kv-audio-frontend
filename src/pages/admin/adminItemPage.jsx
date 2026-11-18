const sampleArr = [
    {
        key: "AUD001",
        name: "JBL PartyBox 310",
        price: 8500,
        category: "audio",
        dimensions: "32.6 x 68.8 x 36.8 cm",
        description: "Powerful portable party speaker with dynamic light effects and deep bass. Ideal for parties and outdoor events.",
        availability: true,
        image: [
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500"
        ]
    },
    {
        key: "AUD002",
        name: "Wireless Microphone",
        price: 2500,
        category: "microphone",
        dimensions: "25 x 5 x 5 cm",
        description: "High-quality wireless microphone suitable for speeches, presentations, karaoke and live performances.",
        availability: true,
        image: [
            "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500"
        ]
    },
    {
        key: "AUD003",
        name: "Professional DJ Mixer",
        price: 6500,
        category: "audio",
        dimensions: "52 x 32 x 10 cm",
        description: "Professional DJ mixer with multiple audio channels, sound control and connectivity options. Perfect for DJ events.",
        availability: true,
        image: [
            "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500"
        ]
    },
    {
        key: "AUD004",
        name: "Studio Headphones",
        price: 1500,
        category: "accessories",
        dimensions: "20 x 18 x 9 cm",
        description: "Comfortable professional studio headphones with clear sound quality. Suitable for music production and audio monitoring.",
        availability: true,
        image: [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
        ]
    },
    {
        key: "AUD005",
        name: "Professional PA Speaker",
        price: 7000,
        category: "speakers",
        dimensions: "40 x 35 x 65 cm",
        description: "High-powered PA speaker suitable for weddings, parties, conferences and outdoor events.",
        availability: false,
        image: [
            "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
        ]
    }
]

import axios from "axios";
import { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function AdminItemPage(){

    const [items,setItems] = useState(sampleArr)

    useEffect(
        ()=>{
            const token = localStorage.getItem("token");
            axios.get("http://localhost:3000/api/products",{
                headers : { Authorization: `Bearer ${token}`}
            }).then((res)=>{
                console.log(res.data)
                setItems(res.data)
            }).catch((err)=>{
                console.log(err)
            })
        },
        []
    );

    return(

        <div className="w-full h-full relative">

            <table>

                <thead>
                  <tr>
                    <th>Key</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Dimensions</th>
                    <th>Availability</th>
                  </tr>
                </thead>

                <tbody>

                    {
                        items.map(
                            (product)=>{
                                return (
                                    <tr key={product.key}>
                                        <td>{product.key}</td>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.category}</td>
                                        <td>{product.dimensions}</td>
                                        <td>{product.availability ? "Available" : "Not available"}</td>
                                    </tr>
                                )
                            }
                        )
                    }

                </tbody>

            </table>

            <Link to="/admin/items/add">
                <CiCirclePlus className="text-[70px] absolute right-2 bottom-2 hover:text-green-700" />
            </Link>

        </div>

    )

}
