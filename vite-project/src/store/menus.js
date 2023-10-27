// actions

const GET_ALL_MENU = 'menus/GET_ALL_MENU'

//action creators

const actionGetAllMenu = (menu_items) => ({
    type: GET_ALL_MENU,
    menu_items
})


//thunk
export const getAllMenuItemThunk = () => async (dispatch) => {
    const res = await fetch("http://127.0.0.1:5000/api/menus")
    if (res.ok) {
        const data = await res.json()
        dispatch(actionGetAllMenu(data))
        return data
    }
}


//Reducer

const initialState = {}

const menuReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_ALL_MENU:
            newState = { ...action.menu_items }
            return newState
        default:
            return state
    }
}

export default menuReducer
