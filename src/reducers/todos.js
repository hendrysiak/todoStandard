export const todos = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_TODOS_SUCCESS':
            return [...action.todos]
        default:
            return state
    }
}