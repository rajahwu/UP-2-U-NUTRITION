import { isEqual } from "lodash";
// actions


const GET_CART_ITEMS = 'menus/GET_CART_ITEMS'
const ADD_TO_CART = 'cart/ADD_TO_CART'
const UPDATE_CART = 'cart/UPDATE_CART'
const REMOVE_FROM_CART = 'cart/REMOVE_FROM_CART'
const SEND_MESSAGE = 'twilio/SEND_MESSAGE'
const CLEAR_CART = 'cart/CLEAR_CART'
//action creators

const actionGetCartItems = (menu_items) => ({
    type: GET_CART_ITEMS,
    menu_items,
});

const actionAddToCart = (menu_item, amount = 1) => ({
    type: ADD_TO_CART,
    menu_item,
    amount,
})

const actionSendMessage = (message) => ({
    type: SEND_MESSAGE,
    message
})


const actionClearCart = () => ({
    type: CLEAR_CART,
});

const actionUpdateCart = (menu_item, amount) => ({ type: UPDATE_CART, menu_item, amount })

const actionRemoveFromCart = (menu_item) => ({ type: REMOVE_FROM_CART, menu_item })

export const getCartItems = (menu_items) => async (dispatch) => {
    dispatch(actionGetCartItems(menu_items));
};

export const addToCart = (menu_item) => async (dispatch) => {
    dispatch(actionAddToCart(menu_item));
};

export const updateCartItemAmount = (menu_item) => async (dispatch) => {
    dispatch(actionUpdateCart(menu_item));
};

export const removeFromCart = (menu_item) => async (dispatch) => {
    dispatch(actionRemoveFromCart(menu_item));
};

export const placeOrderThunk = (order, user) => async (dispatch) => {
    console.log("this is order =====", order)
    const res = await fetch("/api/twilio", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "message": order,
            "user": user
        }),
    })
    if (res.ok) {
        const data = await res.json()
        dispatch(actionClearCart());
        console.log("======== message sent",)
    } else {
        console.log("======= fail to send sms")
    }
}

//Reducer

const initialState = {};

const cartReducer = (state = initialState, action) => {
    let newState;

    switch (action.type) {
        case GET_CART_ITEMS:
            newState = { ...action.menu_items }
            return newState
        case ADD_TO_CART:
            newState = { ...state };
            const menuItemId = action.menu_item.id;
            const existingCartItem = newState[menuItemId];

            if (existingCartItem) {
                // Check if the addons are the same
                const addonsMatch = isEqual(existingCartItem.addons, action.menu_item.addons);

                if (addonsMatch) {
                    // Addons are the same, increment the 'amount'
                    existingCartItem.amount += action.menu_item.amount || 1;
                } else {
                    // Addons are different, create a new cart item with a unique identifier
                    const uniqueItemId = `${menuItemId}-${Date.now()}`;
                    newState[uniqueItemId] = { ...action.menu_item, id: uniqueItemId };
                    newState[uniqueItemId].amount = action.menu_item.amount || 1 // Set the amount to 1 for new item
                }
            } else {
                // Item does not exist in the cart, add it
                newState[menuItemId] = { ...action.menu_item };
                newState[menuItemId].amount = action.menu_item.amount || 1;
            }
            return newState;
        case UPDATE_CART:
            newState = { ...state };
            if (newState[action.menu_item.id]) {
                // Update the 'amount' for the item in the cart
                newState[action.menu_item.id].amount = action.menu_item.amount;
            }
            return newState;

        case REMOVE_FROM_CART:
            newState = { ...state };
            delete newState[action.menu_item.id];
            return newState;
        case CLEAR_CART:
            newState = {}
            return newState

        default:
            return state
    }
}

export default cartReducer
