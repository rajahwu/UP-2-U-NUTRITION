import "./CardShape.css";

//variable to store the shape of the back of the card
export const BackCardItem = (item, i) => {
  return (
    <div id={i} className="card-body back-card">
      <div className="card-content-back" id={i}>
        <div className="product-name-back" id={i}>{item.name}</div>
        <div className="product-ingredients" id={i}>
          {item.ingredients.map((ingredient, j) => {
            return (
              <div key={`ingredient-${j}`}>
                <div>{ingredient}</div>
              </div>
            )
          })}</div>
        <div className="product-nutrition">
          {item.nutrition_table.map((nutrition, k) => {
            return (
              <div key={`nutrition-${k}`}>
                <div>
                  {nutrition.nutrient}
                  {nutrition?.weight}
                  {nutrition?.percentage}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
};

//variable to store the shape of the front of the card
export const FrontCardItem = (item, i) => {
  return (
    <div id={i} className="card-body front-card">
      <div className="card-content-front" id={i}>
        <div className="product-name-front" id={i}>{item.name}</div>
        <img className="product-image" id={i} src={item.image} alt="" />
        <div className="product-price" id={i}>{item.price}</div>
      </div>
    </div>
  );
};
//variable to store the shape of the front of the card
export const EmptyCardItem = (item, i) => {
  return (
    <div id={i} className="card-body front-card">
      <div className="card-content" id={i}>X
        {/* <div className="product-name" id={i}>{item.name}</div>
        <img className="product-image" id={i} src={item.image} alt="" />
        <div className="product-price" id={i}>{item.price}</div> */}
      </div>
    </div>
  );
};
