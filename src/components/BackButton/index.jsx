import {NavLink} from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io";

export function BackButton (){
    return (
        <NavLink to="/" end>
            <IoIosArrowBack/>
        </NavLink>
    )
}