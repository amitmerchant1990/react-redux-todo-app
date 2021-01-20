export function createTodo(text) {
    return {
        type: 'CREATE_TODO',
        text
    }
};

export function deleteTodo(id) {
    return {
        type: 'DELETE_TODO',
        id
    }
};