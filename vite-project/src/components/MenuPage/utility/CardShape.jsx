import "./CardShape.css";

//variable to store the shape of the back of the card
export const BackCardItem = ({ item, i }) => {
  return (
    <div id={i} className="card-body back-card">
      <div id={i} className="card-content-back">
        <div id={i} className="product-name-back">{item.name}</div>
        <div id={i} className="product-ingredients">
          {item.ingredients?.map((ingredient, j) => {
            return (
              <div key={j}>
                <div>{ingredient.name}</div>
              </div>
            )
          })}
        </div>
        <div className="product-nutrition">
          {item.nutritions && item.nutritions?.map((nutrition, k) => {
            return (
              <div key={k}>
                <div>
                  <p>{nutrition.nutrient}</p>
                  <p>{nutrition.weight} g</p>
                  <p>{nutrition.percentage} %</p>
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
export const FrontCardItem = ({ item, i }) => {
  return (
    <div id={i} className="card-body front-card">
      <div id={i} className="card-content-front">
        <div id={i} className="product-name-front">{item.name}</div>
        <img id={i} className="product-image" src={item.image} alt="" />
      </div>
      <div id={i} className="product-price">{item.price}</div>
    </div>
  );
};

//variable to store the shape of the front of the card
export const EmptyCardItem = ({ item, i }) => {
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
