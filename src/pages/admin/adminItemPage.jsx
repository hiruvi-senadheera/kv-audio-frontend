import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function AdminItemPage(){

    return(

        <div className="w-full h-full relative bg-slate-600">
            <Link to="/admin/items/add">
                <CiCirclePlus className="text-[70px] absolute right-2 bottom-2 hover:text-green-700" />
            </Link>
        </div>

    )

}
