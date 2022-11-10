const shopReducer = (state = [], action) => {
    switch (action.type) {
        case "add_product":
            return [...state, action.payload]
        default:
            return state
    }
}
export default shopReducer
