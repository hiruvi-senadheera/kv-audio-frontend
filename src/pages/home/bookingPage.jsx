import { useState } from "react"
import { loadCart } from "../../utils/cart"
import BookingItem from "../../components/bookingItem"

export default function BookingPage(){

    const [cart,setCart] = useState(loadCart())
    console.log(cart)

    function reloadCart(){
        setCart(loadCart())
    }

    return(

        <div className="w-full h-full flex flex-col items-center ">
            <h1>Create Booking</h1>
            <div className="flex flex-col items-center ">
                {
                    cart.orderedItems.map((item)=>{
                        return <BookingItem itemKey={item.key} qty={item.qty} refresh={reloadCart}/>
                        
                    })
                }
            </div>
        </div>

    )

}