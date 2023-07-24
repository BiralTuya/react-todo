import React from "react";
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({ itemProp , setTodo, delTodo}) => {

  const handleChange = (id) => {
    console.log('clicked', id);
    setTodo((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

    return (
      <li>
        <Checkbox
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        {itemProp.title}
        <IconButton onClick={() => delTodo(itemProp.id)}>
          <DeleteIcon />
        </IconButton>
      </li>
    );
  };
  export default TodoItem;