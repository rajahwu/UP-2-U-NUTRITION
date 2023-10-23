import { useEffect, useState } from "react";

import { MenuNav } from "./MenuNav";

import './MenuPage.css'


const MenuPage = () => {

    return (
        <div className="menu">
            <div className="headers">OUR MENU</div>
            <MenuNav />
        </div>
    )
}

export default MenuPage

//write a react component that renders only 4 elements of an array per page
