export default (state = [], action) => {
    switch (action.type) {
        case 'CREATE_TODO':
            return state.concat([action.text])
        case 'DELETE_TODO':
            return state.filter(function (val, key) {
                return key !== action.id
            })
        default:
            return state;
    }
}