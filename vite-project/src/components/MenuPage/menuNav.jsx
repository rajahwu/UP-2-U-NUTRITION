import { useState } from "react";

import { combos } from "./utility/menu/combos";
import { specialTeas } from "./utility/menu/special-teas";
import { supahShakes } from "./utility/menu/supah-shakes";
import { staysActive } from "./utility/menu/stays-active";
import { forYou } from "./utility/menu/forYou";
import { goodies } from "./utility/menu/goodies";
import { menuCategories } from "./utility/menu/menu-categories"

export const MenuNav = ({props}) => {

  const menuSelectionLines = [
    "/images/selected_cat/circle_1.png",
    "/images/selected_cat/circle_2.png",
    "/images/selected_cat/circle_3.png",
    "/images/selected_cat/circle_4.png",
    "/images/selected_cat/circle_5.png",
    "/images/selected_cat/circle_6.png",
  ];

  const clickHandler = (menuItem) => {
    props.setCategory(menuItem)
  };

  return (
    <div className="menu-nav-categories" >
      {menuCategories.map((cat, i) => (
        <div
          key={`category-${i}`}
          id={cat}
          className="categories-container category-title"
          onClick={clickHandler(cat)}
        >
          {cat}
          <img
            className='selector-lines'
            src={menuSelectionLines[i]}
            alt=""
          />
        </div>
      ))
      }
    </div >
  );
};
