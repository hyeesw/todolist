import React from "react";
import TodoItem from "./TodoItem";
import './TodoList.css'
//App.js에세 todos를 받을 것임 (todos: 할일 목록 배열이 들어있음)

const TodoList = ({todos, onCheckToggle}) => {
    return (
    <div className="TodoList">
        {todos.map(todo => (
            <TodoItem todo={todo} key={todo.id} onCheckToggle={onCheckToggle}/>
        ))}
    </div>
    );
}
export default TodoList;