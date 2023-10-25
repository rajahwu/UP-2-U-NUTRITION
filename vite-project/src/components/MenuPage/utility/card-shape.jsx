//variable to store the shape of the back of the card
export const BackCardItem = (item, i) => {
    return (
      <div id={i} className="card">
        <div className="menu-item back-card" id={i}>
          <div id={i}>{item.name}</div>
          <div id={i}>{item.ingredients}</div>
          {/* <div>{item.nutrition_table}</div> */}
        </div>
      </div>
    )
    };

    //variable to store the shape of the front of the card
export const FrontCardItem = (item, i) => {
    return (
      <div id={i} className="card">
        <div className="menu-item front-card" id={i}>
          <div id={i}>{item.name}</div>
          <img id={i} src={item.image} alt="" />
        </div>
      </div>
    );
  };
