import {Link, NavLink} from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io";

export function BackButton (){
    return (
        <Link to="/" end>
            <IoIosArrowBack/>
        </Link>
    )
}