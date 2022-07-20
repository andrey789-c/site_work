import { AUTH, EXIT } from "../utils/constants"

const isAuth = true

export function AuthReducer(state = isAuth, action) {
    switch (action.type) {
        case AUTH:
            return state = true
        case EXIT:
            return state = false
        default:
            return state
    }
}