import React from "react";
import styles from './navbar.module.css';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Link } from "react-router-dom";

export default function Navbar(){

    return (
        <header>
            <nav>
                <Link to='/'><h1><RestaurantIcon /> Recipool</h1></Link>
            </nav>
        </header>
    )
}