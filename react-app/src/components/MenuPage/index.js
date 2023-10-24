import { useState } from "react";

import { MenuNav } from "./MenuNav";
import { menuItemArray } from "./fauxMenu-TEMP";
import { BackCardItem, FrontCardItem} from "./utility/card-shape";
import "./MenuPage.css";

const MenuPage = () => {
  //Variable to hold which card should be flipped.
  //useState will make sure the page is rerendered everytime the variable changes.
  const [flippedCardId, setFlippCardId] = useState(Infinity);

  //function to flip the card when clicked
  const flipCard = async (e) => {
    e.stopPropagation();
    e.preventDefault();

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
                {/* Conditionally render the front or the back */}
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
