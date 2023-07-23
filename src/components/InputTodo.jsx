import React, {useState} from "react";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

const InputTodo = () => {
  const [InputTodo, setInputTodo] = useState("")

  const handleChange = (e) => {
    setInputTodo(e.target.value);
    console.log(InputTodo);
  };

    return(
      <div>
        <TextField label="Add Todo" value={InputTodo} variant="standard" onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
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