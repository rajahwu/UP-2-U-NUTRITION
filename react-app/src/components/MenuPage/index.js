import { useEffect, useState } from "react";

import { MenuNav } from "./menuNav";
import { menuObject } from "./fauxMenu-TEMP";
import './MenuPage.css'



const MenuPage = () => {
    const test = () => {
        console.log(menuObject[0].image)
    }

    return (
        <div className="menu">
            <div className="headers">OUR MENU</div>
            <MenuNav />
            <img src={menuObject[0].image} />
        </div>
    )
}

export default MenuPage
