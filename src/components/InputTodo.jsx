import React, {useState} from "react";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

const InputTodo = ({addTodoItem}) => {
  const [InputTodo, setInputTodo] = useState("");

  const handleChange = (e) => {
    setInputTodo(e.target.value);
  };
  const handleClick = () => {
    if (InputTodo.trim()) {
      console.log(InputTodo);
      addTodoItem(InputTodo);
      setInputTodo('');
    } else {
      alert('Please add item');
    }
  };

    return(
      <div>
        <TextField label="Add Todo" value={InputTodo} variant="standard" onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleClick}>
                <AddIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      </div>
    );
  };
  export default InputTodo;