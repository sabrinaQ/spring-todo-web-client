import React, {Component} from "react";
import Todo from "../services/Todo";
import {getTodos} from "../services/todoService";
import TodoItem from "./TodoItem";
import {Space} from "antd";
import TodoForm from "./TodoForm";

interface TodoListState {
    todos: Todo[];
    loading: boolean;
}

class TodoList extends Component<any, TodoListState> {
    state = {
        todos: [],
        loading: true
    }
    //shorthand way of creating todos
    //componentDidMount is going to function asynchronously
    async componentDidMount() {
        let todos = await getTodos();
        this.setState({todos, loading: false});

    }

    //logical statement. Show loading until loading is false, then show title.
    render() {
        return (
            <div>
                <h2>This is a todo list</h2>
                {this.state.loading ? (
                    <h2>Loading...</h2>
                ) : (
                    <>
                        <TodoForm />
                        <Space direction="vertical" style={{width: 600}}>
                            {this.state.todos.map((todo: Todo) =>
                                <TodoItem key={todo.id} todo={todo}/>
                            )}
                        </Space>
                    </>
                )}
            </div>
        );
    }
}

export default TodoList;