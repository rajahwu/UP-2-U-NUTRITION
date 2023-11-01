import { useEffect, useState } from "react";
import { MenuNav } from "./menuNav";
import { BackCardItem, FrontCardItem } from "./utility/CardShape";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./MenuPage.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllMenuItemThunk } from "../../store/menus";
import { addToCart } from "../../store/cart";
import { Form, useNavigate } from "react-router-dom";
import OpenModalButton from "../OpenModalButton";
import EditItem from "./utility/forms/EditItem";
import DeleteItem from "./utility/forms/DeleteItem";
import { AddItem } from "./utility/forms/AddItem";

const OrderDetails = ({ item }) => {
  const [addons, setAddons] = useState();
  console.log("item", item);

  useEffect(() => {
    import("../../../../team_15_csv_parser/data/addons.json")
      .then((module) => {
        setAddons(module.default);
      })
      .catch((err) => {
        console.error(err);
      });
    // console.log("addons", addons);
  });
  return (
    <div className="flex flex-col">
      {/* <img>{item.image}</img> */}
      <h1 className="font-bold text-2xl text-center">{item.name}</h1>
    {addons
      ? addons["ADD-ONS"].map((addon, i) => {
          return (
            <div className="flex mx-5 my-3" key={i}>
              <form>
                <input
                  className="mr-2"
                  type="checkbox"
                  name={addon.addon_name}
                  value={addon["ADD-ONS"]}
                  />
                <label className="" htmlFor={addon.addon_name}>{addon["ADD-ONS"]}</label>
                <p>{addon["NUTRITIONAL FACTS"]}</p>
              </form>
            </div>
          );
        })
      : null};
      </div>
  )
};

const AddToCartButton = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (item, amount) => {
    dispatch(addToCart(item, amount));
  };
  return (
    <button
      onClick={() => handleAddToCart(item, 1)}
      className="green-btn add-to-cart-btn"
    >
      ADD TO CART
    </button>
  );
};

const MenuPage = () => {
  const [category, setCategory] = useState("combos");
  const dispatch = useDispatch();
  const menu1 = Object.values(useSelector((state) => state.menuReducer));
  const user = useSelector((state) => state.session.user);
  const navigate = useNavigate();
  console.log("menu", menu1);

  console.log("========", user);
  const [flippedCardId, setFlippCardId] = useState(null);

  const flipCard = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    // Used double equality to match string numbers against int
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
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const renderCarousel = () => {
    let menuSubset = [];

    menu1.forEach((item) => {
      if (category === item.category) {
        menuSubset.push(item);
      }
    });
    console.log("menuSubset", menuSubset);
    return menuSubset.map((item, i) => {
      return (
        <div key={i}>
          <div id={i} key={i} onClick={flipCard}>
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
                buttonText={
                  <button className="green-btn add-to-cart-btn">
                    EDIT ITEM
                  </button>
                }
              />
              <OpenModalButton
                modalComponent={<DeleteItem menu_id={item.id} />}
                buttonText={
                  <button className="red-btn add-to-cart-btn">DELETE</button>
                }
              />
            </div>
          ) : (
            <OpenModalButton
              className="green-btn add-to-cart-btn"
              modalComponent={<OrderDetails item={item} />}
              buttonText="Add to Cart"
              // onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
              // onModalClose,  // optional: callback function that will be called once the modal is closed
              // className,
              // id,
              // style
            />
          )}
        </div>
      );
    });
  };

  return (
    <div className="menu">
      <h1 className="font-bold text-6xl py-10">OUR MENU</h1>
      {user?.admin ? (
        <div>
          <button
            className="blue-btn add-to-cart-btn"
            onClick={() => navigate("/menu/add-item")}
          >
            ADD ITEM
          </button>
        </div>
      ) : null}
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
