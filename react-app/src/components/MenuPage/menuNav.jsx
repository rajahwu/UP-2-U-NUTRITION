

export const MenuNav = ({ setCategory }) => {

  const menuCategories = [
    "combos",
    "supah shakes",
    "special teas",
    "more for you",
    "stays active",
    "goodies",
    "insaniteas"
  ];

  const handleMenuItemClick = (menuItem) => {
    setCategory(menuItem)
  }

  const menuSelectionLines = [
    "/images/selected_cat/circle_1.png",
    "/images/selected_cat/circle_2.png",
    "/images/selected_cat/circle_3.png",
    "/images/selected_cat/circle_4.png",
    "/images/selected_cat/circle_5.png",
    "/images/selected_cat/circle_6.png",
    "/images/selected_cat/circle_6.png"
  ];

  return (
    <div className="menu-nav-categories" >
      <div className='menu-panel flex w-full'>
        {menuCategories.map((cat, i) => (

          <div
            key={`category-${i}`}
            className="categories-container category-title"
            onClick={() => handleMenuItemClick(cat)}>{cat}
            <img
              className='selector-lines'
              src={menuSelectionLines[i]} alt=""
            />
          </div>
        ))}
      </div>
    </div >

  );
};
