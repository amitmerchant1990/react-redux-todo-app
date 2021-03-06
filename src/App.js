import React from 'react';
import { connect } from 'react-redux';
import { createTodo, deleteTodo } from './actions/todos';

class App extends React.Component {
    _handleChange = e => {
        e.preventDefault();
        let item = e.target.querySelector('input').value;

        if (item !== '') {
            this.props.createTodo(item);
            this.refs.todoItem.value = '';
            this.refs.todoItem.focus();
        }
    }

    _handleDelete = id => {
        this.props.deleteTodo(id)
    }

    render() {
        return (
            <div>
                <form onSubmit={this._handleChange}>
                    <input type="text" name="listItem" ref="todoItem" />
                    <button type="submit">Add</button>
                </form>
                <br />
                {this.props.todos.map((text, id) => (
                    <div key={id}>
                        <span>{text}</span>
                        <span><button onClick={() => this._handleDelete(id)}>X</button></span>
                    </div>
                ))}
            </div>
        )
    }
}

export default connect(state => ({
    todos: state.todos
}), { createTodo, deleteTodo })(App);
