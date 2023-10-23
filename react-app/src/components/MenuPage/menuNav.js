export const MenuNav = () => {

    const menuCat = [
        'combos',
        'supah shakes',
        'special teas',
        'for you',
        'stays active',
        'goodies'
    ]
    /* hard code categories for now

    if we have time come back to make them variables
    and add edit so Nico can change the name if he wants.
    */

    return (
        <div className="menu-nav-categories">
            {menuCat.map((cat, i) =>
                <div
                    key={i}
                    className="category"
                >
                    {cat}
                </div>
            )}
        </div>
    );
};
