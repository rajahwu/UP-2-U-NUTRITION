import { specialTeas } from "./utility/menu/special-teas";
import { supahShakes } from "./utility/menu/supah-shakes";
import { staysActive } from "../../../../vite-project/src/components/MenuPage/utility/menu/stays-active";
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
        console.log(e.target.id)
        if (e.target.id === "supah shakes") changeCat(supahShakes)
        else if (e.target.id === "special teas") changeCat(specialTeas)
        else if (e.target.id === "stays active") changeCat(staysActive)
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
