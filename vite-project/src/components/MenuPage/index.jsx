
import { useEffect, useState } from "react";
import { MenuNav } from "./menuNav";
import OpenModalButton from "../OpenModalButton/index";
import { AddItem } from "./utility/forms/AddItem";
import { BackCardItem, FrontCardItem, EmptyCardItem } from "./utility/CardShape";
import { menuCategories } from "./utility/menu/menu-categories";
import { combinedMenu } from "./utility/menu/combined-menu";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./MenuPage.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllMenuItemThunk } from "../../store/menus";

// Import EditItem here only once
import EditItem from "./utility/forms/EditItem";

const MenuPage = () => {
  const dispatch = useDispatch();
  const menuObject = useSelector(state => state.menuReducer);
  const menuArr = Object.values(menuObject);
  console.log("menuArr:", menuArr);
  const user = useSelector(state => state.session.user);
  const [flippedCardId, setFlippCardId] = useState(Infinity);

  const flipCard = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    // Used double equality to match string numbers against int
    if (flippedCardId == e.target.id) {
      setFlippCardId(Infinity);
    } else {
      setFlippCardId(e.target.id);
    }
  };

  useEffect(() => {
    dispatch(getAllMenuItemThunk());
  }, [dispatch]);
  return (
    <div className="menu">
      <div className="headers">OUR MENU</div>
      <MenuNav />
      <div className="menu-item-container">
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          centerMode={true}
        // centerSlidePercentage={100 / 100}
        >
          {menuArr && menuArr.map((item, i) => {
            return (
              <div id={i} key={i} onClick={flipCard}>
                {flippedCardId == i ? (
                  <BackCardItem item={item} i={i} />
                ) : (
                  <FrontCardItem item={item} i={i} />
                )}
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default MenuPage;
