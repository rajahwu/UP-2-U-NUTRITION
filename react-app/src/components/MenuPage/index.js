import { useEffect, useState } from "react";

import { MenuNav } from "./menuNav";

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
