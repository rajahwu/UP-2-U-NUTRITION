//actions

const GET_ALL_EVENTS = 'events/GET_ALL_EVENTS'
const ADD_EVENT = 'events/ADD_EVENT'

//action creators


export const actionGetAllEvents = (events) => ({
    type: GET_ALL_EVENTS,
    events
})

export const actionAddEvent = (event) => ({
    type: ADD_EVENT,
    event
})

//thunk
export const getAllEventsThunk = () => async (dispatch) => {
    const res = await fetch("http://127.0.0.1:5000/api/events/");
    if (res.ok) {
        const data = await res.json();
        dispatch(actionGetAllEvents(data));
        return data;

    }
}

export const createEventThunk = (data) => async (dispatch) => {
    const res = await fetch("/api/events", {
        method: 'POST',
        body: data
    })
    if (res.ok) {
        const { resEvent } = await res.json()
        dispatch(actionAddEvent(resEvent))
        return resEvent
    } else {
        const error = await res.json()
        if (error.errors) {
            return error
        }
    }
}


//Reducer
const initialState = {}

const eventReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_ALL_EVENTS:
            newState = { ...action.events }
            return newState
        default:
            return state
    }
}


export default eventReducer
