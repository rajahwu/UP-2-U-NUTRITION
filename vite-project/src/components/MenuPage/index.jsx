import { useEffect, useState } from "react";
import { MenuNav } from "./menuNav";
import { BackCardItem, FrontCardItem } from "./utility/CardShape";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./MenuPage.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllMenuItemThunk } from "../../store/menus";
import { addToCart } from "../../store/cart";


const MenuPage = () => {
  const dispatch = useDispatch()
  const menu1 = Object.values(useSelector(state => state.menuReducer))

  const handleAddToCart = (item, amount) => {
    dispatch(addToCart(item, amount))
  }

  const [flippedCardId, setFlippCardId] = useState(Infinity);

  const flipCard = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (flippedCardId == e.target.id) {
      setFlippCardId(Infinity);
    } else {
      setFlippCardId(e.target.id);
    }
  };

  useEffect(() => {
    dispatch(getAllMenuItemThunk());
  }, [dispatch]);

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
  return (
    <div className="menu">
      <div className="headers">OUR MENU</div>
      <MenuNav />
      <div className="menu-item-container">
        <Carousel responsive={responsive}>
        {menu1.map((item, i) => {
            return (
              <div id={i} key={i}>
                <div id={i} onClick={flipCard}>
                  {flippedCardId == i
                    ? <BackCardItem item={item} i={i} />
                    : <FrontCardItem item={item} i={i} />
                  }
                </div>
                <button onClick={() => handleAddToCart(item, 1)} className="green-btn add-to-cart-btn">ADD TO CART</button>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default MenuPage;
