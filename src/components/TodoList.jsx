import React from "react";
import TodoItem from "./TodoItem";

const TodosList = ({ todoProps, setTodo, handleChange, delTodo}) => {
    return (
      <ul style={{listStyleType: "none"}}>
        {todoProps.map((todo) => (
          <TodoItem key={todo.id} itemProp={todo} setTodo={setTodo} delTodo={delTodo}/>
        ))}
      </ul>
    );
  };
  export default TodosList;