import { useEffect, useState, useRef } from "react";
import { MenuNav } from "./menuNav";
import { BackCardItem, FrontCardItem } from "./utility/CardShape";
import { useModal } from "../../context/Modal";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./MenuPage.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllMenuItemThunk } from "../../store/menus";
import { addToCart } from "../../store/cart";
import { useNavigate } from "react-router-dom";
import OpenModalButton from "../OpenModalButton";
import EditItem from "./utility/forms/EditItem";
import DeleteItem from "./utility/forms/DeleteItem";
import { AddItem } from "./utility/forms/AddItem";

const AddToCartButton = ({ item, price }) => {
  const { closeModal } = useModal()
  const dispatch = useDispatch();
  const handleAddToCart = (item, amount) => {
    item.price = price.toFixed(2);
    dispatch(addToCart(item, amount));
    closeModal()
  };
  return (
    <button
      onClick={() => handleAddToCart(item, 1)}
      className="flex-1 green-btn add-to-cart-btn"
    >
      ADD TO CART
    </button>
  );
};

const CancelOrderButton = () => {
  const { closeModal } = useModal()
  return <button onClick={() => closeModal()} className="flex-1">Cancel</button>
}

const OrderDetails = ({ item }) => {
  const [addons, setAddons] = useState();
  const [price, setPrice] = useState(item.price);
  const [quantity, setQuantity] = useState(1);
  const [checkedAddons, setCheckedAddons] = useState([]);

  const handleCheckboxChange = (event, addon) => {
    const { checked } = event.target;
    const addonPrice = 1.0;
    const updatedPrice = checked ? price + addonPrice : price - addonPrice;
    setPrice(updatedPrice);
    if (checked) {
      setCheckedAddons([...checkedAddons, addon]);
      item.addons = checkedAddons;
    } else {
      const updatedAddons = checkedAddons.filter((a) => a !== addon);
      setCheckedAddons(updatedAddons);
      item.addons = checkedAddons;
    }
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    setPrice(item.price * newQuantity);
  };


  useEffect(() => {
    import("../../../../team_15_csv_parser/data/addons.json")
      .then((module) => {
        setAddons(module.default);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  return (
    <div className="flex flex-col">
      {/* <img>{item.image}</img> */}
      <div className="flex justify-between bg-slate-400">
        <div>
          <h1 className="mx-5 text-2xl font-bold">{item.name}</h1>
          <p className="mx-5 text-xl text-theme-red">${price?.toFixed(2)}</p>
        </div>
        <div className="self-center mx-5">
          <button onClick={() => {
            setQuantity(quantity - 1)
            setPrice(price * quantity)
          }} className="px-2 bg-orange-600 rounded-l-lg">-</button>
          <input className="w-5" type="text" value={quantity} onChange={(e) => {
            handleQuantityChange(quantity - 1)
          }} />
          <button onClick={() => {
            handleQuantityChange(quantity + 1)
          }} className="px-2 bg-orange-600 rounded-r-lg">+</button>
        </div>
      </div>
      {addons
        ? addons["ADD-ONS"].map((addon, i) => {
          return (
            <div className="flex mx-5 my-3" key={i}>
              <form>
                <div>
                  <input
                    className="mr-2"
                    type="checkbox"
                    name={addon.addon_name}
                    value={addon["ADD-ONS"]}
                    onChange={(e) => handleCheckboxChange(e, addon)}
                  />
                  <label className="" htmlFor={addon.addon_name}>
                    {addon["ADD-ONS"]}
                  </label>
                  <span className="mx-3">$1.00</span>
                </div>
                <p>{addon["NUTRITIONAL FACTS"]}</p>
              </form>
            </div>
          );
        })
        : null}
      <div className="inline-flex flex-auto">
        <CancelOrderButton />
        <AddToCartButton item={item} price={price} />
      </div>
    </div>
  );
};

const MenuPage = () => {
  const [category, setCategory] = useState("combos");
  const dispatch = useDispatch();
  const menu1 = Object.values(useSelector((state) => state.menuReducer));
  const user = useSelector((state) => state.session.user);
  const navigate = useNavigate();
  const [carouselDisabled, setCarouselDisabled] = useState(false);
  const [flippedCardId, setFlippCardId] = useState(null);
  const [cardWidth, setCardWidth] = useState("100%")
  console.log("menu", menu1);
  const cardContainerRef = useRef(null);

  // console.log("========", user);


  const handleViewAllClick = () => {
    setCarouselDisabled(!carouselDisabled);
    setCardWidth(carouselDisabled ? "100%" : "50%")
  };

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
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        cardContainerRef.current &&
        !cardContainerRef.current.contains(event.target)
      ) {
        // Click occurred outside of the card container
        setFlippCardId(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
        <div className="outside-each-card" key={i}>
          <div className="each-card" id={i} key={i} ref={cardContainerRef} onClick={flipCard}>
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
              className="green-btn add-to-cart-btn mb-3"
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
      <h1 className="py-10 text-6xl font-bold">OUR MENU</h1>
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
      <div className="">
        <button onClick={handleViewAllClick} className="blue-btn add-to-cart-btn handle-view">
          {carouselDisabled ? "Group View" : "View All"}
        </button>
      </div>
      <div className={`menu-item-container ${carouselDisabled ? "group-view carousel-item2" : ""}`}>
        {carouselDisabled ? renderCarousel() : (
          <Carousel
            responsive={responsive}
            containerClass="w-full h-full"
            itemClass="carousel-item"
            swipeable={true}
            showDots={false}
          >
            {renderCarousel()}
          </Carousel>
        )}
      </div>
    </div >
  );
};

export default MenuPage;
