const role = 'Я исполнитель'

export function executorReducer(state = role, action) {
    switch (action.type) {
        case "ROLE_REVERSAL":
            return state = action.action
        default:
            return state
    }
}