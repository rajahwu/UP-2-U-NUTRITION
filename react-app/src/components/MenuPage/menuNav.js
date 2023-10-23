export const MenuNav = () => {

    //move to util file later
    const menuCat = [
        'combos',
        'supah shakes',
        'special teas',
        'for you',
        'stays active',
        'goodies'
    ]

    return (
        <div className="menu-nav-categories">
            {menuCat.map((cat, i) =>
                <div
                    key={`category-${i}`}
                    className="category"
                >
                    {cat}
                </div>
            )}
        </div>
    );
};
