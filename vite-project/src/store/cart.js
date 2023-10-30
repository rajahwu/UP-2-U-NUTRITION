// actions

const ADD_TO_CART = 'cart/ADD_TO_CART'
const REMOVE_FROM_CART = 'cart/REMOVE_FROM_CART'
const GET_CART_ITEMS = 'menus/GET_CART_ITEMS'
//action creators

const actionGetCartItems = (menu_items) => ({
    type: GET_CART_ITEMS,
    menu_items
})


const actionAddToCart = (menu_item, amount = 1) => ({
    type: ADD_TO_CART,
    menu_item,
    amount
})

const actionRemoveFromCart = (menu_item) => ({
    type: REMOVE_FROM_CART,
    menu_item
})


export const getCartItems = (menu_items) => async (dispatch) => {
    dispatch(actionGetCartItems(menu_items))
}

export const addToCart = (menu_item) => async (dispatch) => {
    dispatch(actionAddToCart(menu_item))
}

export const removeFromCart = (menu_item) => async (dispatch) => {
    dispatch(actionRemoveFromCart(menu_item))

}


//Reducer

const initialState = {}

const cartReducer = (state = initialState, action) => {
    let newState;
    
    switch (action.type) {
        case GET_CART_ITEMS:
            newState = { ...action.menu_items }
            return newState
        case ADD_TO_CART:
            newState = { ...state };
            // console.log("Add to cart reducer", {id: action.menu_item.id, amount: action.menu_item.amount, newState})
            if (newState[action.menu_item.id]) {
                // Item already exists in the cart, increment the 'amount'
                newState[action.menu_item.id].amount = (newState[action.menu_item.id].amount || 0) + (action.menu_item.amount || 1);
            } else {
                // Item does not exist in the cart, add it
                newState[action.menu_item.id] = { ...action.menu_item };
                newState[action.menu_item.id].amount = action.menu_item.amount || 1;
            }
            return newState;

        case REMOVE_FROM_CART:
            newState = { ...state };
            delete newState[action.menu_item.id];
            return newState;

        default:
            return state
    }
}

export default cartReducer
