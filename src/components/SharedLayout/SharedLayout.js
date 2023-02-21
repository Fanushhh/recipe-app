import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";


export default function SharedLayout(){
    return(
        <>
            <Navbar />
            <Outlet />
        </>
    )
}