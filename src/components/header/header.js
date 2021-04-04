import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import {Link} from "react-router-dom";
import "./header.css";

export function AppHeader () {
    return (
        <div className={"head"}>
            <div>
                <Link to={"/"} style={{margin: 20, textDecoration: "none", fontSize: 20, fontWeight: "bold"}}>HOME</Link>
            </div>
            <Link to={"/basket"}>
                <img style={{width: 30, margin: 20}} src={cartIcon} alt="basket"/>
            </Link>
        </div>
    );
}