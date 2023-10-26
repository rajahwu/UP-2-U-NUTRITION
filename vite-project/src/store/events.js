//actions

const GET_ALL_EVENTS = 'events/GET_ALL_EVENTS'

//action creators


export const actionGetAllEvents = (events) => ({
    type: GET_ALL_EVENTS,
    events
})

//thunk
export const getAllEventsThunk = () => async (dispatch) => {
    // try {
    const res = await fetch("http://127.0.0.1:5000/api/events/");
    if (res.ok) {
        const data = await res.json();
        dispatch(actionGetAllEvents(data));
        return data;

    }
    // } catch (error) {
    //     console.error('Error fetching data:', error);
    //     // You can dispatch an action or handle the error in another way here.
    // }
}


//Reducer
const initialState = {}

const eventReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_ALL_EVENTS:
            newState = { ...action.events }
            // console.log("this is aciton", newState)
            return newState
        default:
            return state
    }
}


export default eventReducer
