import { specialTeas } from "./utility/menu/special-teas";
import { supahShakes } from "./utility/menu/supah-shakes";
import { staysActive } from "./utility/menu/stays-active";
import { menuCategories } from "./utility/menu/menu-categories";

export const MenuNav = ({ changeCat }) => {

  const clickHandler = (e) => {
    console.log(e.target.id)
    if (e.target.id === "supah shakes") changeCat(supahShakes)
    else if (e.target.id === "special teas") changeCat(specialTeas)
    else if (e.target.id === "stays active") changeCat(staysActive)
  };

  return (
    <div className="menu-nav-categories">
      {menuCategories.map((cat, i) => (
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
