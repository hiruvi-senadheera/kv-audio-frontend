import { Route, Routes } from "react-router-dom";
import Header from "../../components/header";
import Contact from "./contact";
import Gallery from "./gallery";
import Item from "./item";
import Home from "./home";

export default function HomePage(){

    return(
        <>
            <Header/>
            <div className="h-[calc(100vh-100px)] w-full">
                <Routes path="/*">
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/gallery" element={<Gallery/>}/>
                    <Route path="/items" element={<Item/>}/>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </div>
        </>
    )

}