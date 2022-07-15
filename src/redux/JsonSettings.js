import security from '../assets/json/security.json'

const json = security

export function JsonReducer(state = json, action) {
    switch (action.type) {
        case "UPDATE_OBJECT":
            return Object.fromEntries(Object.entries(security).map(([key, value]) => {
                if(key == action.action.key) {
                    return [key, value = action.action.value]
                }
            }))
    
        default:
            return state
    }
}