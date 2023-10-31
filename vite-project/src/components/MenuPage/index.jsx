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
import { addToCart } from "../../store/cart";
import "./MenuPage.css";

const MenuPage = () => {

  const dispatch = useDispatch()
  const menu1 = useSelector(state => state.menuReducer)
  const currentMenuCategory = Object.values(menu1)
  const user = useSelector(state => state.session.user)

  const handleAddToCart = (item, amount) => {
    dispatch(addToCart(item, amount))
  }

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
          {'<'}
        </butto
        {currentMenuCategory && currentMenuCategory
          .slice(startPosition, startPosition + itemsPerPage)
          .map((item, i) => {
            return (
              <div id={i} key={i}>
                <div id={i} onClick={flipCard}>
                  {/* Condally render the front or the back */}
                  {flippedCardId == i
                    ? <BackCardItem item={item} i={i} />
                    : <FrontCardItem item={item} i={i} />
                  }
                </div>
                <button onClick={() => handleAddToCart(item, 1)} className="green-btn add-to-cart-btn">ADD TO CART</button>
                {user !== null &&
                  <OpenModalButton
                    modalComponent={<EditItem menu_item={item} />}
                    buttonText="Edit Item" />}

              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default MenuPage;
