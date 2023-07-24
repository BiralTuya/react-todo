import React from "react";
import Header from "./Header"
import TodoLogic from "./TodoLogic";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

const TodoApp = () => {
    return (
      <box sx={{ display: 'flex', alignItems: 'center'}}>
        <Card sx={{display: 'flex', backgroundColor: 'pink'}}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Header />
            <TodoLogic/>
          </CardContent>
        </Card>
      </box>
    );
  };
  export default TodoApp;
  