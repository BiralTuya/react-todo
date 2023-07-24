import React , {useState} from "react";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

const TodoLogic = () => {
    const [todo, setTodo] = useState([]);

      const delTodo = (id) => {
        console.log('deleted', id);
        setTodo([
          ...todo.filter((todo) => {
            return todo.id !== id;
          }),
        ]);
      };

      const addTodoItem = (title) => {
        const newTodo = {
          id: uuidv4(),
          title: title,
          completed: false,
        };
        setTodo([...todo, newTodo]);
      };

    return (
      <div>
        <InputTodo addTodoItem={addTodoItem}/>
        <TodoList todoProps={todo} setTodo={setTodo} delTodo={delTodo}/>
        </div>
    )
  }
  export default TodoLogic;
  