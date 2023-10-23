import { useEffect, useState } from "react";

import { MenuNav } from "./MenuNav";
import { menuItemArray } from "./fauxMenu-TEMP";
import "./MenuPage.css";

const MenuPage = () => {
  // const test = () => {
  //     console.log(menuItemArray[0].image)
  // }
  //add an onload feature
  return (
    <div className="menu">
      <div className="headers">OUR MENU</div>
      <MenuNav />
      <div className="menu-item-container">
        {menuItemArray.map((item) => {
          return (
            <div className="menu-item" key={`item-${item.id}`}>
              <img src={item.image} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuPage;
