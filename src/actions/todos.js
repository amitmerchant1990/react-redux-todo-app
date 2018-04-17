export function createTodo(text){
    return {
        type: 'CREATE_TODO',
        text
    }
}