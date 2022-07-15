const person = {
    name: 'Andrey',
    email: 'andreymak2004@gmail.com',
    password: '1234'
}

export function NameReducer(state = person, action) {
    switch (action.type) {
        case "ADD_INFO": 
        console.log(action)
            return state = {
                name: action.action.name,
                email: action.action.email,
                password: action.action.password
            }
        case "GO_OUT":
            return state = false
        default:
            return state
    }
}