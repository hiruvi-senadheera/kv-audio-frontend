import { Route, Routes } from "react-router-dom";
import Header from "../../components/header";

export default function HomePage(){

    return(
        <>
            <Header/>
            <div className="h-[calc(100vh-100px)] w-full">
                <Routes path="/*">
                    <Route path="/contact" element={<h1>Contacts</h1>}/>
                </Routes>
            </div>
        </>
    )

}