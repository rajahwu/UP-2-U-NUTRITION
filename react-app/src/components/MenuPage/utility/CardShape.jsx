import "./CardShape.css";
import OpenModalButton from "../../OpenModalButton";
import { useModal } from "../../../context/Modal";
import EditItem from "./forms/EditItem";

//variable to store the shape of the back of the card
export const BackCardItem = ({ item, i }) => {
  return (
    <div id={i} className="card-body back-card">
      <div id={i} className="card-content-back">
        <div id={i} className="product-name-back">{item.name}</div>
        <div id={i} className="">
          <h3 className="menu-items-sub-cat">Ingredients: </h3>
          {item.ingredients?.map((ingredient, j) => {
            return (
              <div key={j}>{ingredient.ingredient_name}</div>
            )
          })}
        </div>
        <div>
          {item.nutritions && item.nutritions.length > 0 ? (
            < div >
              <h3 className="menu-items-sub-cat">Nutrition:</h3>
              {item.nutritions.map((nutrition, k) => {
                return <p key={k} >{nutrition.nutrient}: {nutrition.weight}</p>
              })}
            </div>
          ) : null}
        </div>
      </div>
    </div >
  )
};

//variable to store the shape of the front of the card
export const FrontCardItem = ({ item, i }) => {
  return (
    <div id={i} className="card-body front-card">
      <div id={i} className="card-content-front">
        <div id={i} className="product-name-front">{item.name}</div>
        <img id={i} className="product-image" src={item.image} alt="" />
      </div>
      <div id={i} className="product-price">${item.price}</div>
    </div>
  );
};
