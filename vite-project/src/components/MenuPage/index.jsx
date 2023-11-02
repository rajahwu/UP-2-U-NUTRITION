import { useEffect, useState, useRef } from "react";
import { MenuNav } from "./menuNav";
import { BackCardItem, FrontCardItem } from "./utility/CardShape";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./MenuPage.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllMenuItemThunk } from "../../store/menus";
import { addToCart } from "../../store/cart";
import { useNavigate } from "react-router-dom";
import OpenModalButton from "../OpenModalButton";
import EditItem from "./utility/forms/EditItem";
import DeleteItem from "./utility/forms/DeleteItem";
import { AddItem } from "./utility/forms/AddItem";

const MenuPage = () => {
  const [category, setCategory] = useState('combos')
  const dispatch = useDispatch()
  const menu1 = Object.values(useSelector(state => state.menuReducer));
  const user = useSelector(state => state.session.user)
  const navigate = useNavigate()
  const cardContainerRef = useRef(null);


  const handleAddToCart = (item, amount) => {
    dispatch(addToCart(item, amount))
  }

  const [flippedCardId, setFlippCardId] = useState(null);

  const flipCard = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (flippedCardId == e.target.id) {
      setFlippCardId(null);
    } else {
      setFlippCardId(e.target.id);
    }
  };

  useEffect(() => {
    dispatch(getAllMenuItemThunk());
  }, [dispatch]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardContainerRef.current && !cardContainerRef.current.contains(event.target)) {
        // Click occurred outside of the card container
        setFlippCardId(null);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  const renderCarousel = () => {
    let menuSubset = []

    menu1.forEach((item) => {
      if (category === item.category) {
        menuSubset.push(item)
      }
    })
    console.log('menuSubset', menuSubset);
    return (
      menuSubset.map((item, i) => {
        return (
          <div key={i}>
            <div ref={cardContainerRef} id={i} key={i} onClick={flipCard}>
              {flippedCardId == i ? (
                <BackCardItem item={item} i={i} />
              ) : (
                <FrontCardItem item={item} i={i} />
              )}
            </div>
            {user?.admin ? (
              <div className="flex justify-center gap-2">
                <OpenModalButton
                  modalComponent={<EditItem menu_item={item} />}
                  buttonText={<button className="green-btn add-to-cart-btn">EDIT ITEM</button>}
                />
                <OpenModalButton
                  modalComponent={<DeleteItem menu_id={item.id} />}
                  buttonText={<button className="red-btn add-to-cart-btn">DELETE</button>}
                />
              </div>
            ) : (<button onClick={() => handleAddToCart(item, 1)} className="green-btn add-to-cart-btn">ADD TO CART</button>)}
          </div>
        );
      })
    )
  }

  return (
    <div className="menu">
      <h1 className="font-bold text-6xl py-10">OUR MENU</h1>
      {user?.admin ? (
        <div>
          <button className="blue-btn add-to-cart-btn" onClick={() => navigate("/menu/add-item")}>ADD ITEM</button>
        </div>) : (null)}
      <MenuNav setCategory={setCategory} />
      <div className="menu-item-container">
        <Carousel
          responsive={responsive}
          containerClass="w-full h-full"
          itemClass="carousel-item"
          swipeable={true}
          showDots={false}
        >
          {renderCarousel()}
        </Carousel>
      </div>
    </div>
  );
};

export default MenuPage;
