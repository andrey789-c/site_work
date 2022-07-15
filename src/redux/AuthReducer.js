const isAuth = true

export function AuthReducer(state = isAuth, action) {
    switch (action.type) {
        case "AUTH":
            return state = true
        case "GO_OUT":
            return state = false
        default:
            return state
    }
}