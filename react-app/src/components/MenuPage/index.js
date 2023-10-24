import { useState } from "react";

import { MenuNav } from "./menuNav";


import { supahShakes } from "./utility/menu/supah-shakes";
import { BackCardItem, FrontCardItem, EmptyCardItem } from "./utility/CardShape";

import "./MenuPage.css";

const MenuPage = () => {
  //Variable to hold which card should be flipped.
  //useState will make sure the page is rerendered everytime the variable changes.
  const [flippedCardId, setFlippCardId] = useState(Infinity);
  const [currentMenuCatagory, setCurrentMenuCatagory] = useState(supahShakes);

  const [scrollPosition, setScrollPosition] = useState(0);

  const itemsPerPage = 4;
  let difference = supahShakes.length - itemsPerPage;
  const maxScrollPosition = Math.max(0, difference);

  const handleScrollLeft = () => {
    if (scrollPosition > 0) setScrollPosition(scrollPosition - itemsPerPage);
    setFlippCardId(Infinity);
  };

  const handleScrollRight = () => {
    if (scrollPosition < maxScrollPosition) setScrollPosition(scrollPosition + itemsPerPage);
    setFlippCardId(Infinity);
  };

  const setCatagory = (cat) => {
    setCurrentMenuCatagory(cat)
    console.log(cat)
    setFlippCardId(Infinity);
  }

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
      <MenuNav changeCat={setCatagory} />
      <div className="menu-item-container">
        <button
          className="menu-prev-next-btn"
          onClick={handleScrollLeft}>
          {'<'}
        </button>
        {currentMenuCatagory
          .slice(scrollPosition, scrollPosition + itemsPerPage)
          .map((item, i) => {
            return (
              <div id={i} key={i}>
                <div id={i} onClick={flipCard}>
                  {/* Condally render the front or the back */}
                  {flippedCardId == i
                    ? BackCardItem(item, i)
                    : FrontCardItem(item, i)
                  }
                </div>
                <button className="add-to-cart-btn">ADD TO CART</button>
              </div>
            );
          })}
        <button
          className="menu-prev-next-btn"
          onClick={handleScrollRight}>
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default MenuPage;
