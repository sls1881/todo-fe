import React, { Component } from 'react'
import { addTodo, completedTodo, getTodos } from '../ApiUtils'

export default class TodosListPage extends Component {
    //Initialize state
    state = {
        todos: [],
        todo: ''
    }

    componentDidMount = async () => {
        await this.fetchTodos();
    }

    fetchTodos = async () => {
        const todos = await getTodos(this.props.user.token)

        this.setState({ todos })
    }



    handleSubmit = async e => {
        e.preventDefault();
        await addTodo(this.state.todo, this.props.user.token)
        await this.fetchTodos();
        this.setState({ todo: '' })
    }

    handleTodoChange = e => this.setState({ todo: e.target.value })

    handleComplete = async (todoId) => {
        await completedTodo(todoId, this.props.user.token)
        this.fetchTodos();
    }

    render() {
        console.log(this.state.todos);
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.todo} onChange={this.handleTodoChange} />
                    <button>Create Todo</button>
                </form>
                {!this.state.todos.length && <p>You don't have any todos!</p>}
                {this.state.todos.map(todo =>
                    <p key={`${todo.id}`} onClick={() => this.handleComplete(todo.id)} className={`todo ${todo.completed ? 'completed' : ''}`}> {todo.todo}</p>
                )}
            </div>
        )
    }
}
