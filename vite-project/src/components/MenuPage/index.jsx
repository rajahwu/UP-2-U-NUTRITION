
import { useEffect, useState } from "react";
import { MenuNav } from "./menuNav";
import OpenModalButton from "../OpenModalButton/index";
import { AddItem } from "./utility/forms/AddItem";
import { BackCardItem, FrontCardItem, EmptyCardItem } from "./utility/CardShape";
import { menuCategories } from "./utility/menu/menu-categories";
import { combinedMenu } from "./utility/menu/combined-menu";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from "react-router-dom";

import "./MenuPage.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllMenuItemThunk } from "../../store/menus";
import { addToCart } from "../../store/cart";
import EditItem from "./utility/forms/EditItem";

const MenuPage = () => {

  const navigate = useNavigate()
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const dispatch = useDispatch()
  const menu1 = useSelector(state => state.menuReducer)
  const menuArr = Object.values(menu1)
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
      {user && <button onClick={() => navigate("/menu/add-item")}>Add Item</button>}
      <MenuNav />
      <div className="menu-item-container">
        <Carousel responsive={responsive}
        >
          {menuArr && menuArr.map((item, i) => {
            return (
              <div id={i} key={i} onClick={flipCard}>
                {flippedCardId == i ? (
                  <BackCardItem item={item} i={i} />
                ) : (
                  <FrontCardItem item={item} i={i} />
                )}
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
