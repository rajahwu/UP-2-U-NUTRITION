import { combos } from "./utility/menu/combos";
import { specialTeas } from "./utility/menu/special-teas";
import { supahShakes } from "./utility/menu/supah-shakes";
import { staysActive } from "./utility/menu/stays-active";
import { forYou } from "./utility/menu/forYou";
import { goodies } from "./utility/menu/goodies";

export const MenuNav = ({ changeCat }) => {
  //move to util file later
  const menuCat = [
    "combos",
    "supah shakes",
    "special teas",
    "for you",
    "stays active",
    "goodies",
  ];

  const clickHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (e.target.id === "combos") changeCat(combos)
    else if (e.target.id === "supah shakes") changeCat(supahShakes)
    else if (e.target.id === "special teas") changeCat(specialTeas)
    else if (e.target.id === "for you") changeCat(forYou)
    else if (e.target.id === "stays active") changeCat(staysActive)
    else if (e.target.id === "goodies") changeCat(goodies)
  };

  return (
    <div className="menu-nav-categories">
      {menuCat.map((cat, i) => (
        <div
          key={`category-${i}`}
          id={cat}
          className="category"
          onClick={clickHandler}
        >
          {cat}
        </div>
      ))}
    </div>
  );
};
