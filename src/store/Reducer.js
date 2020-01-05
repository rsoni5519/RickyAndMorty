const initialState = {
    results: []
}

const Reducer = (state = initialState, action) => {
    if(action.type === 'Load_Characters') {
        return {...state,
                results: action.value}
    }
    return state;
}
export default Reducer;