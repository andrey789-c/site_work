import { ADD_RESPONSE } from "../utils/constants"

const response = []

export function responseReducer(state = response, action) {
    switch (action.type) {
        case ADD_RESPONSE:
            return [...state, action.array]
    
        default:
            return state
    }
}