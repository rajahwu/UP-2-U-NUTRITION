import { useEffect, useState } from "react";

import { MenuNav } from "./MenuNav";
import { menuItemArray } from "./fauxMenu-TEMP";
import "./MenuPage.css";

const MenuPage = () => {
  // const [isFlip, setIsFlip] = useState(false);
  const [flippedCardId, setFlippCardId] = useState(0);

  useEffect(() => {
    console.log(flippedCardId)
  }, [flippedCardId])

  // const test = () => {
  //     console.log(menuItemArray[0].image)
  // }

  const flipCard = async (e) => {
    e.stopPropagation();
    e.preventDefault();

    setFlippCardId(e.target.id)
    console.log(e.target.id)
  };

  const frontCardItem = (item, i) => {
    return (
      <div id={i} className="card">
        <div
          className="menu-item front-card"
          id={i}
        >
          <div id={i}>{item.name}</div>
          <img id={i} src={item.image} alt='' />
        </div>
      </div>
    )
  }

  const backCardItem = (item, i) => {
    return (
      <div id={i} className="card">
        <div
          className="menu-item back-card"
          id={i}
        >
          <div id={i}>{item.name}</div>
          <div id={i}>{item.ingredients}</div>
          {/* <div>{item.nutrition_table}</div> */}
        </div>
      </div>
    )
  }
  //add an onload feature
  return (
    <div className="menu">
      <div className="headers">OUR MENU</div>
      <MenuNav />
      <div className="menu-item-container">
        {menuItemArray.map((item, i) => {
          return (
            <div id={i}
              key={i}>
              <div id={i} onClick={flipCard}>
                {flippedCardId === i ? backCardItem(item, i) : frontCardItem(item, i)}
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
