import { createStore, compose } from 'redux';
import { combineReducers } from "redux";
import todos from './reducers';

const rootReducer = combineReducers({
    todos
})

export default createStore(
    rootReducer,
    undefined,
    compose(
        window.devToolExtension ? window.devToolExtension() : f => f
    )
)