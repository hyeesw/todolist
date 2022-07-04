import { useState } from 'react';
import './App.css';
import Template from './components/Template';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import {MdAddCircle} from "react-icons/md";

let nextId = 4;

const App = () => {
  const [insertToggle, setInsertToggle] = useState(false);
  //todos : 할일 목록, setTodos : 할일 목록을 조작하는 함수
  const [todos, setTodos] = useState([
    {
      id : 1,
      text: "할일 1",
      checked: true
    },
    {
      id : 2,
      text: "할일 2",
      checked: true
    },
    {
      id : 3,
      text: "할일 3",
      checked: true
    }
  ]);

  const onInsertToggle = () => {
    setInsertToggle(prev => !prev);
  }

  const onInsertTodo = (text) => {
    if (text === ""){
      return alert('할 일을 입력해주세요');
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false
      };
      setTodos(todos => todos.concat(todo));
      nextId++;
    }
  }

  const onCheckToggle = (id) => {
    setTodos(todos => 
      todos.map(todo => 
        todo.id === id ? {...todo, checked: !todo.checked} : todo
      )
    );
  }

  return (
    <Template todoLength={todos.length}>
      <TodoList todos={todos} onCheckToggle={onCheckToggle} />
      <div className='add-todo-button' onClick={onInsertToggle}>
        <MdAddCircle/>
      </div>
      {insertToggle && (
        <TodoInsert 
          onInsertToggle={onInsertToggle}
          onInsertTodo={onInsertTodo}
        />
      )}
    </Template>
    );
}

export default App;