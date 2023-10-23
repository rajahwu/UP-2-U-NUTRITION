import { useEffect, useState } from "react";

import { MenuNav } from "./MenuNav";
import { menuItemArray } from "./fauxMenu-TEMP";
import { BackCardItem, FrontCardItem} from "./utility/card-shape";
import "./MenuPage.css";

const MenuPage = () => {
  //Variable to hold which card should be flipped.
  //useState will make sure the page is rerendered everytime the variable changes.
  const [flippedCardId, setFlippCardId] = useState(Infinity);

  const flipCard = async (e) => {
    e.stopPropagation();
    e.preventDefault();

    //logic to flip over a new card or flip back a card already clicked
    //used double equality to match string numbers against int
    if (flippedCardId == e.target.id) {
      setFlippCardId(Infinity);
    } else {
      setFlippCardId(e.target.id);
    }
  };

  return (
    <div className="menu">
      <div className="headers">OUR MENU</div>
      <MenuNav />
      <div className="menu-item-container">
        {menuItemArray.map((item, i) => {
          return (
            <div id={i} key={i}>
              <div id={i} onClick={flipCard}>
                {flippedCardId == i
                  ? BackCardItem(item, i)
                  : FrontCardItem(item, i)}
              </div>
              <button>Add to cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuPage;
