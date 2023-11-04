import { isEqual } from "lodash";
// actions

const GET_CART_ITEMS = "menus/GET_CART_ITEMS";
const ADD_TO_CART = "cart/ADD_TO_CART";
const UPDATE_CART = "cart/UPDATE_CART";
const REMOVE_FROM_CART = "cart/REMOVE_FROM_CART";
//action creators

const actionGetCartItems = (menu_items) => ({
  type: GET_CART_ITEMS,
  menu_items,
});

const actionAddToCart = (menu_item, amount = 1) => ({
  type: ADD_TO_CART,
  menu_item,
  amount,
});

const actionUpdateCart = (menu_item, amount) => ({
  type: UPDATE_CART,
  menu_item,
  amount,
});

const actionRemoveFromCart = (menu_item) => ({
  type: REMOVE_FROM_CART,
  menu_item,
});

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

//Reducer

const initialState = {};

const cartReducer = (state = initialState, action) => {
  let newState;
  let newItem;
  let itemIdentifier;

  switch (action.type) {
    case GET_CART_ITEMS:
      newState = { ...action.menu_items };
      return newState;
    case ADD_TO_CART:
      newState = { ...state };
      newItem = { ...action.menu_item, addons: action.menu_item.addons || [] };

      itemIdentifier = JSON.stringify({
        id: newItem.id,
        name: newItem.name,
        addons: newItem.addons,
      });

      if (newState[itemIdentifier]) {
        // Item with the same name and addons exists, update the 'amount'
        newState[itemIdentifier].amount += action.amount || 1;
      } else {
        // Item does not exist in the cart, add it
        newItem.amount = action.amount || 1;
        newState[itemIdentifier] = newItem;
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

    default:
      return state;
  }
};

export default cartReducer;
