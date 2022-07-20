import { ADD_REQUESTS } from "../utils/constants"

const requests = []

export function requestReducer(state = requests, action) {
    switch (action.type) {
        case ADD_REQUESTS:
            return [...state, action.array]
    
        default:
            return state
    }
}